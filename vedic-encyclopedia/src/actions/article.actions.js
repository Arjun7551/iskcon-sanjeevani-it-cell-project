'use server';

import { supabaseAdmin } from '@/lib/supabase/admin';


const supabase = supabaseAdmin;

export async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

  return data;
}

export async function addArticle(article) {
  const { error } = await supabase
    .from('articles')
    .insert([article]);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}

export async function updateArticle(id, article) {
  const { error } = await supabase
    .from('articles')
    .update(article)
    .eq('id', id);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}

export async function deleteArticle(id) {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}

export async function deleteArticlesByCategory(categoryId) {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('category_id', categoryId);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}
