import { createApp } from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss'
import './styles/element-variables.scss'

import './permission'
import App from './App.vue'
import router from './router'
import { errorHandler } from './error'
import store from './store'
import installMaxerStore, {Maxer} from './store/maxer.mixin'
import initStorePersistence from './store/store.persistence'

import TitleBar from "./components/common/TitleBar.vue"

const app = createApp(App)
installMaxerStore(app) // 全局混入vuex
initStorePersistence(store) // 初始化持久化vuex
app.use(ElementPlus)
app.use(router)
app.use(store)
errorHandler(app)

// 全局引入 TitleBar 组件
app.component("TitleBar", TitleBar);

app.mount("#app")
