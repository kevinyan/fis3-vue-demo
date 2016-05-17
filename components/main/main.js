var Vue = require('vue');
var Router = require('vue-router');
var Tab = require('../../components/header');


//自定义组件
var Bill = require('../../components/bill');
var Flow = require('../../components/flow');

Vue.config.debug = true;

Vue.use(Router);
Vue.use(require('vue-resource'));

var sourceOfTruth = {
    'inputer': 'aaa',
    'type': 'bill',
    'selectIndex': ''
}




//router增加功能
var App = Vue.extend({
    data: function() {
        return sourceOfTruth
    },
    methods: {
        goR: function(type) {
            // this.type = type;
            router.go({
                name: type,
                query: router.app.$route.query
            })
        },
        onKeyup: function() {
            console.log(sourceOfTruth.type);
        },
        beforeSubmit: function() {
            alert(this.inputer + '..' + this.type + '..' + this.selectIndex)
        }
    },
    events: {
        'child-msg': function(type) {
            this.type = type;
        },
        'child-selesct': function(selesct) {
            this.selectIndex = selesct;
        }
    }
})

//定义router
var router = new Router();

router.map({
    '': {
        name: 'index',
        component: Bill
    },
    '/bill': {
        name: 'bill',
        component: Bill
    },
    '/flow': {
        'name': 'flow',
        component: Flow
    },
    '/user/:username': {
        'name': 'user',
        component: {
            template: '<p>用户名是{{$route.params.username}}</p>'
        }
    }
})

//默认redirect
router.redirect({
    '*': 'index'
})

router.start(App, '#content');



//记录进入页面的参数
var enterData = router.app.$route;
