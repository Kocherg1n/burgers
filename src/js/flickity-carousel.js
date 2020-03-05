import Vue from 'vue'
import Flickity from 'vue-flickity';

new Vue({
    el: '#slider-burger',
    template: '#slider-template',
    components: {
        Flickity
    },

    data() {
        return {
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: true,
                pageDots: false,
                wrapAround: true

                // any options from Flickity can be used
            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
});