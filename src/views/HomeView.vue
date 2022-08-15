<template>
  <category-component />
  <div class="flex flex-wrap pt-36">
    <card-component
      v-for="(video , index) in videos"
      :key="index"
    >
      <figure v-if="video.snippet" class="card p-2 tablet:w-1/4 w-full break-words cursor-pointer hover:bg-gray-300" @click="playVideo(video.id.videoId)">
        <img :src="video.snippet.thumbnails.medium.url" alt="" class="w-full" />
        <figcaption class="box-border break-words">
            <h1 class="hidden-text">{{video.snippet.title}}</h1>
            <span class="mt-5 text-sm text-gray-500">{{video.snippet.channelTitle}}</span>
        </figcaption>
      </figure>
    </card-component>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'


export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return {
      videos: []
    }
  },
  methods: {
    async getData(){
      await axios.get('https://mengyer34.github.io/testing-vtube-json-api/youtube.json')
      .then((response) => {
        console.log(response.data)
        this.videos = response.data;
      })
    },
    playVideo(data){
      this.$router.push({ name: 'watch', params: { id: data } })
    }
  },
  mounted() {
    console.log('mounted');
    this.getData();
  }
}
</script>
