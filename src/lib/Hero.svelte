<script>
  import BtnBlack from "./BtnBlack.svelte";
  import ButtonBlack from "./BtnBlack.svelte";
  import BtnIndigo from "./BtnIndigo.svelte";
  import ButtonIndigo from "./BtnIndigo.svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"
  import {onMount} from "svelte"
  onMount(()=>{
    AOS.init();
  })
  
</script>

<section
  class="flex w-full mt-20 md:pr-60 justify-between lg:flex-row flex-col lg:h-[600px] h-auto py-14  items-center 2xl:px-44 lg:px-28 px-5 lg:gap-x-8"
>
  <div class="w-full flex flex-col gap-y-8"
  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h1 class="2xl:text-7xl lg:text-5xl text-4xl font-semibold">Bem-vindo ao nosso portal de livros</h1>
    <p class="text-lg">
      Baixe de forma gratuíta seu livro favorito em formato digital ou faça a
      requisição do livro que deseja e nós imprimiremos e levaremos para si.
    </p>
    <div class="flex space-x-3">
      <BtnIndigo texto="Ver os livros" />
      <BtnBlack texto="Fazer requisição" />
    </div>
  </div>
  <div
    class="flex w-full h-full space-x-1 *:rounded-xl px-5 lg:flex-row flex-col"
   >
    <article
      class="bg-red-500 flex-1 w-auto relative self-start overflow-hidden transition-all hover:rounded-xl duration-300 h-[90%]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="900">
      <img
        src="./IMG-20240814-WA0019.jpg"
        alt=""
        class="h-full w-full object-cover absolute"
      />
      <div
        class="h-full w-full absolute bg-gradient-to-t to-transparent from-Black-100"
      ></div>
    </article>
    <article
      class="bg-red-500 flex-1 w-auto relative self-end overflow-hidden transition-all hover:rounded-xl duration-300 h-[90%]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="700">
      <img
        src="./IMG-20240814-WA0017.jpg"
        alt=""
        class="h-full w-full object-cover absolute"
      />
      <div
        class="h-full w-full absolute bg-gradient-to-t to-transparent from-Black-100"
      ></div>
    </article>
    <article
      class="bg-red-500 flex-1 w-auto relative self-start overflow-hidden transition-all hover:rounded-xl duration-300 h-[90%]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="900">
      <img
        src="./IMG-20240814-WA0016.jpg"
        alt=""
        class="h-full w-full object-cover absolute"
      />
      <div
        class="h-full w-full absolute bg-gradient-to-t to-transparent from-Black-100"
      ></div>
    </article>
  </div>
</section>