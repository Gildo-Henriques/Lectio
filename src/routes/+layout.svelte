<script>
  import "../app.css";
  import Navbar from  "$lib/Navbar.svelte"
  import AOS from "aos";
  import "aos/dist/aos.css"
  import {onMount} from "svelte"
  
  
  onMount(()=>{
    AOS.init();
  })
  
</script>

<header class="flex h-20 shadow-md px-5 w-full items-center lg:justify-around justify-between fixed top-0 bg-white z-10"
data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
    <div class="flex items-center">
        <!-- logo -->
        <a href="" class="flex items-center space-x-3 z-10">
<img src="./logo.png" alt="" class="h-10">
<span class="text-lg ">Lectio</span>
        </a>
    </div>
    <!-- Links -->
    <Navbar />
    <div class="lg:flex hidden space-x-8 items-center">
        <a href="">Login</a>
        <a href="" class="bg-black text-white px-8 py-2 rounded-full">Sign in</a>
    </div>

</header>
<slot></slot>