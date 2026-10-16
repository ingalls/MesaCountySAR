<template>
    <footer
        style='background: #1a1a1a;'
        class='text-white py-5'
    >
        <div class='container-xl'>
            <div class='row'>
                <div class='col-12 col-md-4 text-center mb-4 mb-md-0'>
                    <h3 class='text-white mb-3'>
                        Get In Touch
                    </h3>

                    <h4 class='text-muted mb-2'>
                        Mailing Address
                    </h4>
                    <address class='mb-4'>
                        <a
                            href='https://goo.gl/maps/2gg7YG9toWsiE3Yz6'
                            target='_blank'
                            rel='noopener'
                            class='text-white text-decoration-none'
                        >
                            <p class='my-0'>PO BOX 2251</p>
                            <p class='my-0'>Grand Junction, CO</p>
                            <p class='my-0'>81502</p>
                        </a>
                    </address>

                    <h4 class='text-muted mb-2'>
                        Non-Emergency Contact
                    </h4>
                    <div>
                        <div class='mb-1'>
                            <a
                                href='tel:2023906116'
                                class='text-white text-decoration-none'
                            >202-390-6116</a>
                        </div>
                        <div>
                            <a
                                href='mailto:team@mesacountysar.com'
                                class='text-white text-decoration-none'
                            >team@mesacountysar.com</a>
                        </div>
                        <div class='text-muted small mt-2'>
                            This line is not monitored around the clock. In an emergency, call 911.
                        </div>
                    </div>
                </div>

                <div class='col-12 col-md-4 text-center mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center'>
                    <img
                        src='/logo.png'
                        alt='Mesa County Search and Rescue'
                        width='120'
                        height='120'
                        class='mb-4 d-none d-md-block'
                    >
                    <a
                        :href='PAYPAL'
                        target='_blank'
                        rel='noopener'
                        class='btn btn-danger btn-lg px-5'
                    >
                        Donate
                    </a>
                    <div class='d-flex gap-3 mt-4'>
                        <a
                            href='https://www.facebook.com/profile.php?id=100064661560769'
                            target='_blank'
                            rel='noopener'
                            class='text-white'
                            aria-label='Mesa County SAR on Facebook'
                        >
                            <BrandFacebookFilledIcon />
                        </a>
                        <a
                            href='https://www.instagram.com/mesacountysar/'
                            target='_blank'
                            rel='noopener'
                            class='text-white'
                            aria-label='Mesa County SAR on Instagram'
                        >
                            <BrandInstagramIcon />
                        </a>
                    </div>
                </div>

                <div class='col-12 col-md-4 text-center'>
                    <h3 class='text-white mb-3'>
                        Quick Links
                    </h3>
                    <nav
                        class='d-flex flex-column gap-2'
                        aria-label='Footer'
                    >
                        <router-link
                            to='/team'
                            class='text-white text-decoration-none hover-underline'
                        >The Team</router-link>
                        <router-link
                            to='/news'
                            class='text-white text-decoration-none hover-underline'
                        >News</router-link>
                        <router-link
                            to='/gallery'
                            class='text-white text-decoration-none hover-underline'
                        >Gallery</router-link>
                        <router-link
                            to='/apply'
                            class='text-white text-decoration-none hover-underline'
                        >Join Us</router-link>
                        <router-link
                            to='/contact'
                            class='text-white text-decoration-none hover-underline'
                        >Contact</router-link>
                        <a
                            href='https://team.mesacountysar.com'
                            target='_blank'
                            rel='noopener'
                            class='text-white text-decoration-none hover-underline'
                        >Team Login</a>
                    </nav>
                </div>
            </div>

            <div class='row mt-5 pt-4'>
                <div class='col-12 text-center text-muted'>
                    <small>
                        Copyright © {{ new Date().getFullYear() }} Mesa County Search and Rescue &amp;
                        <a
                            href='https://ingalls.ca'
                            class='text-muted text-decoration-underline'
                        >Nick Ingalls</a>
                    </small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { PAYPAL } from './Call911.vue';
import {
    BrandFacebookFilledIcon,
    BrandInstagramIcon
} from 'vue-tabler-icons';

export default {
    name: 'SiteFooter',
    components: {
        BrandFacebookFilledIcon,
        BrandInstagramIcon
    },
    data() {
        return { PAYPAL };
    }
}
</script>

<style scoped>
.hover-underline:hover {
    text-decoration: underline !important;
}
</style>
