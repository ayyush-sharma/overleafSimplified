<script>
	import About from "../../lib/components/about.svelte";
import Cardglow from "../../lib/components/cardglow.svelte";
import Hero1 from "../../lib/components/hero1.svelte";
	import Hero2 from "../../lib/components/hero2.svelte";
	import Hero3 from "../../lib/components/hero3.svelte";
	import Hero4 from "../../lib/components/hero4.svelte";
	import Hero5 from "../../lib/components/hero5.svelte";
	import Hero7 from "../../lib/components/hero7.svelte";

</script>
<section class="pb-24 pt-20 bg-gray-800 overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
          <div class="lg:max-w-lg">
            <span class="text-lg text-blue-400 font-bold">Clouds</span>
            <h2 class="mt-8 mb-12 text-6xl 2xl:text-7xl font-bold font-heading text-white">Trusted by brands all over the world</h2>
            <p class="text-lg text-gray-200">The brown fox jumps over the lazy dog.</p>
          </div>
        </div>
        <div class="w-full lg:w-3/5 px-4">
          <div class="flex justify-center items-center">
            <div class="py-8 px-2 sm:px-6 mr-3 bg-gray-600 rounded-lg">
              <img class="h-16 mx-auto" src="zospace-assets/logos/spotify-box.svg" alt="">
            </div>
            <div class="flex flex-col mr-3">
              <div class="inline-block ml-auto py-12 px-4 sm:px-8 mb-3 bg-gray-600 rounded-lg">
                <img class="h-6 mx-auto" src="zospace-assets/logos/we-box.svg" alt="">
              </div>
              <div class="py-16 px-2 sm:px-12 bg-gray-600 rounded-lg">
                <img class="h-4 md:h-8 mx-auto" src="zospace-assets/logos/slack-box.svg" alt="">
              </div>
            </div>
            <div class="-mb-32">
              <div class="py-8 px-2 sm:px-14 mb-3 bg-gray-600 rounded-lg">
                <img class="h-16 mx-auto" src="zospace-assets/logos/miro-box.svg" alt="">
              </div>
              <div class="inline-block py-14 px-2 sm:px-8 bg-gray-600 rounded-lg">
                <img class="h-6 mx-auto" src="zospace-assets/logos/dropbox-box.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Hero1></Hero1>
  <Hero2/>
  <Hero3/>
  <Hero4/>
  <Hero5/>
<!-- <Hero7/> -->
 <Cardglow/>
 <About/>
 <div class="m-10 max-w-sm">
    <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
      <div class="relative mx-auto w-36 rounded-full">
        <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
        <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
      </div>
      <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">Michael Simbal</h1>
      <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3>
      <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
      <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
        <li class="flex items-center py-3 text-sm">
          <span>Status</span>
          <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Open for side gigs</span></span>
        </li>
        <li class="flex items-center py-3 text-sm">
          <span>Joined On</span>
          <span class="ml-auto">Apr 08, 2022</span>
        </li>
      </ul>
    </div>
  </div>
  

