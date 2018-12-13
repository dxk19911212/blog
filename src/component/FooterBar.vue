<template>
    <footer class="footer has-text-centered-mobile">
        <div class="columns">
            <div class="column is-3 is-offset-1 footer-mod">
                <p class="logo">
                    <img :src="logoUrl" width="120px" alt="">
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
            <div class="column is-3 is-offset-1 footer-mod">
                <div class="links">
                    <a class="link-head">LINKS</a>
                    <ul>
                        <li>
                            <a href="/">Tags</a>
                        </li>
                        <li>
                            <a href="/">Archive</a>
                        </li>
                        <li>
                            <a href="/">Backstage</a>
                        </li>
                        <li>
                            <a href="/">Timeline</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column is-4 footer-mod">
                <div class="post-total has-text-left">
                    <div class="post-cube" :style="[handleStyle1]">
                        <strong>{{posted}}</strong>
                        <p>articles posted</p>
                    </div>
                </div>
                <div class="action">
                    <div class="action-cube" :style="[handleStyle2]">
                        <a class="sign-up">Sign up</a>
                        <a class="sign-in">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-3 is-offset-1 footer-mod">
                <div class="remote">
                    Made with remotely from
                    <transition name="slide-fade">
                        <span class="shadow" :class="this.remote.class" v-if="this.show">{{ remote.text }}</span>
                    </transition>
                </div>
            </div>
            <div class="column is-7 is-offset-1 footer-mod">
                <p class="network">
                    © 2018 iishoni. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {IMG_URL} from '../utils/constant'

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
                show: false,
                logoUrl: IMG_URL + 'logo-grey.svg',
                brandUrl: IMG_URL + 'brand.png'
            }
        },
        computed: {
            ...mapGetters([
                'device'
            ]),
            handleStyle1() {
                let margin = this.device.isMobile ? {'margin': '0 auto'} : '';
                let backgroundImg = {'background-image': 'url(' + this.brandUrl + ')'};
                return Object.assign(margin, backgroundImg);
            },
            handleStyle2() {
                return this.device.isMobile ? {'margin': '0 auto'} : '';
            }
        },
        methods: {
            timer() {
                let index = parseInt(new Date().getSeconds() / this.textList.length) % this.textList.length;
                this.remote.text = this.textList[index];
                this.remote.class = this.classList[index];
                this.show = !this.show;
                setTimeout(() => this.show = !this.show, 4000)
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

    .footer-mod {
        color: #999;
        word-break: break-word;

        .desc {
            font-size: 1rem;
            font-weight: 600;
        }

        .about {
            margin-top: 1rem;
        }

        .follow {
            margin-top: 2rem;
            font-size: 1.5rem;

            a {
                color: #999;
                margin: 0 5px;

                &:hover {
                    color: $pink;
                }
            }
        }

        .links {
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

        .post-total {
            color: #777;
            font-weight: 600;
            display: flex;

            .post-cube {
                background-size: 75px 50px;
                background-repeat: no-repeat;
                background-position: 0 50%;
                padding-left: 75px;

                strong {
                    display: block;
                    margin-left: 10px;
                    font-size: 1.5em;
                }

                p {
                    margin-left: 10px;
                }
            }
        }

        .action {
            margin: 20px 0;
            display: flex;

            .action-cube {
                display: flex;

                a {
                    border-radius: 30px;
                    padding: 10px 30px;
                    font-size: 1rem;
                    font-weight: 600;

                    &.sign-up {
                        color: white;
                        margin: 0 10px;
                        border-color: $purple;
                        background: $purple;
                        box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                    }

                    &.sign-in {
                        color: #777;
                        margin: 0 10px;
                        text-decoration: underline;

                        &:hover {
                            color: white;
                            text-decoration: none;
                            background: $pink;
                            box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                        }
                    }
                }
            }
        }

        .network {
            font-weight: 600 !important;
        }
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