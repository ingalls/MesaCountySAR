<template>
    <div
        class='min-vh-25 position-relative d-flex align-items-center'
        style='background: #eee url(/MainPageDarken70.jpg) no-repeat center center; background-size: cover;'
    >
        <div
            class='position-absolute top-0 start-0 w-100 h-100'
            style='background: rgba(0,0,0,0.5);'
        />
        
        <div class='fixed-top'>
            <Call911 />
        </div>

        <div
            class='container-xl position-relative z-index-1'
            style='padding-top: 6rem'
        >
            <div>
                <h1
                    class='text-white display-4 fw-bold'
                    v-text='label'
                />
                <div
                    v-if='sublabel'
                    class='text-white fs-2 pb-3'
                    style='opacity: 0.85;'
                    v-text='sublabel'
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
        },
        sublabel: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.z-index-1 {
    z-index: 1;
}
</style>
