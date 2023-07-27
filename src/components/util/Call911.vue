<template>
<div style='margin-md-left: 100px; margin-md-right: 100px;'>
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

<style lang='scss'>
$xs: 0;
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
$xxl: 1400px;

@mixin xs {
   @media (min-width: #{$xs}) {
       @content;
   }
}

@mixin sm {
   @media (min-width: #{$sm}) {
       @content;
   }
}

// Medium devices
@mixin md {
   @media (min-width: #{$md}) {
       @content;
   }
}

// Large devices
@mixin lg {
   @media (min-width: #{$lg}) {
       @content;
   }
}

// Extra large devices
@mixin xl {
   @media (min-width: #{$xl}) {
       @content;
   }
}

// Extra Extra large devices
@mixin xl {
   @media (min-width: #{$xxl}) {
       @content;
   }
}
</style>
