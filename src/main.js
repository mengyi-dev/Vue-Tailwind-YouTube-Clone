import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


import CardComponent from './components/CardComponent'
import ListCategoryComponent from './components/ListCategoryComponent'
import NavBarLeft from './components/NavBarLeft'
import NavBarTop from './components/NavBarTop'

const app = createApp(App);
app.component('navLeft-component', NavBarLeft)
app.component('navTop-component', NavBarTop)
app.component('card-component', CardComponent)
app.component('category-component', ListCategoryComponent)

app.use(router).mount('#app')
