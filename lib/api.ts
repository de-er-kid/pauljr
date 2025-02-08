import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

export interface Testimonial {
  name: string;
  role: string;
  image: string | null;
  text: string;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await axios.get<Testimonial[]>(`${API_BASE_URL}/testimonials`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
}