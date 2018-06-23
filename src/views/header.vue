<template>
    <div>
        <section class="hero is-primary is-medium is-animated">
            <div id="hero-head-clone" :class="scroll === 'up' ? 'is-active' : ''" class="hero-head fixed">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img class="logo" src="../assets/avatar.jpg">
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

            <div class="hero-head animated fadeIn">
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

            <div class="hero-body animated fadeIn">
                <div class="container">
                    <div class="columes">
                        <div class="column is-8 is-offset-2 has-text-centered">
                            <h1 class="title big-title">
                                iishoni home
                            </h1>
                            <div class="subtitle light-subtitle">
                                This is iishoni's blog, share our funs!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-foot animated fadeIn">
                <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                            <li><a>文章</a></li>
                            <li><a>视频</a></li>
                            <li><a>图片</a></li>
                            <li><a>知识库</a></li>
                            <li><a>资源下载</a></li>
                            <li><a>心灵鸡汤</a></li>
                            <li><a>其他</a></li>
                        </ul>
                    </div>
                </nav>
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
        background: #00d1b2 url("../assets/pattern.svg") repeat 0 0;
        animation: 4s linear 0s normal none infinite animate;
        box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    }

    .container {
        position: relative;
    }

    .big-title {
        margin-bottom: 3rem;
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