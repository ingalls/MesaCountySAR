<template>
<div class='h-100'>
    <Call911/>


    <PageFooter/>
</div>
</template>

<script>
import Call911 from './util/Call911.vue';
import PageFooter from './util/PageFooter.vue';

export default {
    name: 'Home',
    components: {
        PageFooter,
    },
    data: function() {
        return {
        }
    },
    methods: {
        external: function(url) {
              window.location = new URL(url);
        },
    },
    components: {
        Call911,
        PageFooter,
    }
}
</script>

