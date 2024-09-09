import { handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
//   const cookies = event.request.headers.get('cookie');
//   const accessToken = cookies && cookies.split('accessToken=')[1];
//   event.locals.at = accessToken

//   if (event.request.method === 'POST' && event.url.pathname === '/auth/login') {
//     return await resolve(event); // allow login requests to proceed
//   }

//   if (event.url.pathname === '/' && !accessToken) {
//     console.log('Redirecting to /register');
//     throw redirect(302, '/auth/login');
//   }
  if (event.url.pathname === '/') {
    console.log('Redirecting to /register');
    throw redirect(302, '/public');
  }
  
//   if (event.url.pathname === '/auth/register' && accessToken) {
//     throw redirect(302, '/');
//   }
//   if (event.url.pathname === '/auth/login' && accessToken) {
//     throw redirect(302, '/'); // redirect to homepage if already logged in
//   }
//   if (!accessToken && !['/auth/register', '/auth/login'].includes(event.url.pathname)) {
//     console.log('Redirecting to /auth/login');
//     throw redirect(302, '/auth/login');
//   }
//   console.log(event.url.pathname)
//   console.log(accessToken)

  return await resolve(event);
}