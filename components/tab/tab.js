var Vue = require('vue');

// 定义
var MyComponent = Vue.extend({
    template: __inline('tab.html'),
    data:function(){
        return  {
            'name' : 'xingdi'
        }
    }
})

// 注册
Vue.component('my-tab', MyComponent)



module.exports = new Vue({
    el: '#app'
})
