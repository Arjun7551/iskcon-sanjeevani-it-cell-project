'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import AdminDashboardClient from './AdminDashboardClient';

export default async function AdminDashboard() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Server-side auth check - redirect if not logged in
  if (!user) {
    redirect('/admin/login');
  }

  // User is authenticated, render the client component
  return <AdminDashboardClient />;
}


