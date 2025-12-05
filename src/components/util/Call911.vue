<template>
    <div>
        <div
            :style='{
                backgroundColor: invert ? `rgba(214, 57, 57, ${bgOpacity})` : ""
            }'
        >
            <div class='mx-md-100'>
                <div
                    class='d-flex py-3'
                    :class='{
                        "text-red": !invert,
                        "text-white": invert
                    }'
                >
                    <BrandFacebookFilledIcon
                        class='cursor-pointer mx-3 d-none d-md-inline'
                        @click='external("https://www.facebook.com/profile.php?id=100064661560769")'
                    />
                    <BrandInstagramIcon
                        class='cursor-pointer d-none d-md-inline'
                        @click='external("https://www.instagram.com/mesacountysar/")'
                    />

                    <div class="d-none d-lg-flex align-items-center ms-auto">
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/team')">Team</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/news')">News</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/gallery')">Gallery</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/contact')">Contact</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/apply')">Join Us</span>
                    </div>

                    <div class='d-flex justify-content-center d-inline strong mx-3'>
                        <div><PhoneCallIcon /> For Rescue Assistance - Call 911</div>
                    </div>

                    <div
                        v-if='menu'
                        class='d-inline d-lg-none ms-auto mx-3'
                        :class='{
                            "text-black": !invert,
                            "text-white": invert
                        }'
                    >
                        <Menu2Icon
                            class='cursor-pointer'
                            @click='shown = !shown'
                        />
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if='shown'
            class='text-center'
        >
            <div
                v-if='$route.name !== "home"'
                class='my-3 cursor-pointer'
                @click='$router.push("/")'
            >
                Home
            </div>
            <div
                v-if='$route.name !== "team"'
                class='my-3 cursor-pointer'
                @click='$router.push("/team")'
            >
                The Team
            </div>
            <div
                v-if='$route.name !== "education"'
                class='my-3 cursor-pointer'
                @click='$router.push("/news")'
            >
                News
            </div>
            <div
                v-if='$route.name !== "gallery"'
                class='my-3 cursor-pointer'
                @click='$router.push("/gallery")'
            >
                Gallery
            </div>
            <div
                v-if='$route.name !== "contact"'
                class='my-3 cursor-pointer'
                @click='$router.push("/contact")'
            >
                Contact
            </div>
            <div
                class='my-3 cursor-pointer'
                @click='external("https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J")'
            >
                <span class='bg-red text-white px-4 py-2 rounded'>Donate</span>
            </div>
            <div
                class='my-3 cursor-pointer'
                @click='external("https://team.mesacountysar.com")'
            >
                Team Login
            </div>
        </div>
    </div>
</template>

<script>
import {
    BrandFacebookFilledIcon,
    BrandInstagramIcon,
    PhoneCallIcon,
    Menu2Icon,
} from 'vue-tabler-icons';

export default {
    name: 'Call911',
    components: {
        BrandFacebookFilledIcon,
        BrandInstagramIcon,
        PhoneCallIcon,
        Menu2Icon,
    },
    props: {
        menu: {
            type: Boolean,
            default: true
        },
        invert: {
            type: Boolean,
            default: true
        }
    },
    data: function() {
        return {
            shown: false,
            bgOpacity: 1
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollY = window.scrollY;
            // Reduce opacity from 1 to 0.5 over 200px scroll
            const opacity = Math.max(0.5, 1 - (scrollY / 400));
            this.bgOpacity = opacity;
        },
        external: function(url) {
            window.location = new URL(url);
        },
    }
}
</script>

