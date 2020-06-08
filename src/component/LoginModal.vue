<template>
    <transition
            :name="transition"
            mode="in-out"
            appear
            :appear-active-class="enterClass"
            :enter-active-class="enterClass"
            :leave-active-class="leaveClass"
            @beforeEnter="beforeEnter"
            @afterEnter="afterEnter"
            @beforeLeave="beforeLeave"
            @afterLeave="afterLeave"
    >
        <div class="login-form-modal" :class="classes" v-if="show">
            <div class="modal-background" @click="this.deactive"></div>
            <!-- 登录 -->
            <div class="modal-card animated" v-if="isLogin" :class="handleLoginClass">
                <header class="modal-card-head has-text-centered">
                    <div class="column is-mobile">
                        <img class="modal-card-logo" :src="img" alt="">
                    </div>
                    <div class="column is-mobile modal-card-title">登录</div>
                </header>
                <section class="modal-card-body">
                    <div class="column">
                        <div class="columns is-mobile sign-in-social">
                            <div class="column is-4">
                                <i class="fab fa-github github has-text-centered"></i>
                            </div>
                            <div class="column is-4">
                                <i class="fab fa-twitter twitter has-text-centered"></i>
                            </div>
                            <div class="column is-4">
                                <i class="fab fa-weixin weixin has-text-centered"></i>
                            </div>
                        </div>
                        <div class="column is-mobile">
                            <div class="divider">或者</div>
                        </div>
                        <div class="column is-mobile" v-if="!isMesLogin">
                            <label>
                                <input class="text-input" type="text" placeholder="请输入用户名/手机号/邮箱"/>
                            </label>
                            <label>
                                <input class="text-input" type="password" placeholder="请输入密码"/>
                            </label>
                            <div class="columns is-mobile sign-in-other">
                                <div class="column is-8 has-text-left">
                                    <a class="sign-in-phone" @click="toMesLogin">使用验证码登录</a>
                                </div>
                                <div class="column is-4 has-text-right">
                                    <a class="forgot-pwd" @click="forgotPwd">忘记密码</a>
                                </div>
                            </div>
                        </div>
                        <div class="column is-mobile" v-if="isMesLogin">
                            <label>
                                <input class="text-input" type="text" placeholder="请输入手机号"/>
                            </label>
                            <label>
                                <input class="text-input" type="password" placeholder="请输入验证码"/>
                            </label>
                            <div class="columns is-mobile sign-in-other">
                                <div class="column is-8 has-text-left">
                                    <a class="sign-in-account" @click="toLogin">使用账号登录</a>
                                </div>
                                <div class="column is-4 has-text-right">
                                    <a class="forgot-pwd" @click="forgotPwd">忘记密码</a>
                                </div>
                            </div>
                        </div>
                        <div class="column is-mobile sign-in-button">
                            <label>
                                <input class="has-text-centered" value="登录" readonly>
                            </label>
                        </div>
                        <div class="column is-mobile sign-up-button">
                            <div class="has-text-centered">
                                <a @click="toRegister">没有账号？去注册</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- 注册 -->
            <div class="modal-card animated" v-else :class="handleRegisterClass">
                <header class="modal-card-head has-text-centered">
                    <div class="column is-mobile">
                        <img class="modal-card-logo" :src="img" alt="">
                    </div>
                    <div class="column is-mobile modal-card-title">注册</div>
                </header>
                <section class="modal-card-body">
                    <div class="column">
                        <div class="column is-mobile">
                            <label>
                                <input class="text-input" type="text" placeholder="请输入用户名/邮箱"/>
                            </label>
                            <label>
                                <input class="text-input" type="password" placeholder="请输入密码"/>
                            </label>
                            <label>
                                <input class="text-input" type="password" placeholder="请再次确认密码"/>
                            </label>
                        </div>
                        <div class="column is-mobile sign-in-button">
                            <label>
                                <input class="has-text-centered" value="注册" readonly>
                            </label>
                        </div>
                        <div class="column is-mobile sign-up-button">
                            <div class="has-text-centered">
                                <a @click="toLogin">已有账号，去登录</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    import {BaseModal} from 'vue-bulma-modal'
    import {IMG_URL, BRAND} from '../utils/constant'

    export default {
        mixins: [BaseModal],
        props: {
            visible: Boolean,
            closable: {
                type: Boolean,
                default: true
            },
            login: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isLogin: this.login,
                isMesLogin: false,
                img: IMG_URL + BRAND
            }
        },
        computed: {
            classes() {
                return ['modal', 'animated', 'is-active']
            },
            handleLoginClass() {
                return this.isLogin ? 'slideInLeft' : 'slideOutRight'
            },
            handleRegisterClass() {
                return !this.isLogin ? 'slideInRight' : 'slideOutLeft'
            },
        },
        methods: {
            // 覆盖原deactive方法
            deactive() {
                if (this.closable) this.show = false;
                // 关闭后复原isLogin值
                this.isLogin = this.login;
                this.isMesLogin = false;
            },
            toLogin() {
                this.isLogin = true;
                this.isMesLogin = false;
            },
            toMesLogin() {
                this.isMesLogin = !this.isMesLogin;
            },
            toRegister() {
                this.isLogin = false;
            },
            forgotPwd() {

            }
        },
        watch: {
            login(val) {
                this.isLogin = val
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    .login-form-modal{
        animation-duration: 200ms
    }

    .modal-card {
        width: 320px;
    }

    .modal-card-head {
        padding: 10px;

        .modal-card-logo {
            height: 40px;
            cursor: pointer;
        }

        .modal-card-title {
            padding-top: 0;
            padding-bottom: 0;
        }
    }

    .modal-card-body {
        padding: 10px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .sign-in-social {
        margin: 0;

        i {
            display : block;
            text-decoration: none;
            font-size: 20px;
            height: 40px;
            color: #fff;
            background: #dbdbdb;
            border-radius: 5px;
            border-bottom: 5px solid;
            cursor: pointer;
            padding-top: 10px;
            transition: background-color 200ms ease;
        }

        .github {
            border-bottom-color: #25292E;

            &:hover {
                background: #25292E;
            }
        }

        .twitter {
            border-bottom-color: #4099FF;

            &:hover {
                background: #4099FF;
            }
        }

        .weixin {
            border-bottom-color: #04BE02;

            &:hover {
                background: #04BE02;
            }
        }
    }

    .divider {
        font-size: 12px;
        margin: 0;
    }

    .text-input {
        width: 100%;
        height: 40px;
        font-size: 15px;
        padding: 5px 15px;
        margin: 10px 0;
        outline: none;
        color: #0d0c22;
        background-color: #f3f3f4;
        border-radius: 8px;
        border: 1px solid transparent;
        transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease;

        &:hover {
            background-color: #fff;
            border-color: rgba(0,0,0,0.1);
            box-shadow: 0 0 0 4px rgba(234,76,137,0.1);
        }
    }

    .sign-in-other {
        margin-top: 0;

        a {
            color: #999;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
        }

        .sign-in-phone:hover {
            box-shadow: inset 0 -5px 0 rgba(35, 209, 153, .2);
        }

        .sign-in-account:hover {
            box-shadow: inset 0 -5px 0 rgba(255, 221, 87, .2);
        }

        .forgot-pwd:hover {
            box-shadow: inset 0 -5px 0 rgba(255, 74, 110, .2);
        }
    }

    .sign-in-button {
        margin-top: 10px;

        input {
            width: 100%;
            height: 40px;
            color: white;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            text-decoration: none;
            border-radius: 20px;
            background: $purple;
            border: none;
            outline: none;
            cursor: pointer;
            transition: all 200ms ease;

            &:hover {
                color: white;
                background-color: #f082ac;
            }
        }
    }

    .sign-up-button {

        a {
            color: #999;
            font-size: 12px;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;

            &:hover {
                box-shadow: inset 0 -5px 0 rgba(184, 107, 255, .2);
            }
        }
    }

    // 解决chrome输入框自动填充背景色问题
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #f3f3f4 inset;
        -webkit-text-fill-color: #0d0c22 !important;
    }

</style>