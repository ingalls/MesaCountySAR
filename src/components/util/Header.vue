<template>
    <div class='page-header-shell'>
        <div class='sticky-top'>
            <Call911 />
        </div>

        <div class='position-relative d-flex align-items-center page-hero'>
            <div
                class='position-absolute top-0 start-0 w-100 h-100'
                style='background: rgba(0,0,0,0.5);'
            />

            <div class='container-xl position-relative z-index-1 py-5'>
                <h1
                    class='text-white display-4 fw-bold mb-0'
                    v-text='label'
                />
                <div
                    v-if='sublabel'
                    class='text-white fs-2 mt-2'
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
.page-header-shell {
    display: contents;
}

.page-hero {
    min-height: 25vh;
    background: #333 url(/hero-sm.webp) no-repeat center center;
    background-size: cover;
}

@media (min-width: 768px) {
    .page-hero {
        background-image: url(/hero.webp);
    }
}

.z-index-1 {
    z-index: 1;
}
</style>
