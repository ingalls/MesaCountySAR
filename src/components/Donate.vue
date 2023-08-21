<template>
<div class='h-100'>
    <Call911 :menu='false'/>

    <Header label='Our Team'/>

    <PageFooter/>
</div>
</template>

<script>
import Call911 from './util/Call911.vue';
import Header from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';

export default {
    name: 'Team',
    data: function() {
        return {
        }
    },
    components: {
        Call911,
        Header,
        PageFooter,
    }
}
</script>

