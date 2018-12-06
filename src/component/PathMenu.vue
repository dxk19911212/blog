<template>
    <div class="menu-container">
        <div class="flyout-btn" :class="[handleClass1]" @click="toggleHomeMenu">
            <span class="icon is-large">
                <i class="fas fa-star"></i>
            </span>
        </div>
        <ul class="flyout" :class="[handleClass2]">
            <li v-for="(item, index) in menuItem" :style="[handleStyle1(index)]">
                <div :id="['menu' + index]" ref="menu" :style="[handleStyle2(index)]" @click="toggleSubMenu(index)">
                    <span class="icon is-large" :style="[handleStyle3(index)]">
                        <i :class="['fas', item.icon]"></i>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rotate: false,
                gelatine: false,
                expand: false,
                fade: false,
                clicked: false
            }
        },
        props: {
            menuItem: Array
        },
        computed: {
            handleClass1() {
                return this.rotate ? 'rotate gelatine' : '';
            },
            handleClass2() {
                return this.expand ? 'expand' : this.fade ? 'fade' : '';
            }
        },
        methods: {
            toggleHomeMenu() {
                this.rotate = !this.rotate;
                this.gelatine = !this.gelatine;
                this.fade = false;
                this.expand = !this.expand;
                this.$refs.menu.forEach((item) => {
                    item.classList.remove('clicked')
                });
                this.clicked = false;
            },
            toggleSubMenu(index) {
                this.rotate = !this.rotate;
                this.gelatine = !this.gelatine;
                this.expand = false;
                this.fade = !this.fade;
                this.$refs.menu[index].classList.add('clicked');
                this.clicked = true;
            },
            handleStyle1(index) {
                return {transform: 'rotate(' + index * 90 / (this.menuItem.length - 1) + 'deg)'}
            },
            handleStyle2(index) {
                return {
                    animationDelay: this.expand ?
                        (index * 0.05).toFixed(2) + 's' : (0.3 - index * 0.05).toFixed(2) + 's'
                }
            },
            handleStyle3(index) {
                return this.expand || this.clicked ?
                    {
                        transform: 'rotate(-' + index * 90 / (this.menuItem.length - 1) + 'deg)',
                        animation: 'spin-expand .6s ease-out 1 backwards'
                    } : ''
            }
        },
        mounted() {
            let _ = this.menuItem;
            _.forEach((item, index) => {
                document.getElementById('menu' + index).onclick = item.event;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    .menu-container {
        position: fixed;
        z-index: 9;

        .flyout-btn {
            position: fixed;
            z-index: 8;
            left: 10px;
            bottom: 10px;
            background: #fff no-repeat 50%;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
            cursor: pointer;
            border: 1px solid #999;
            transition: all .4s;

            &:hover {
                border-color: $pink;
                background: $pink;
                box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                color: #fff;
            }

            span {
                transition: transform .4s ease;
            }

            &.gelatine {
                animation: gelatine 0.6s 1 backwards;
            }

            &.rotate span {
                transform: rotate(-180deg);
            }
        }

        .flyout {
            position: fixed;
            left: 11px;
            bottom: 202px;
            line-height: 0;

            li {
                position: fixed;
                display: block;
                height: 170px;
                background: yellow;
                transform-origin: 21.5px bottom;

                div {
                    position: fixed;
                    display: block;
                    bottom: 0;
                    top: 150px;
                    width: 3rem;
                    height: 3rem;
                    background: #fff no-repeat 50%;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
                    cursor: pointer;
                    border: 1px solid #999;
                    transition: all .4s;
                    animation: contract 0.35s ease-out 1 backwards;

                    &:hover {
                        border-color: $pink;
                        background: $pink;
                        box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                        color: #fff;
                    }

                    &:not(.clicked) span {
                        animation: spin-contract .9s ease-out 1 backwards;
                    }
                }
            }

            &.expand li div {
                top: 10px;
                animation: expand .6s ease 1 backwards;
            }

            &.fade li div {
                &.clicked {
                    top: 10px;
                    animation: clicked 0.5s ease-out 1 forwards;
                }

                &:not(.clicked) {
                    top: 10px;
                    animation: fade 0.5s ease-out 1 forwards;

                    span {
                        opacity: .1;
                        transition: opacity .5s ease;
                    }
                }
            }
        }
    }

    @keyframes gelatine {
        from, to {
            transform: scale(1, 1)
        }
        25% {
            transform: scale(0.9, 1.1)
        }
        50% {
            transform: scale(1.1, 0.9)
        }
        75% {
            transform: scale(0.95, 1.05)
        }
    }

    @keyframes contract {
        0% {
            top: 10px;
        }
        40% {
            top: -25px;
        }
        100% {
            top: 150px;
            transform: scale(.5);
        }
    }

    @keyframes spin-contract {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(720deg);
        }
        100% {
            transform: rotate(720deg);
        }
    }

    @keyframes expand {
        0% {
            top: 150px;
            transform: scale(.5);
        }
        50% {
            top: -10px;
            transform: scale(0.9, 1.1)
        }
        70% {
            top: 15px;
            transform: scale(1.1, 0.9)
        }
        100% {
            top: 10px;
            transform: scale(1);
        }
    }

    @keyframes spin-expand {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes clicked {
        0% {
            transform: scale(1);
            opacity: 1;
            top: 10px;
        }
        90% {
            top: 10px;
        }
        99% {
            transform: scale(6);
            opacity: 0;
            top: 150px;
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes fade {
        0% {
            transform: scale(1);
            opacity: 1;
            top: 10px;
        }
        90% {
            opacity: 0;
            top: 10px;
        }
        99% {
            transform: scale(0);
            top: 150px;
        }
        100% {
            transform: scale(0);
        }
    }
</style>