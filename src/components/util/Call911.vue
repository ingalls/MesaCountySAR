<template>
    <div>
        <div
            :class='{
                "bg-red": invert
            }'
        >
            <div class='mx-md-100'>
                <div
                    class='d-flex py-3 align-items-center'
                    :class='{
                        "text-red": !invert,
                        "text-white": invert
                    }'
                >
                    <div 
                        class="cursor-pointer mx-3 rounded-circle" 
                        style="background: white url(/logo.png) no-repeat center center; background-size: contain; width: 40px; height: 40px;"
                        @click="$router.push('/')"
                    ></div>

                    <div class='d-flex justify-content-center align-items-center d-inline strong mx-3'>
                        <div><PhoneCallIcon /> For Rescue Assistance - Call 911</div>
                    </div>

                    <div class="ms-auto"></div>

                    <div class="d-none d-lg-flex align-items-center">
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/')">Home</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/team')">Team</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/news')">News</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/gallery')">Gallery</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/contact')">Contact</span>
                        <span class="nav-link text-white cursor-pointer mx-2 strong" @click="$router.push('/apply')">Join Us</span>
                    </div>

                    <BrandFacebookFilledIcon
                        class='cursor-pointer mx-3 d-none d-md-inline'
                        @click='external("https://www.facebook.com/profile.php?id=100064661560769")'
                    />
                    <BrandInstagramIcon
                        class='cursor-pointer d-none d-md-inline'
                        @click='external("https://www.instagram.com/mesacountysar/")'
                    />

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
            shown: false
        }
    },
    methods: {
        external: function(url) {
            window.location = new URL(url);
        },
    }
}
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
    padding: 0.5rem 1rem;
}
.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>

