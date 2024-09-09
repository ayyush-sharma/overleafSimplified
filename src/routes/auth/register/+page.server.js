    import { fail, redirect } from '@sveltejs/kit';
    
    export const actions = {

        register: async ({ cookies, request }) => {
            const data = await request.formData();
            const fullName = data.get('fullName')
            const email = data.get('email');
            const pin = data.get('password');
            try {
                const response = await fetch("http://localhost:8000/create-account", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName: fullName,
                        email: email,
                        pin: pin
                    }),
                });
            const responseData = await response.json();

            console.log('Setting cookie...');
            cookies.set('accessToken', responseData.accessToken, {
                path: '/',
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
            });


            // Redirect to another page or return a success message
            console.log('Redirecting Register...');
            return {
                success: true,
                message: 'Login successful!',
            };
            } catch (error) {
                return fail(401, {
                success: false,
                message: 'Login failed',
            });
            }
            
    
            
            


        }
    };
