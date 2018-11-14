<template>
    <div>
        <section class="hero is-primary is-animated">
            <!--<div class="background-img"></div>-->
            <div id="hero-head-clone" :class="scroll === 'up' ? 'is-active' : ''" class="hero-head fixed">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img class="logo" src="https://pic.iishoni.com/avatar.jpg">
                            </a>
                            <span id="navbar-burger-clone" class="navbar-burger burger clone"
                                  data-target="navbarMenuClone" @click="showCloneBurger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuClone" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Examples
                                </a>
                                <a class="navbar-item">
                                    Documentation
                                </a>
                                <span class="navbar-item">
                                <a class="button is-info is-inverted">
                                    <span class="icon">
                                        <i class="fab fa-github"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
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
                                <a class="navbar-item is-active">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Examples
                                </a>
                                <a class="navbar-item">
                                    Documentation
                                </a>
                                <span class="navbar-item">
                                <a class="button is-info is-inverted">
                                    <span class="icon">
                                        <i class="fab fa-github"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="hero-body animated bounceInDown">
                <div class="container">
                    <div class="columes">
                        <div class="column is-8 is-offset-2 has-text-centered">
                            <h1 class="title big-title">
                                标题位
                            </h1>
                            <div class="title-avatar has-text-centered">
                                <img src="https://pic.iishoni.com/avatar.jpg" alt="Logo">
                                <div class="title-meta">
                                    <div class="author-name">
                                        Posted by
                                        <span>Xiaokang</span>
                                    </div>
                                    <div class="timestamp">
                                        on
                                        <span>2018-06-22</span>
                                    </div>
                                </div>
                            </div>
                            <div class="title-btn has-text-centered">
                                <router-link :to="'/'" class="primary-btn ">Back to Blog</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <transition mode="out-in"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                    appear>
            <keep-alive>
                <router-view class="animated"/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
            const handler = () => {
                this.watchScroll();
                this.hideBurger()
            };
            window.addEventListener('scroll', handler);
        }
    }
</script>

<style lang="scss" scoped>

    .title-avatar {
        img {
            height: 70px;
            width: 70px;
            border: 3px solid #fff;
            border-radius: 50%;
        }

        .title-meta {
            .author-name span {
                font-size: 1.2rem;
                font-weight: 600;
                text-transform: capitalize;
            }

            .timestamp span {
                font-size: 1rem;
                font-weight: 600;
            }
        }
    }

    .title-btn {
        padding-top: 30px;

        .primary-btn {
            border-radius: 500px;
            padding: 15px 70px;
            outline: none;
            border-color: #00c5a9;
            background-color: #00c5a9;
            color: #fff;
            transition: all 0.5s;

            &:hover {
                box-shadow: 0 14px 26px -12px rgba(0, 197, 169, 0.42),0 4px 23px 0px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0, 197, 169, 0.2);
            }
        }
    }

    .logo {
        max-height: 3rem !important;
        height: 4rem;
        border-radius: 100px;
    }

    .navbar-burger {
        height: 4rem;
        width: 4rem;
    }

    @keyframes animate {
        from {
            background-position: 0 0
        }
        to {
            background-position: 0 -350px
        }
    }

    .is-animated {
        box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    }

    .background-img {
        position: absolute;
        background: url("https://cssninja.io/themes/cssninja/assets/images/logo/hanzo.svg") no-repeat center;
        z-index: -1;
        filter: blur(20px);
        width: 100%;
        height: 80%;
    }

    .container {
        position: relative;
    }

    .big-title {
        font-size: 3rem;
        font-weight: 600 !important;
        line-height: 2;
        word-break: break-word;
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
        color: #7957d5;
    }

    #navbarMenuClone {
        background-color: #fff;

        .navbar-item {
            text-align: center;
            color: #7957d5;
            padding-top: 15px;
            padding-bottom: 15px;

            &:hover {
                background-color: #c5c5c5;
            }
        }
    }

</style>