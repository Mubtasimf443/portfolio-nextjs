/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

async function checkAuth() {
  // This will be replaced with your actual auth checking logic
  const cookieStore = cookies();
  const token = cookieStore.get('auth-token'); // or whatever your token name is

  if (!token) {
    return false;
  }

  // Add API call to verify token
  try {
    const response = await fetch('your-api-url/verify-token', {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export default async function AdminPage() {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    redirect('/admin/auth');
  }

  // If authenticated, redirect to dashboard
  redirect('/admin/dashboard');
}