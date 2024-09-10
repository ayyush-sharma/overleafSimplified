<script>
    import "../app.css";
	import Footer from "../lib/components/footer.svelte";
	import Navbar from "../lib/components/navbar.svelte";
  </script>
  <div class="w-full overflow-hidden">

    <Navbar/>
    <slot />
    <Footer/>
  </div>