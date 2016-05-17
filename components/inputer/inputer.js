var Vue = require('vue');

// 定义
var MyComponent = Vue.extend({
    template: __inline('inputer.html')
})

// 注册
Vue.component('my-inputer', MyComponent)

module.exports = new Vue({
    el: '#inputer'
})
