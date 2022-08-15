<template>
  <section class="w-full flex flex-wrap pt-[7%]">
    <div class="laptop:w-2/3 w-full top-20 p-5 laptop:mt-0 mt-6" v-cloak>
      <iframe id="videoFrame" class="w-full h-[380px]" :src="videoToDisplay" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <!-- tags  -->
      <span class="text-sm text-blue-600 cursor-pointer">#top #popular</span>
      <!-- title  -->
      <h1 class="text-2xl">{{getDetailVideo.title}}</h1>
      <!-- action-controller  -->
      <div class="tablet:flex justify-between border-b-[1px] border-gray-600 py-3">
        <span>3000 views </span>
        <div class="flex space-x-4">
          <div class="flex cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span>Likes</span>
          </div>
          <div class="flex cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
            <span>Disikes</span>
          </div>
          <div class="flex cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Share</span>
          </div>
          <div class="flex cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
            </svg>
            <span>Clip</span>
          </div>
          <div class="flex cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
            <span>Save</span>
          </div>
        </div>
      </div>
      <!-- --- Channels -----  -->
      <div class="border-gray-600 border-b-[1px]">
        <div class="flex justify-between p-3 border-gray-600">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="block">
              <h1 class="font-bold">{{getDetailVideo.channelTitle}}</h1>
              <span class="font-thin text-sm">10M <span>subscribers</span></span>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="subscribe" v-if="subscribed" class="bg-red-700 hover:bg-red-500 px-3 py-1 text-white rounded">Subscribe</button>
            <button @click="subscribe" v-else class="bg-gray-500 hover:bg-gray-400 px-3 py-1 text-white rounded">Subscribed</button>
          </div>
        </div>
  
        <!-- ---- Description  -->
        <div class="ml-4">
          <span :class="{'hidden-text': !showDetail}">{{getDetailVideo.description}}</span><br>
          <strong class="cursor-pointer text-neutral-500" @click="showDetail=!showDetail">See more</strong>
        </div>
      </div>
    </div>

    <!-- card-video  -->
    <div class="block pt-[1%] laptop:w-1/3 w-full laptop:pl-0 pl-[2%]">
        <card-component
          v-for="(video , index) in allVideo"
          :key="index"
        >
        <figure v-if="video.snippet" class="card m-2 w-full break-words cursor-pointer hover:bg-gray-300 flex space-x-2" @click="playVideo(video.id.videoId)">
          <img :src="video.snippet.thumbnails.medium.url" alt="" width="180" height="70" />
          <figcaption class="box-border break-words">
              <h1 class="hidden-text font-semibold">{{video.snippet.title}}</h1>
              <span class="mt-5 text-sm text-gray-500">{{video.snippet.channelTitle}}</span>
          </figcaption>
      </figure>
      </card-component> 
      </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      videoId: this.$route.params.id,
      fullUrl: 'https://www.youtube.com/embed/' + this.$route.params.id,
      allVideo: [],
      showDetail: false,
      subscribed: false,
    }
  },
  methods: {
    async getData(){
      await axios.get('https://mengyer34.github.io/testing-vtube-json-api/youtube.json')
      .then((response) => {
        console.log(response.data)
        this.allVideo = response.data;
      })
    },
    convertProxy(data){
      return Object.assign({}, data)
    },
    playVideo(data){
      this.$router.push({ name: 'watch', params: { id: data } })
      this.videoId = data
    },
    subscribe(){
      this.subscribed = !this.subscribed
    }
  },
  computed: {
    getVideo(){
      let data = this.allVideo.filter(video => video.id.videoId == this.$route.params.id)[0]
      return this.convertProxy(data);
    },
    getDetailVideo(){
      return this.convertProxy(this.getVideo.snippet)
    },
    videoToDisplay(){
      return 'https://www.youtube.com/embed/' + this.videoId
    }
  },
  updated(){
    if(this.showDetail){
      console.log('only show detail!');
    }else{
      window.scrollTo(0, 0)
    }
  },  
  mounted() {
    this.getData()
  },

}
</script>



