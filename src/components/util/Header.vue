<template>
    <div
        class='min-vh-25 position-relative d-flex align-items-center'
        style='background: #eee url(/MainPageDarken70.jpg) no-repeat center center; background-size: cover;'
    >
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0,0,0,0.5);"></div>
        
        <div class="fixed-top">
            <Call911 />
        </div>

        <div class='container-xl position-relative z-index-1' style="padding-top: 6rem">
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
import Call911 from './Call911.vue';

export default {
    name: 'PageHeader',
    components: {
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
