<template>
    <div
        class='min-vh-25'
        style='background: #eee url(/MainPageDarken70.jpg) no-repeat 0 0; background-size: cover;'
    >
        <div class='d-flex px-3 py-3'>
            <div
                class='d-none d-md-inline cursor-pointer'
                @click='$router.push("/")'
            >
                <div style='background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 150px; height: 150px;' />
            </div>
            <div
                class='d-inline d-md-none cursor-pointer'
                @click='$router.push("/")'
            >
                <div style='background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 50px; height: 50px;' />
            </div>

            <h1
                class='my-auto mx-2 text-white'
                v-text='label'
            />

            <div class='ms-auto d-none d-lg-inline strong text-white fs-dynamic my-auto'>
                <span
                    class='nav-hover mx-3 cursor-pointer'
                    @click='$router.push("/team")'
                >Team</span>
                <span
                    class='nav-hover mx-3 cursor-pointer'
                    @click='$router.push("/news")'
                >News</span>
                <span
                    class='nav-hover mx-3 cursor-pointer'
                    @click='$router.push("/gallery")'
                >Gallery</span>
                <span
                    class='nav-hover mx-3 cursor-pointer'
                    @click='$router.push("/contact")'
                >Contact</span>
                <span
                    class='nav-hover mx-3 cursor-pointer'
                    @click='$router.push("/apply")'
                >Join Us</span>
                <span
                    class='nav-hover mx-3 bg-red py-3 px-3 rounded cursor-pointer'
                    @click='external("https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J")'
                >Donate</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        label: {
            type: String,
            required: true
        }
    },
    methods: {
        external: function(url) {
            window.location = new URL(url);
        },
    },
}
</script>
