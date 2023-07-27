<template>
<div class='mx-md-100'>
    <div class='d-flex my-3 text-red'>
        <BrandFacebookFilledIcon @click='external("https://www.facebook.com/profile.php?id=100064661560769")' class='cursor-pointer mx-3 d-none d-md-inline'/>
        <BrandInstagramIcon @click='external("https://www.instagram.com/mesacountysar/")' class='cursor-pointer d-none d-md-inline'/>

        <div class='ms-md-auto d-flex d-inline strong mx-3'>
            <div><PhoneCallIcon/> For Rescue Assistance - Call 911</div>
        </div>

        <div class='d-inline d-md-none ms-auto mx-3 text-black'>
            <Menu2Icon @click='menu = !menu' class='cursor-pointer'/>
        </div>
    </div>

    <div v-if='menu' class='text-center'>
        <div v-if='$route.name !== "home"' @click='$router.push("/")' class='my-3 cursor-pointer'>Home</div>
        <div v-if='$route.name !== "team"' @click='$router.push("/team")' class='my-3 cursor-pointer'>The Team</div>
        <div v-if='$route.name !== "education"' @click='$router.push("/education")' class='my-3 cursor-pointer'>Education</div>
        <div v-if='$route.name !== "gallery"' @click='$router.push("/gallery")' class='my-3 cursor-pointer'>Gallery</div>
        <div v-if='$route.name !== "contact"' @click='$router.push("/contact")' class='my-3 cursor-pointer'>Contact</div>
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
    data: function() {
        return {
            menu: false
        }
    },
    components: {
        BrandFacebookFilledIcon,
        BrandInstagramIcon,
        PhoneCallIcon,
        Menu2Icon,
    }
}
</script>

