<template>
    <section class="hero background">
        <!--<div id="hero-head-clone" :class="scroll === 'up' ? 'is-active' : ''" class="hero-head fixed">-->
            <!--<nav class="navbar">-->
                <!--<div class="container">-->
                    <!--<div class="navbar-brand">-->
                        <!--<a class="navbar-item">-->
                            <!--<img :src="handleCloneBrandImg" alt="" @click="backHome">-->
                        <!--</a>-->
                        <!--<span id="navbar-burger-clone" class="navbar-burger burger clone"-->
                              <!--data-target="navbar-menu-clone" @click="showCloneBurger">-->
                                <!--<span></span>-->
                                <!--<span></span>-->
                                <!--<span></span>-->
                            <!--</span>-->
                    <!--</div>-->
                    <!--<div id="navbar-menu-clone" class="navbar-menu ">-->
                        <!--<div class="navbar-end">-->
                            <!--<a class="navbar-item">-->
                                <!--<router-link :to="'/'">主页</router-link>-->
                            <!--</a>-->
                            <!--<a class="navbar-item">-->
                                <!--<router-link :to="'/'">标签</router-link>-->
                            <!--</a>-->
                            <!--<a class="navbar-item">-->
                                <!--<router-link :to="'/'">归档</router-link>-->
                            <!--</a>-->
                            <!--<a class="navbar-item">-->
                                <!--<router-link :to="'/'">后台</router-link>-->
                            <!--</a>-->
                            <!--<a class="navbar-item">-->
                                <!--<router-link :to="'/'">关于我</router-link>-->
                            <!--</a>-->
                            <!--<span class="navbar-item">-->
                                    <!--<a class="button is-primary is-inverted">-->
                                        <!--<span class="icon">-->
                                            <!--<i class="fas fa-user"></i>-->
                                        <!--</span>-->
                                        <!--<span>登录</span>-->
                                    <!--</a>-->
                                <!--</span>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</nav>-->
        <!--</div>-->

        <div class="hero-head animated fadeInDown">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <img :src="handleBrandImg" alt="" @click="backHome">
                        </a>
                        <a class="navbar-item" style="margin-left: 25%" v-if="this.device.isMobile">
                            <img src="https://pic.iishoni.com/logo-white.svg" alt="" @click="backHome">
                        </a>
                        <span id="navbar-burger" class="navbar-burger burger" data-target="navbarMenu"
                              @click="showBurger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu background">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                <router-link :to="'/'">Tags</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">Archive</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">Backstage</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">About</router-link>
                            </a>
                        </div>
                        <div class="navbar-end">
                            <span class="navbar-item">
                                <label>
                                    <input type="text" class="input is-rounded">
                                </label>
                            </span>
                            <span class="navbar-item">
                                <a>Sign in</a>
                            </span>
                            <!--<span class="navbar-item">-->
                                <!--<a class="button is-primary is-inverted">-->
                                    <!--<span class="icon">-->
                                        <!--<i class="fas fa-user"></i>-->
                                    <!--</span>-->
                                    <!--<span>登录</span>-->
                                <!--</a>-->
                            <!--</span>-->
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {IMG_URL} from '../utils/constant'

    export default {
        data() {
            return {
                YOffset: window.pageYOffset,
                scroll: ''
            }
        },
        computed: {
            ...mapGetters([
                'device'
            ]),
            handleCloneBrandImg() {
                return IMG_URL + (this.device.isMobile ? 'brand.png' : 'logo-pink.svg');
            },
            handleBrandImg() {
                return IMG_URL + (this.device.isMobile ? 'brand.png' : 'logo-white.svg');
            }
        },
        methods: {
            backHome() {
                this.$router.push('/');
            },
            showCloneBurger() {
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('#navbar-burger-clone'), 0);
                if ($navbarBurgers.length > 0) {
                    $navbarBurgers.forEach(function ($el) {
                        const target = $el.dataset.target;
                        const $target = document.getElementById(target);
                        $el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                }
            },
            showBurger() {
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('#navbar-burger'), 0);
                if ($navbarBurgers.length > 0) {
                    $navbarBurgers.forEach(function ($el) {
                        const target = $el.dataset.target;
                        const $target = document.getElementById(target);
                        $el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                }
            },
            hideBurger() {
                const $navbarCloneBurgers = Array.prototype.slice.call(document.querySelectorAll('#navbar-burger-clone'), 0);
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('#navbar-burger'), 0);
                $navbarCloneBurgers.forEach(function ($el) {
                    const target = $el.dataset.target;
                    const $target = document.getElementById(target);
                    $el.classList.remove('is-active');
                    $target.classList.remove('is-active');
                });
                $navbarBurgers.forEach(function ($el) {
                    const target = $el.dataset.target;
                    const $target = document.getElementById(target);
                    $el.classList.remove('is-active');
                    $target.classList.remove('is-active');
                });
            },
            watchScroll() {
                const nowYOffset = window.pageYOffset;
                const diffY = this.YOffset - nowYOffset;
                if (nowYOffset < 40) {
                    this.scroll = '';
                } else {
                    if (diffY < 0) {
                        this.scroll = 'down';
                    } else if (diffY > 0) {
                        this.scroll = 'up';
                    }
                }
                this.YOffset = nowYOffset
            }
        },
        mounted() {
            const handler = () => {
                this.watchScroll();
                this.hideBurger()
            };
            window.addEventListener('scroll', handler);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    .navbar-burger {
        height: 4rem;
        width: 4rem;
    }

    .background {
        /*background: linear-gradient(45deg, #5761b4 0%, #c142a0 100%);*/
        /*box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);*/
        /*width: 100%;*/
        /*height: 60px;*/
        background: rgba(47,47,47,0.98);
        /*z-index: 99;*/
        color: white;
    }

    .container {
        position: relative;
    }

    .fixed {
        width: 100%;
        background: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        transition: all 0.5s;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    }

    .fixed {
        transform: translateY(-75px);
    }

    .fixed.is-active {
        transform: translateY(0);
    }

    #navbar-burger-clone {
        color: $primary;
    }

    #navbar-menu-clone {
        background-color: white;

        .navbar-item {
            text-align: center;
            color: $primary;
            padding-top: 15px;
            padding-bottom: 15px;

            &:hover {
                background-color: #c5c5c5;
            }
        }
    }

    .navbar-menu {
        /*background: linear-gradient(45deg, #5761b4 0%, #c142a0 100%);*/
    }
</style>