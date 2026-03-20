export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}