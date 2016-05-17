var Vue = require('vue');


module.exports = Vue.extend({
    template: __inline('bill.html'),
    data: function() {
        return {
            'message': '',
            'items': [
                { bills: '50元' },
                { bills: '100元' },
                { bills: '200元' },
                { bills: '300元' },
                { bills: '400元' }
            ]
        }
    },
    methods: {
        doSth: function(data) {
            this.$dispatch('child-selesct', data);
        }
    },
    route: {
        activate: function(transition) {
            this.$dispatch('child-msg', 'bill');
            transition.next()
        }
    }

})
