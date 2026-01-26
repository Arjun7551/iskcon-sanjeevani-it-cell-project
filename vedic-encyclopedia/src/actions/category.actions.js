import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

  return data;
}

export async function addCategory(category) {
  const { error } = await supabase
    .from('categories')
    .insert([category]);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}

export async function updateCategory(id, category) {
  const { error } = await supabase
    .from('categories')
    .update(category)
    .eq('id', id);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}

export async function deleteCategory(id) {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) {
  console.log('SUPABASE ERROR:', error.message);
  throw new Error(error.message);
}

}
