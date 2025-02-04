"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

// Store tokens in environment variables (recommended for security)
const INSTAGRAM_ACCOUNTS = [
  { id: process.env.NEXT_PUBLIC_IG_BUSINESS_ID_1, token: process.env.NEXT_PUBLIC_IG_ACCESS_TOKEN_1 },
  { id: process.env.NEXT_PUBLIC_IG_BUSINESS_ID_2, token: process.env.NEXT_PUBLIC_IG_ACCESS_TOKEN_2 },
];

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function fetchInstagramPosts() {
      // Check if tokens exist; otherwise, use fallback
      const validAccounts = INSTAGRAM_ACCOUNTS.filter((acc) => acc.id && acc.token);

      if (validAccounts.length === 0) {
        console.warn("No Instagram tokens provided. Using fallback images.");
        setPlaceholderPosts();
        return;
      }

      try {
        const fetchPromises = validAccounts.map(async ({ id, token }) => {
          const response = await fetch(
            `https://graph.instagram.com/${id}/media?fields=id,media_url,permalink,caption&access_token=${token}`
          );

          if (!response.ok) {
            console.error(`Error fetching posts for account ${id}:`, await response.text());
            return { data: [] };
          }

          return response.json();
        });

        const results = await Promise.all(fetchPromises);
        const combinedPosts = results.flatMap((data) => data.data || []);

        if (combinedPosts.length > 0) {
          setPosts(combinedPosts);
        } else {
          setPlaceholderPosts();
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setPlaceholderPosts();
      }
    }

    function setPlaceholderPosts() {
      const placeholderPosts: InstagramPost[] = Array.from({ length: 6 }, (_, i) => ({
        id: `post-${i}`,
        media_url: `/gallery/listing/Family/family (${i + 1}).webp?height=600&width=600&text=Instagram+Post+${i + 1}`,
        permalink: "/gallery", // Added missing permalink to match the required type
        caption: `This is a placeholder caption for post ${i + 1}`,
      }));
      setPosts(placeholderPosts);
    }

    fetchInstagramPosts();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square group overflow-hidden"
        >
          <Image
            src={post.media_url}
            alt={post.caption || "Instagram Post"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Instagram className="text-white h-8 w-8" />
          </div>
        </a>
      ))}
    </div>
  );
}
