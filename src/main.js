import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { SiYoutubegaming, GiBrokenSkull, BiHeartHalf } from "oh-vue-icons/icons";

addIcons(SiYoutubegaming, GiBrokenSkull, BiHeartHalf);

const app = createApp(App)
app.component("v-icon", OhVueIcon)

app.mount('#app')
