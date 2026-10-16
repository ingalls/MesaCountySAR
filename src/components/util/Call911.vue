<template>
    <div :class='{ "bg-red": invert }'>
        <div class='mx-md-100'>
            <div
                class='d-flex py-3 align-items-center'
                :class='{
                    "text-red": !invert,
                    "text-white": invert
                }'
            >
                <router-link
                    to='/'
                    class='mx-3 rounded-circle flex-shrink-0 site-logo'
                    aria-label='Mesa County Search and Rescue home'
                />

                <div class='d-flex align-items-center strong mx-3'>
                    <PhoneCallIcon class='me-1' /> For Rescue - Call 911
                </div>

                <div class='ms-auto' />

                <nav
                    class='d-none d-lg-flex align-items-center'
                    aria-label='Main'
                >
                    <router-link
                        v-for='link in links'
                        :key='link.to'
                        :to='link.to'
                        class='nav-link text-reset mx-2 strong'
                    >
                        {{ link.label }}
                    </router-link>
                    <a
                        :href='PAYPAL'
                        target='_blank'
                        rel='noopener'
                        class='btn btn-sm fw-bold ms-2'
                        :class='invert ? "btn-light text-red" : "btn-danger"'
                    >Donate</a>
                </nav>

                <a
                    href='https://www.facebook.com/profile.php?id=100064661560769'
                    target='_blank'
                    rel='noopener'
                    class='text-reset mx-3 d-none d-md-inline-flex'
                    aria-label='Mesa County SAR on Facebook'
                >
                    <BrandFacebookFilledIcon />
                </a>
                <a
                    href='https://www.instagram.com/mesacountysar/'
                    target='_blank'
                    rel='noopener'
                    class='text-reset d-none d-md-inline-flex'
                    aria-label='Mesa County SAR on Instagram'
                >
                    <BrandInstagramIcon />
                </a>

                <button
                    v-if='menu'
                    type='button'
                    class='btn btn-link p-0 border-0 d-inline-flex d-lg-none ms-auto mx-3 text-reset'
                    aria-label='Toggle menu'
                    :aria-expanded='shown'
                    @click='shown = !shown'
                >
                    <Menu2Icon />
                </button>
            </div>
        </div>

        <nav
            v-if='shown'
            class='text-center pb-3 d-lg-none'
            :class='{
                "text-white": invert,
                "bg-white text-black": !invert
            }'
            aria-label='Mobile'
        >
            <router-link
                v-for='link in links'
                :key='link.to'
                :to='link.to'
                class='d-block py-2 text-reset text-decoration-none mobile-link'
                @click='shown = false'
            >
                {{ link.label }}
            </router-link>
            <a
                :href='PAYPAL'
                target='_blank'
                rel='noopener'
                class='d-inline-block my-2 px-4 py-2 rounded fw-bold text-decoration-none'
                :class='invert ? "bg-white text-red" : "bg-red text-white"'
            >Donate</a>
            <a
                href='https://team.mesacountysar.com'
                target='_blank'
                rel='noopener'
                class='d-block py-2 text-reset text-decoration-none mobile-link'
            >Team Login</a>
        </nav>
    </div>
</template>

<script>
import {
    BrandFacebookFilledIcon,
    BrandInstagramIcon,
    PhoneCallIcon,
    Menu2Icon,
} from 'vue-tabler-icons';

export const PAYPAL = 'https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J';

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
            PAYPAL,
            shown: false,
            links: [
                { to: '/', label: 'Home' },
                { to: '/team', label: 'Team' },
                { to: '/news', label: 'News' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
                { to: '/apply', label: 'Join Us' }
            ]
        }
    }
}
</script>

<style scoped>
.site-logo {
    display: block;
    width: 40px;
    height: 40px;
    background: white url(/logo.png) no-repeat center center;
    background-size: contain;
}

.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
    padding: 0.5rem 1rem;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.2);
}

.mobile-link.router-link-exact-active {
    font-weight: 600;
}
</style>
