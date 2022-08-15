<template>
    <nav class="tablet:w-[93.1%] w-full flex justify-between bg-white h-[80px] fixed top-0 right-0 z-10 border-b-[1px] border-gray-600 p-2">
      <router-link to="/" class="text-2xl flex items-center">
        <img src="../assets/logo.png" class="w-8 h-8">
        <h1 class="text-red-600 ml-2 font-extrabold font-serif">Tube</h1>
      </router-link>
  
      <label class="relative flex w-6/12 items-center space-x-0">
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 p-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
        <button class="bg-gray-200 p-[0.56rem] px-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </label>
  
      <div class=" w-2/12 flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer hover:text-[#42b983]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer hover:text-[#42b983]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round cursor-pointer" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-[#42b983] cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </nav>
</template>