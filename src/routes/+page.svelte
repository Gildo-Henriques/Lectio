<script>
  import Hero from "$lib/Hero.svelte";
  import BtnBlack from "$lib/BtnBlack.svelte";
  
</script>


<Hero />
<section class="w-full 2xl:px-40 lg:px-20 px-5 flex lg:flex-row md:flex-row flex-col gap-y-3 items-center justify-between mt-10 2xl:mt-20 lg:mt-10">
  <div class="lg:px-7 2xl:space-y-10 lg:space-y-5 space-y-8"
  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h2 class="2xl:text-6xl lg:text-4xl text-3xl 2xl:font-medium font-semibold lg:font-semibold">Sobre nós</h2>
    <p class="text-lg">
      Somos uma plataforma dedicada a facilitar o acesso à leitura para todos.
      Oferecemos uma vasta coleção de livros em formato PDF para download
      gratuíto e também a opção de requisitar livros impressos. Acreditamos que
      a leitura deve ser acessível a todos, independentemente de suas
      preferências e formato.
    </p>
  </div>
  <img src="./lendo.jpg" alt="" class="lg:h-[400px] md:w-80 h-auto w-full lg:w-auto " 
  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
</section>
<section class="w-full 2xl:px-48 lg:px-28 px-5 flex lg:flex-row md:flex-row flex-col-reverse items-center justify-between  mt-12 shadow gap-y-5 md:gap-x-8 lg:py-10 md:py-5">
  <img src="./pexels-andrea-piacquadio-920381.jpg" alt="" class="lg:h-80 lg:w-auto md:w-80 w-full h-auto" 
  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
  <div class="lg:pl-10 2xl:space-y-10 lg:space-y-5"
>
    <h2 class="2xl:text-6xl lg:text-4xl text-3xl 2xl:font-medium font-semibold lg:font-semibold">Como funciona</h2>
    <p class="text-lg">
      Somos uma plataforma dedicada a facilitar o acesso à leitura para todos.
      Oferecemos uma vasta coleção de livros em formato PDF para download
      gratuíto e também a opção de requisitar livros impressos. Acreditamos que
      a leitura deve ser acessível a todos, independentemente de suas
      preferências e formato.
    </p>
  </div>
</section>
<section class="w-full 2xl:px-44 lg:px-28 px-5 mt-10">
  <div class="space-y-5 ">
   <div class="">
    <span class="flex items-end space-x-3">
      <span>
        Populares
      </span>
      <span class="text-indigo-600 font-bold border-t-2 w-20 border-indigo-600"></span>
    </span>
    <h2 class="2xl:text-6xl lg:text-4xl text-3xl 2xl:font-medium font-semibold lg:font-semibold">Livros populares</h2>
   </div>
    <p>Confira os títulos mais baixados e requisitados da nossa coleção:</p>
  </div>
  <figure class="w-full mt-10 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 *:space-y-2 gap-y-10 gap-x-2 *:2xl:w-96  *:md:w-full   *:h-52">
    <article class="">
      <div class="2xl:w-96 lg:w-full w-full bg-gradient-to-t to-slate-50 from-black/5 flex justify-center items-center p-5 h-52">
        <img src="./arrume.png" alt="" class="h-36">
  
      </div>
      <div class="w-full flex space-x-5">
        <button class="text-indigo-700 py-1">Baixar livro</button>
        <button>Fazer requisição</button>
      </div>
    </article>
    <article>
      <div class="2xl:w-96 lg:w-full w-full bg-gradient-to-t to-slate-50 from-black/5 flex justify-center items-center p-5 h-52">
        <img src="./convencer.png" alt="" class="h-36">
  
      </div>
      <div class="w-full flex space-x-5">
        <button class="text-indigo-700 py-1">Baixar livro</button>
        <button>Fazer requisição</button>
      </div>
    </article>
    <article>
      <div class="2xl:w-96 lg:w-full w-full bg-gradient-to-t to-slate-50 from-black/5 flex justify-center items-center p-5 h-52">
        <img src="./foco.png" alt="" class="h-36">
  
      </div>
      <div class="w-full flex space-x-5">
        <button class="text-indigo-700 py-1">Baixar livro</button>
        <button>Fazer requisição</button>
      </div>
    </article>
    <article>
      <div class="2xl:w-96 lg:w-full w-full bg-gradient-to-t to-slate-50 from-black/5 flex justify-center items-center p-5 h-52">
        <img src="./4 segredos.png" alt="" class="h-36">
  
      </div>
      <div class="w-full flex space-x-5">
        <button class="text-indigo-700 py-1">Baixar livro</button>
        <button>Fazer requisição</button>
      </div>
    </article>
    <article>
      <div class="2xl:w-96 lg:w-full w-full bg-gradient-to-t to-slate-50 from-black/5 flex justify-center items-center p-5 h-52">
        <img src="./homem mais rico da babilónia.png" alt="" class="h-36">
  
      </div>
      <div class="w-full flex space-x-5">
        <button class="text-indigo-700 py-1">Baixar livro</button>
        <button>Fazer requisição</button>
      </div>
    </article>
    <article>
      <div class="2xl:w-96 lg:w-full w-full bg-gradient-to-t to-slate-50 from-black/5 flex justify-center items-center p-5 h-52">
        <img src="./mindset.png" alt="" class="h-36">
  
      </div>
      <div class="w-full flex space-x-5">
        <button class="text-indigo-700 py-1">Baixar livro</button>
        <button>Fazer requisição</button>
      </div>
    </article>
     
  </figure>
  <div class="mt-20">
    <BtnBlack href="/livros" texto="Ver mais livros" />
  </div>
</section>
<section class="w-full h-[500px] mt-16 relative flex items-start justify-end 2xl:px-44">
  <img src="./lib.jpg" alt="" class="-z-10 absolute top-0 left-0 w-full h-full object-left object-cover">
  <div class="h-full 2xl:w-[600px] w-full flex flex-col justify-center  bg-white/80 2xl:p-8 lg:px-28 p-5">
    <span class="flex items-end space-x-3">
      <span>
        Benefícios
      </span>
      <span class="text-indigo-600 font-bold border-t-2 w-20 border-indigo-600"></span>
    </span>
  <h2 class="lg:text-4xl text-3xl 2xl:font-semibold font-semibold lg:font-semibold">Por que escolher nossa plataforma?</h2>
  <div class="mt-14 space-y-8">
    <article class="flex items-center space-x-3 text-lg"
    >
      <div class="bg-indigo-300 h-10 w-10 flex-shrink-0 text-white rounded-full items-center justify-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        
      </div>
      <span><strong>Acesso gratuito:</strong> Todos os PDFs disponíveis para download sem custos.</span>
    </article>
    <!--  -->
    <article class="flex items-center space-x-3 text-lg">
      <div class="bg-indigo-300 flex-shrink-0 h-10 w-10 text-white rounded-full items-center justify-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
        
      </div>
      <span><strong>Personalização:</strong> Receba livros impressos de acordo com as sua preferências.</span>
    </article>
    <!--  -->
    <article class="flex items-center space-x-3 text-lg">
      <div class="bg-indigo-300 h-10 w-10 text-white flex-shrink-0 rounded-full items-center justify-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      </div>
      <span><strong>Variedade:</strong> Uma ampla seleção de livros de diferentes gêneros e autores.</span>
    </article>
    <!--  -->
   
  </div>
</div>
</section>


