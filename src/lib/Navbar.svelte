<script>
  let navbar = false
  function openNavbar(){
    navbar = !navbar
  }
</script>


<button class="z-10 lg:hidden flex" on:click={openNavbar}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0  24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
</button> 
<nav class:navbar
  class="gap-x-5 justify-between absolute lg:static transition-all duration-700 flex lg:bg-transparent
   nav-list lg:flex-row flex-col -right-full top-0 lg:w-auto w-full lg:h-auto h-2/4
    bg-gradient-to-t to-white from-[#dadada] lg:from-white pt-24 lg:px-0 lg:py-0 px-5 py-5
 "
id="navBar">
  <ul class="flex lg:flex-row flex-col gap-8 *:lg:text-base *:text-lg">
    <a href="">HOME</a>
  <a href="">SOBRE</a>
  <a href="">LIVROS</a>
  <a href="">NOSSOS TERMOS</a>
  </ul>
  <div class="flex flex-col *:w-full gap-y-3 lg:hidden">
    <a href="" class="bg-white text-center py-2 rounded-md">Login</a>
    <a href="" class="bg-black text-white text-center py-2 rounded-md">Criar conta</a>
  </div>
</nav>
