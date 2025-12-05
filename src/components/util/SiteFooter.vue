<template>
    <div style="background: #1a1a1a;" class="text-white py-5">
        <div class="container-xl">
            <div class="row">
                <div class="col-12 col-md-4 text-center mb-4 mb-md-0">
                    <h3 class="mb-3">Get In Touch</h3>
                    
                    <h4 class="text-muted mb-2">Mailing Address</h4>
                    <div class="mb-4">
                        <a class="text-white text-decoration-none cursor-pointer" @click="external('https://goo.gl/maps/2gg7YG9toWsiE3Yz6')">
                            <p class="my-0">PO BOX 2251</p>
                            <p class="my-0">Grand Junction, CO</p>
                            <p class="my-0">81502</p>
                        </a>
                    </div>

                    <h4 class="text-muted mb-2">Non-Emergency Contact</h4>
                    <div>
                        <div class="mb-1">
                            <a href="tel:2023906116" class="text-white text-decoration-none">202-390-6116</a>
                        </div>
                        <div>
                            <a href="mailto:team@mesacountysar.com" class="text-white text-decoration-none">team@mesacountysar.com</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 text-center mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center">
                    <div class="mb-4 d-none d-md-block">
                        <div style="background: url(/logo.png) no-repeat 0 0; background-size: cover; width: 120px; height: 120px;" />
                    </div>
                    <button 
                        class="btn btn-danger btn-lg px-5"
                        @click="external('https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J')"
                    >
                        Donate
                    </button>
                </div>

                <div class="col-12 col-md-4 text-center">
                    <h3 class="mb-3">Quick Links</h3>
                    <div class="d-flex flex-column gap-2">
                        <a class="text-white text-decoration-none cursor-pointer hover-underline" @click="$router.push('/team')">The Team</a>
                        <a class="text-white text-decoration-none cursor-pointer hover-underline" @click="$router.push('/news')">News</a>
                        <a class="text-white text-decoration-none cursor-pointer hover-underline" @click="$router.push('/gallery')">Gallery</a>
                        <a class="text-white text-decoration-none cursor-pointer hover-underline" @click="$router.push('/contact')">Contact</a>
                        <a class="text-white text-decoration-none cursor-pointer hover-underline" @click="external('https://team.mesacountysar.com')">Team Login</a>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5 pt-4">
                <div class="col-12 text-center text-muted">
                    <small>
                        Copyright © {{ new Date().getFullYear() }} Mesa County Search and Rescue & 
                        <a href="https://ingalls.ca" class="text-muted text-decoration-underline">Nick Ingalls</a>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteFooter',
    methods: {
        external(url) {
            window.location = new URL(url);
        }
    }
}
</script>

<style scoped>
.hover-underline:hover {
    text-decoration: underline !important;
}
</style>
