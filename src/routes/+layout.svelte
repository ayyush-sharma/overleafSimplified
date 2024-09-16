<script>
    import "../app.css";
	import Footer from "../lib/components/footer.svelte";
	import Navbar from "../lib/components/navbar.svelte";
  export let showFooter = true;
  </script>
  <div class="w-full overflow-hidden">

    <Navbar/>
    <slot />
    {#if showFooter}
    <Footer />
    {/if}
    
  </div>