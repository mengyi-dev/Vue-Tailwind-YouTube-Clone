<template>
  <div class="flex">
    <navLeft-component/>
    <navTop-component/>
  </div>
  <!-- show card video  -->
  <div class="bg-gray-200 tablet:w-[92.4%] w-full absolute right-0">
    <div class="relative bg-gray-200 min-h-full pb-28">
      <router-view/>
    </div>
  </div>
</template>

<style>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
