import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL;

export interface Testimonial {
  name: string;
  role: string;
  image: string | null;
  text: string;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const response = await axios.get<Testimonial[]>(`${API_BASE_URL}/testimonials`);
  return response.data;
}