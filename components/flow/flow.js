var Vue = require('vue');


module.exports = Vue.extend({
    template: __inline('flow.html'),
    data: function() {
        return {
            'message': '',
            'items': [{
                'upper': '50M',
                'lower': ['全国50M', '全省50M']
            }, {
                'upper': '100M',
                'lower': ['全国100M', '全省100M']
            }, {
                'upper': '200M',
                'lower': ['全国200M', '全省200M']
            }]
        }
    },
    methods: {
        doSth: function(data) {
            this.$dispatch('child-selesct', data);
        }
    },
    route: {
        activate: function(transition) {
            this.$dispatch('child-msg', 'flow');
            transition.next()
        }
    }
})
