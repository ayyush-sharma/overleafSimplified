import { redirect } from '@sveltejs/kit'

// export function load(event) {
// 	return {
// 		data: `${event.locals.at}`
// 	};
// }

// export const actions = {
//   logout: async ({ cookies}) => {
//     cookies.delete('accessToken', {
//         path : '/',
//     });
//     throw redirect(302, '/auth/register')
//   }

// }