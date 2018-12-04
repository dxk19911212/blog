<template>
    <div id="app" class="has-background-light">
        <router-view class="animated"/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                width: 768,
                ratio: 3
            }
        },
        methods: {
            ...mapActions([
                'ToggleDevice'
            ]),
            monitor() {
                if (!document.hidden) {
                    let rect = document.body.clientWidth;
                    let isMobile = rect - this.ratio < this.width;
                    this.ToggleDevice(isMobile ? 'mobile' : 'other');

                    // let canvas = document.getElementById("live2dcanvas");
                    // if (isMobile && canvas != null) {
                    //     canvas.style.display = "none";
                    // } else if (!isMobile && canvas != null) {
                    //     canvas.style.display = "";
                    // }
                }
            },
            // showKoharu() {
            //     L2Dwidget.init({
            //         model: {
            //             jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
            //             scale: 1,
            //             hHeadPos: .5,
            //             vHeadPos: .618,
            //             myDefine: []
            //         },
            //         display: {superSample: 2.5, width: 100, height: 150, position: "left", hOffset: -30, vOffset: -30},
            //         mobile: {show: !0, scale: 7, motion: !0},
            //         name: {canvas: "live2dcanvas", div: "live2d-widget"},
            //         react: {
            //             opacityDefault: 1, opacityOnHover: .2, myFunc: function (t) {
            //                 console.log("(undefined) ┑(￣Д ￣)┍")
            //             }
            //         },
            //         dev: {
            //             log: !1, border: !1, mouseLog: !1, mouseFunc: function (t, n, e, r) {
            //                 console.log("MouseFunc: " + t + "," + n + "; " + e + ", " + r)
            //             }
            //         }
            //     });
            // }
        },
        mounted() {
            // this.showKoharu();
            this.monitor();
            const handler = () => {
                this.monitor()
            };
            window.addEventListener('scroll', handler);
            window.addEventListener('resize', handler);
        }
    }
</script>

<style lang="scss">
    @import "./assets/customize";

    html {
        font: 14px/20px Arial, sans-serif;
    }

    ::selection {
        background: $primary;
        color: #ffffff;
    }

    ::-moz-selection {
        background: $primary;
        color: #ffffff;
    }
</style>
