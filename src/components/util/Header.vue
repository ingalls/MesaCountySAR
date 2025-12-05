<template>
    <div
        class='min-vh-25 position-relative d-flex align-items-center'
        style='background: #eee url(/MainPageDarken70.jpg) no-repeat center center; background-size: cover;'
    >
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0,0,0,0.5);"></div>
        
        <div class="fixed-top">
            <Call911 />
            <NavBar :transparent="true" :fixed="false" />
        </div>

        <div class='container-xl position-relative z-index-1 pt-5'>
            <div class="d-flex align-items-center">
                <h1
                    class='text-white display-4 fw-bold'
                    v-text='label'
                />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Call911 from './Call911.vue';

export default {
    name: 'PageHeader',
    components: {
        NavBar,
        Call911
    },
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.z-index-1 {
    z-index: 1;
}
</style>
