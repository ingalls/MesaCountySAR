<template>
<div style='margin-left: 100px; margin-right: 100px;'>
    <div class='d-flex my-3 text-red'>
        <BrandFacebookFilledIcon @click='external("https://www.facebook.com/profile.php?id=100064661560769")' class='cursor-pointer mx-3'/>
        <BrandInstagramIcon @click='external("https://www.instagram.com/mesacountysar/")' class='cursor-pointer'/>

        <div class='ms-auto mx-3 strong'>
            <PhoneCallIcon/>
            For Rescue Assistance - Call 911
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
