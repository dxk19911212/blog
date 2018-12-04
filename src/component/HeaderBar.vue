<template>
    <section class="hero is-primary is-small background">
        <div id="hero-head-clone" :class="scroll === 'up' ? 'is-active' : ''" class="hero-head fixed">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <img class="logo" src="https://pic.iishoni.com/avatar.jpg">
                        </a>
                        <span id="navbar-burger-clone" class="navbar-burger burger clone"
                              data-target="navbar-menu-clone" @click="showCloneBurger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                    </div>
                    <div id="navbar-menu-clone" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item">
                                <router-link :to="'/'">主页</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">标签</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">归档</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">后台</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">关于我</router-link>
                            </a>
                            <span class="navbar-item">
                                    <a class="button is-primary is-inverted">
                                        <span class="icon">
                                            <i class="fas fa-user"></i>
                                        </span>
                                        <span>登录</span>
                                    </a>
                                </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-head animated fadeInDown">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <img class="logo" src="https://pic.iishoni.com/avatar.jpg">
                        </a>
                        <span id="navbar-burger" class="navbar-burger burger" data-target="navbarMenu"
                              @click="showBurger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item">
                                <router-link :to="'/'">主页</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">标签</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">归档</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">后台</router-link>
                            </a>
                            <a class="navbar-item">
                                <router-link :to="'/'">关于我</router-link>
                            </a>
                            <span class="navbar-item">
                                <a class="button is-primary is-inverted">
                                    <span class="icon">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    <span>登录</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-body animated fadeIn">
            <div class="container" v-if="this.name === 'list'">
                <home-title/>
            </div>
            <div class="container" v-else>
                <article-title/>
            </div>
        </div>

        <!--<div class="hero-foot animated fadeIn" v-if="path !== '/detail'">-->
            <!--<nav class="tabs is-boxed is-fullwidth">-->
                <!--<div class="container">-->
                    <!--<ul>-->
                        <!--<li><a>文章</a></li>-->
                        <!--<li><a>视频</a></li>-->
                        <!--<li><a>图片</a></li>-->
                        <!--<li><a>资源下载</a></li>-->
                        <!--<li><a>归档</a></li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</nav>-->
        <!--</div>-->
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                YOffset: window.pageYOffset,
                scroll: ''
            }
        },
        methods: {
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
            this.name = this.$route.name;
            const handler = () => {
                this.watchScroll();
                this.hideBurger()
            };
            window.addEventListener('scroll', handler);
        },
        watch: {
            $route(to) {
                this.name = to.name
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    .logo {
        max-height: 3rem !important;
        height: 4rem;
        border-radius: 100px;
    }

    .navbar-burger {
        height: 4rem;
        width: 4rem;
    }

    @keyframes bg-animate {
        from {
            background-position: 0 0
        }
        to {
            background-position: 0 -350px
        }
    }

    .background {
        /*background: #00d1b2 url("https://pic.iishoni.com/bg.svg") repeat 0 0;*/
        /*animation: 4s linear 0s normal none infinite bg-animate;*/
        background: linear-gradient(45deg, #5761b4 0%, #c142a0 100%);
        box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    }

    .container {
        position: relative;
    }

    .fixed {
        width: 100%;
        background: #fff;
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
        background-color: #fff;

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
</style>