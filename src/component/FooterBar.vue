<template>
    <footer class="footer has-text-centered-mobile">
        <div class="columns">
            <div class="column is-3 is-offset-1 footer-slogan">
                <p class="logo">
                    <img :src="logoUrl" alt="">
                </p>
                <p class="desc">
                    A collection of what we share together
                </p>
                <p class="about">
                    What are you working on? iishoni is a community of coders sharing their
                    <span class="shadow is-turquoise">work</span>,
                    <span class="shadow is-purple">process</span>,
                    <span class="shadow is-danger">projects</span> and
                    <span class="shadow is-success">stories</span>.
                    ENJOY IT!
                </p>
                <p class="follow">
                    <a href="https://github.com/dxk19911212" target='_blank'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://dribbble.com/daixk" target='_blank'>
                        <i class="fab fa-dribbble"></i>
                    </a>
                    <a href="https://codepen.io/dxk19911212" target='_blank'>
                        <i class="fab fa-codepen"></i>
                    </a>
                    <a>
                        <i class="fab fa-weixin"></i>
                    </a>
                </p>
            </div>
            <div class="column is-3 is-offset-1 footer-links">
                <a class="link-head">Links</a>
                <ul>
                    <li>
                        <a href="/">Tags</a>
                    </li>
                    <li>
                        <a href="/">Archive</a>
                    </li>
                    <li>
                        <a href="/">Message Board</a>
                    </li>
                    <li>
                        <a href="https://admin.iishoni.com" target="_blank">Backstage</a>
                    </li>
                </ul>
            </div>
            <div class="column is-4 footer-statistic">
                <div class="columns is-mobile">
                    <div class="column">
                        <img class="" :src="brandUrl" alt="">
                        <div class="column post-total">
                            <strong>{{posted}}</strong>
                            <p>articles posted</p>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column action-cube">
                        <a class="sign-up" @click="toRegister">注册</a>
                        <a class="sign-in" @click="toLogin">登录</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-3 is-offset-1">
                <div class="remote" :style="handleStyle">
                    Made with remotely from
                    <transition name="slide-fade">
                        <span class="shadow" :class="this.remote.class" v-if="this.showRemote">{{ remote.text }}</span>
                    </transition>
                </div>
            </div>
            <div class="column is-7 is-offset-1">
                <p class="network">
                    © 2018 iishoni. All rights reserved.
                </p>
            </div>
        </div>
        <login-modal :visible="showLoginModal" :login="isLogin" @close="closeModal"/>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {IMG_URL, BRAND, LOGO_GREY} from '../utils/constant'

    export default {
        data() {
            return {
                posted: '2,453,109,327',
                textList: ['Vue', 'Bulma', 'Spring', 'Spring Boot', 'Docker'],
                classList: ['is-success', 'is-purple', 'is-warning', 'is-turquoise', 'is-danger'],
                remote: {
                    text: '',
                    class: ''
                },
                showRemote: false,
                showLoginModal: false,
                isLogin: true,
                logoUrl: IMG_URL + LOGO_GREY,
                brandUrl: IMG_URL + BRAND
            }
        },
        computed: {
            ...mapGetters([
                'device'
            ]),
            handleStyle() {
                return this.device.isMobile ? {'margin-top': '30px'} : '';
            }
        },
        methods: {
            timer() {
                let index = parseInt(new Date().getSeconds() / this.textList.length) % this.textList.length;
                this.remote.text = this.textList[index];
                this.remote.class = this.classList[index];
                this.showRemote = !this.showRemote;
                setTimeout(() => this.showRemote = !this.showRemote, 4000)
            },
            toLogin() {
                this.showLoginModal = true
                this.isLogin = true;
            },
            toRegister() {
                this.showLoginModal = true
                this.isLogin = false;
            },
            closeModal() {
                this.showLoginModal = false
            }
        },
        mounted() {
            this.$nextTick(() => setInterval(this.timer, 1000 * this.textList.length))
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    .footer {
        position: relative;
        z-index: 2;
        background-color: white;
        border-top: 1px solid #e5e5e5;
        /*box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);*/
    }

    .footer-slogan {
        color: #999;
        word-break: break-word;

        .logo img {
            width: 120px;
        }

        .desc {
            font-weight: 600;
        }

        .about {
            margin-top: 16px;
        }

        .follow {
            margin-top: 28px;
            font-size: 20px;

            a {
                color: #999;
                margin: 0 5px;

                &:hover {
                    color: $pink;
                }
            }
        }
    }

    .footer-statistic {
        color: #999;
        word-break: break-word;

        img {
            height: 50px;
            padding-top: 10px;
        }

        .post-total {
            color: #777;
            font-weight: 600;
            display: inline-block;

            strong {
                font-size: 20px;
            }
        }

        .action-cube {
            margin-top: 10px;

            a {
                font-size: 1rem;
                font-weight: 600;
                margin-right: 15px;
                padding: 10px 35px;
                border-radius: 30px;

                &.sign-up {
                    color: white;
                    border-color: $purple;
                    background: $purple;
                    box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);

                    &:hover {
                        color: white;
                        background-color: #f082ac;
                    }
                }

                &.sign-in {
                    color: #777;
                    text-decoration: underline;
                    transition: all .5s;

                    &:hover {
                        color: white;
                        background: $pink;
                        box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                    }
                }
            }
        }
    }

    .footer-links {
        .link-head {
            color: #999;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 20px;
            line-height: 2.5;
        }

        ul li {
            font-size: 1rem;
            font-weight: 500;

            a {
                color: #999;
                line-height: 2;
            }
        }
    }

    .network {
        font-weight: 600 !important;
    }

    .shadow {
        &.is-danger {
            box-shadow: inset 0 -5px 0 rgba(255, 74, 110, .2);
        }

        &.is-turquoise {
            box-shadow: inset 0 -5px 0 rgba(36, 177, 209, .2);
        }

        &.is-purple {
            box-shadow: inset 0 -5px 0 rgba(184, 107, 255, .2);
        }

        &.is-warning {
            box-shadow: inset 0 -5px 0 rgba(255, 221, 87, .2);
        }

        &.is-success {
            box-shadow: inset 0 -5px 0 rgba(35, 209, 153, .2);
        }
    }

    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>