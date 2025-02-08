import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

export interface Service {
  title: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string | null;
  text: string;
}

export interface GalleryItem {
  src: string | null;
  category: string;
  title: string;
  description: string;
}

export interface Slide {
  image: string | null;
  title: string;
  subtitle: string;
}

export async function fetchServices(): Promise<Service[]> {
  try {
    const response = await axios.get<Service[]>(`${API_BASE_URL}/services`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
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

export async function fetchGalleryCategories(): Promise<string[]> {
  try {
    const response = await axios.get<string[]>(`${API_BASE_URL}/gallery-categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function fetchGalleryItems(): Promise<GalleryItem[]> {
  try {
    const response = await axios.get<GalleryItem[]>(`${API_BASE_URL}/gallery`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    throw error;
  }
}

export async function fetchSlides(): Promise<Slide[]> {
  try {
    const response = await axios.get<Slide[]>(`${API_BASE_URL}/slides`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    throw error;
  }
}