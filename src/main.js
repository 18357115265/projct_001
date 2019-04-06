import Vue from "Vue"

//全局引入mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//按需导入，让代码体积变小
import { header } from 'mint-ui';
Vue.component(header.name, header);

// //导入mui样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"


import App from "./App.vue"
const vm = new Vue({
    el:"#app",
    render:function(createElement){
        return createElement(App)
    }
})