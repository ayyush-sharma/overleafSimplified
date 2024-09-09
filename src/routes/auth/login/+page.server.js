import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    console.log(data);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          pin: password
        }),
      });

      const responseData = await response.json();
      console.log("Response data of login=");
      console.log(responseData);
      console.log("Above data respinse login")

      if (responseData.error) {
        // If there's an error, return a failure response
        return fail(401, {
          success: false,
          message: responseData.message,
        });
      } else {
        // Set cookies and redirect only if the login attempt is successful
        console.log('Setting cookie at Login...');
        cookies.set('accessToken', responseData.accessToken, {
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
        });
        console.log('Redirecting login...');
        // return redirect(302, '/', {
        //   success: true,
        //   message: 'Login successful!',
        // });
        return {
            success: true,
            message: 'Login successful!',
        }
      }
    } catch (error) {
      return fail(401, {
        success: false,
        message: 'Login Failed',
      });
    }
  },
};