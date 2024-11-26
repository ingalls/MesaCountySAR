<template>
<div>
    <div :class='{
        "bg-red": invert
    }'>
        <div class='mx-md-100'>
            <div class='d-flex py-3' :class='{
                "text-red": !invert,
                "text-white": invert
            }'>
                <BrandFacebookFilledIcon @click='external("https://www.facebook.com/profile.php?id=100064661560769")' class='cursor-pointer mx-3 d-none d-md-inline'/>
                <BrandInstagramIcon @click='external("https://www.instagram.com/mesacountysar/")' class='cursor-pointer d-none d-md-inline'/>

                <div class='ms-lg-auto d-flex justify-content-center d-inline strong mx-3'>
                    <div><PhoneCallIcon/> For Rescue Assistance - Call 911</div>
                </div>

                <div v-if='menu' class='d-inline d-lg-none ms-auto mx-3' :class='{
                    "text-black": !invert,
                    "text-white": invert
                }'>
                    <Menu2Icon @click='shown = !shown' class='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>

    <div v-if='shown' class='text-center'>
        <div v-if='$route.name !== "home"' @click='$router.push("/")' class='my-3 cursor-pointer'>Home</div>
        <div v-if='$route.name !== "team"' @click='$router.push("/team")' class='my-3 cursor-pointer'>The Team</div>
        <div v-if='$route.name !== "education"' @click='$router.push("/education")' class='my-3 cursor-pointer'>Education</div>
        <div v-if='$route.name !== "gallery"' @click='$router.push("/gallery")' class='my-3 cursor-pointer'>Gallery</div>
        <div v-if='$route.name !== "contact"' @click='$router.push("/contact")' class='my-3 cursor-pointer'>Contact</div>
        <div @click='external("https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J")' class='my-3 cursor-pointer'>
            <span class='bg-red text-white px-4 py-2 rounded'>Donate</span>
        </div>
        <div @click='external("https://team.mesacountysar.com")' class='my-3 cursor-pointer'>Team Login</div>
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
    },
    components: {
        BrandFacebookFilledIcon,
        BrandInstagramIcon,
        PhoneCallIcon,
        Menu2Icon,
    }
}
</script>

