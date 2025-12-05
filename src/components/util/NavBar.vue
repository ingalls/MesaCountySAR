<template>
    <nav
        class="navbar navbar-expand-md"
        :class="{ 
            'fixed-top': fixed,
            'navbar-transparent': transparent && !isMenuOpen, 
            'bg-dark': !transparent || isMenuOpen 
        }"
        style="transition: background-color 0.3s ease;"
    >
        <div class="container-xl">
            <a class="navbar-brand cursor-pointer" @click="$router.push('/')">
                <div style="background: url(/logo.png) no-repeat 0 0; background-size: contain; width: 50px; height: 50px;" />
            </a>

            <button class="navbar-toggler" type="button" @click="toggleMenu" style="border: none;">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMenuOpen }">
                <ul class="navbar-nav align-items-center text-center">
                    <li class="nav-item ms-md-3 my-3 my-md-0 w-100 w-md-auto">
                        <a class="btn btn-danger rounded-pill px-4 w-100 w-md-auto" @click="external('https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J')">
                            Donate
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        transparent: {
            type: Boolean,
            default: false
        },
        fixed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        external(url) {
            window.location = new URL(url);
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        navigate(path) {
            this.$router.push(path);
            this.isMenuOpen = false;
        }
    }
}
</script>

<style scoped>
.navbar-transparent {
    background: transparent !important;
    box-shadow: none !important;
}
.nav-link {
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.nav-link:hover {
    opacity: 0.8;
    color: #ddd !important;
}
.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (min-width: 768px) {
    .w-md-auto {
        width: auto !important;
    }
    .ms-md-3 {
        margin-left: 1rem !important;
    }
}
</style>
