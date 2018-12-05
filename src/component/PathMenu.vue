<template>
    <div class="menu-container">
        <!--<div class="flyout-btn" ref="homeMenu" @click="toggleMenu">-->
        <!--<span class="icon is-large">-->
        <!--<i class="fas fa-star"></i>-->
        <!--</span>-->
        <!--</div>-->
        <!--<ul class="flyout" ref="subMenuCont">-->
        <!--<li v-for="(item, index) in menuItem">-->
        <!--<div :id="item.name" ref="subMenu" @click="clickMenu(index)">-->
        <!--<span class="icon is-large">-->
        <!--<i :class="['fa', item.icon]"></i>-->
        <!--</span>-->
        <!--</div>-->
        <!--</li>-->
        <!--</ul>-->

        <div class="menu home-menu animated bounceInLeft" ref="homeMenu" @click="toggleMenu">
            <span class="icon is-large">
                <i class="fas fa-star"></i>
            </span>
        </div>
        <div :id="item.name" class="menu sub-menu animated bounceInLeft"
             @click="clickMenu(item, index)" v-for="(item, index) in menuItem">
            <span class="icon is-large">
                <i :class="['fa', item.icon]"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuItem: [
                    {
                        name: 'menu1',
                        icon: 'fa-heart'
                    },
                    {
                        name: 'menu2',
                        icon: 'fa-eye'
                    },
                    {
                        name: 'menu3',
                        icon: 'fa-pen'
                    },
                    {
                        name: 'menu4',
                        icon: 'fa-edit'
                    }
                ],
                openFlag: false,
                baseDistance: 120
            }
        },
        methods: {
            // toggleMenu() {
            //     this.$refs.homeMenu.classList.toggle('rotate');
            //     this.$refs.subMenu.forEach((item) => {
            //         item.classList.remove('clicked')
            //     });
            //     this.$refs.subMenuCont.classList.remove('fade');
            //     this.$refs.subMenuCont.classList.toggle('expand');
            // },
            // clickMenu(index) {
            //     this.$refs.homeMenu.classList.toggle('rotate');
            //     this.$refs.subMenuCont.classList.remove('expand');
            //     this.$refs.subMenuCont.classList.toggle('fade');
            //     this.$refs.subMenu[index].classList.add('clicked');
            // }
            toggleMenu() {
                if (!this.openFlag) {
                    this.menuItem.forEach((item, index) => {
                        this.toggleMenuTransition(item.name, index, false)
                    });
                    // 主菜单自旋
                    this.$refs.homeMenu.classList.toggle('rotate');
                } else {
                    this.menuItem.forEach((item, index) => {
                        this.toggleMenuTransition(item.name, index, true)
                    });
                    // 主菜单自旋
                    this.$refs.homeMenu.classList.toggle('rotate');
                }
                this.openFlag = !this.openFlag;
            },
            toggleMenuTransition(name, index, revert) {
                let oneArea = 90 / (this.menuItem.length - 1);
                let axisX = Math.sin((this.menuItem.length - 1 - index) * oneArea * 2 * Math.PI / 360);
                let axisY = Math.cos((this.menuItem.length - 1 - index) * oneArea * 2 * Math.PI / 360);
                let el = document.getElementById(name);
                let that = this;
                if (!revert) {
                    // 子菜单弹出
                    setTimeout(function () {
                        el.style.transitionDuration = '300ms';
                        el.style.transform = `translate(${that.baseDistance * axisX}px, -${that.baseDistance * axisY}px)`;
                    }, index * 50)
                } else {
                    // 子菜单收回
                    setTimeout(function () {
                        el.style.transitionDuration = '300ms';
                        el.style.transform = `translate(0,0)`;
                    }, index * 50)
                }
            },
            clickMenu(item, index) {
                this.$emit('clickMenu', item, index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    /*
    .menu-container {
        position: relative;
        height: 193px;
        z-index: 9;

        .flyout-btn {
            position: absolute;
            z-index: 8;
            bottom: 1px;
            left: 4px;
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

            &.rotate span {
                transform: rotate(-135deg);
            }
        }

        .flyout {
            position: absolute;
            margin-left: 5px;
            line-height: 0;

            li {
                position: absolute;
                display: block;
                height: 170px;
                background: yellow;
                transform-origin: 21.5px bottom;

                div {
                    position: absolute;
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
                    animation: contract 0.35s ease-out 1 backwards;

                    &:hover {
                        border-color: $pink;
                        background: $pink;
                        box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                        color: #fff;
                    }
                }

            }

            > li:nth-of-type(1) {
                transform: rotate(0deg);
            }

            > li:nth-of-type(2) {
                transform: rotate(45deg);
            }

            > li:nth-of-type(3) {
                transform: rotate(90deg);
            }

            li {
                &:nth-of-type(1) div {
                    animation-delay: 0.2s;
                }

                &:nth-of-type(1) div:not(.clicked) span {
                    animation: spin1-contract .9s ease-out 1 backwards;
                }

                &:nth-of-type(2) div {
                    animation-delay: 0.16s;
                }

                &:nth-of-type(2) div:not(.clicked) span {
                    animation: spin2-contract .9s ease-out 1 backwards;
                }

                &:nth-of-type(3) div {
                    animation-delay: 0.12s;
                }

                &:nth-of-type(3) div:not(.clicked) span {
                    animation: spin3-contract .9s ease-out 1 backwards;
                }
            }
        }

        .flyout.expand li:nth-of-type(1) div {
            animation-delay: 0s;
        }

        .flyout.expand li:nth-of-type(1) div span {
            transform: rotate(0deg);
            animation: spin1-expand .6s ease-out 1 backwards;
        }

        .flyout.fade li:nth-of-type(1) div.clicked span {
            transform: rotate(0deg);
        }

        .flyout.expand li:nth-of-type(2) div {
            animation-delay: 0.04s;
        }

        .flyout.expand li:nth-of-type(2) div span {
            transform: rotate(-45deg);
            animation: spin2-expand .6s ease-out 1 backwards;
        }

        .flyout.fade li:nth-of-type(2) div.clicked span {
            transform: rotate(-45deg);
        }

        .flyout.expand li:nth-of-type(3) div {
            animation-delay: 0.08s;
        }

        .flyout.expand li:nth-of-type(3) div span {
            transform: rotate(-90deg);
            animation: spin3-expand .6s ease-out 1 backwards;
        }

        .flyout.fade li:nth-of-type(3) div.clicked span {
            transform: rotate(-90deg);
        }


        .flyout.expand li div {
            top: 10px;
            animation: expand .6s ease 1 backwards;
        }

        .flyout.fade li div.clicked {
            top: 10px;
            animation: clicked 0.5s ease-out 1 forwards;
        }

        .flyout.fade li div:not(.clicked) {
            top: 10px;
            animation: fade 0.5s ease-out 1 forwards;
        }

        .flyout.fade li div:not(.clicked) span {
            opacity: .1;
            transition: opacity .5s ease;
        }
    }
    */

    .menu {
        position: fixed;
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

        &.rotate span {
            transform: rotate(-180deg);
        }

        &.home-menu {
            z-index: 9;
        }

        &.sub-menu {
            z-index: 8;
        }
    }

    /*
    @keyframes expand {
        0% {
            top: 150px;
        }
        50% {
            top: -10px;
        }
        70% {
            top: 15px;
        }
        100% {
            top: 10px;
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

    @keyframes spin1-expand {
        0% {
            transform: rotate(0deg);
        }
        60% {
            transform: rotate(-360deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }

    @keyframes spin2-expand {
        0% {
            transform: rotate(-45deg);
        }
        60% {
            transform: rotate(-405deg);
        }
        100% {
            transform: rotate(-405deg);
        }
    }

    @keyframes spin3-expand {
        0% {
            transform: rotate(-90deg);
        }
        60% {
            transform: rotate(-450deg);
        }
        100% {
            transform: rotate(-450deg);
        }
    }

    @keyframes spin1-contract {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes spin2-contract {
        0% {
            transform: rotate(-45deg);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes spin3-contract {
        0% {
            transform: rotate(-90deg);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    */

    /*
    $transform1: translate(100px,100px);
    $transform2: translate(120px,120px);
    $transform3: translate(90px,90px);
    $transform4: translate(80px,80px);

    @keyframes expand {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(100px,100px);
        }
    }
    */
</style>