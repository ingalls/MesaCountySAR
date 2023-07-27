<template>
<div class='mx-md-100'>
    <div class='d-md-flex my-3 text-red'>
        <BrandFacebookFilledIcon @click='external("https://www.facebook.com/profile.php?id=100064661560769")' class='cursor-pointer mx-3 d-none d-md-inline'/>
        <BrandInstagramIcon @click='external("https://www.instagram.com/mesacountysar/")' class='cursor-pointer d-none d-md-inline'/>

        <div class='ms-md-auto d-flex d-inline justify-content-center strong'>
            <div><PhoneCallIcon/> For Rescue Assistance - Call 911</div>
        </div>
    </div>
</div>
</template>

<script>
import {
    BrandFacebookFilledIcon,
    BrandInstagramIcon,
    PhoneCallIcon,
} from 'vue-tabler-icons';

export default {
    name: 'Call911',
    components: {
        BrandFacebookFilledIcon,
        BrandInstagramIcon,
        PhoneCallIcon,
    }
}
</script>

