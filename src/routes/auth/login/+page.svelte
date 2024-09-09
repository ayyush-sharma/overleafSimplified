<script>
	import { enhance } from '$app/forms';
    let email
    let password
	export let form
	
	$:console.log(form)
	$:if(!form?.success){
		console.log("login reactive function Failed")
	}else{
		console.log(form)
		// window.location.href = '/';
	}

</script>


<div class="h-screen bg-gray-400 dark:bg-gray-900">
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
					style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"></div>
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Login</h3>
					<form 
					method="post" action="?/login" use:enhance
					class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
								name="email"
                                placeholder="Email"
                                bind:value={email}
                            />
						</div>
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0 w-full">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Password
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
									name="password"
                                    type="password"
                                    placeholder="******************"
                                    bind:value={password}
                                />
								
							</div>

						</div>
						<div class="mb-6 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="submit"
								
                            >
                                Login
                            </button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="/">
								Forgot Password?
							</a>
						</div>
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="./index.html">
								Already have an account? Login!
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>