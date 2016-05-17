var Vue = require('vue');

// 定义
var MyComponent = Vue.extend({
    template: __inline('header.html'),
    data:function(){
        return  {
            'backName':'返回',
            'backUrl':'https://www.baidu.com',
            'tilte' : '手机充值',
            'subTitle':'充值记录',
            'subTitleHref':'https://www.baifubao.com'
        }
    }
})

// 注册
Vue.component('my-header', MyComponent)



module.exports = new Vue({
    el: '#header'
})
