import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.PUBLIC_SUPABASE_URL ||
  process.env.PUBLIC_SUPABASE_URL ||
  'https://rgbnwbeyrjxmgmamwdgd.supabase.co';

const supabaseKey =
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  process.env.PUBLIC_SUPABASE_ANON_KEY ||
  '';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category_id?: string;
  categories?: {
    name: string;
    slug: string;
    color?: string;
  };
  featured_image?: string;
  video_url?: string;
  author_name?: string;
  status: 'draft' | 'published';
  views_count?: number;
  is_featured?: boolean;
  medically_reviewed?: boolean;
  published_at?: string;
  created_at: string;
  updated_at?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  image_url?: string;
  created_at?: string;
}

export interface Announcement {
  id: string;
  title?: string;
  message: string;
  type?: string;
  priority?: string;
  is_active: boolean;
  link_url?: string;
  link_text?: string;
  created_at?: string;
}

export interface ContactMessage {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  details?: string;
  created_at?: string;
}

// Data fetching helpers
export async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*, categories(name, slug, color)')
    .order('created_at', { ascending: false });
  if (error) console.error('Error fetching articles:', error);
  return (data as Article[]) || [];
}

export async function getPublishedArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*, categories(name, slug, color)')
    .eq('status', 'published')
    .order('created_at', { ascending: false });
  if (error) console.error('Error fetching published articles:', error);
  return (data as Article[]) || [];
}

export async function getArticleBySlugOrId(identifier: string) {
  // First try slug
  let { data, error } = await supabase
    .from('articles')
    .select('*, categories(name, slug, color)')
    .eq('slug', identifier)
    .single();

  if (!data) {
    // Try id
    const res = await supabase
      .from('articles')
      .select('*, categories(name, slug, color)')
      .eq('id', identifier)
      .single();
    data = res.data;
  }
  if (error && !data) console.error('Error fetching article by slug or id:', error);
  return data as Article | null;
}

export async function getArticleById(id: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*, categories(name, slug, color)')
    .eq('id', id)
    .single();
  if (error) console.error('Error fetching article:', error);
  return data as Article | null;
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
  if (error) console.error('Error fetching categories:', error);
  return (data as Category[]) || [];
}

export async function getAnnouncements() {
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) console.error('Error fetching announcements:', error);
  return (data as Announcement[]) || [];
}

export async function getContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) console.error('Error fetching contact messages:', error);
  return (data as ContactMessage[]) || [];
}
