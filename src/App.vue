<template>
    <div id="app" class="has-background-light">
        <router-view class="animated"/>
    </div>
</template>

<script>
    export default {
        mounted() {
            L2Dwidget.init({
                model: {
                    jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
                    scale: 1,
                    hHeadPos: .5,
                    vHeadPos: .618,
                    myDefine: []
                },
                display: {superSample: 2, width: 150, height: 300, position: "left", hOffset: -20, vOffset: -100},
                mobile: {show: !0, scale: 7, motion: !0},
                name: {canvas: "live2dcanvas", div: "live2d-widget"},
                react: {
                    opacityDefault: 1, opacityOnHover: .2, myFunc: function (t) {
                        console.log("(undefined) ┑(￣Д ￣)┍")
                    }
                },
                dev: {
                    log: !1, border: !1, mouseLog: !1, mouseFunc: function (t, n, e, r) {
                        console.log("MouseFunc: " + t + "," + n + "; " + e + ", " + r)
                    }
                }
            });
        }
    }
</script>

<style lang="scss">

    html {
        font: 14px/20px "Lato", Arial, sans-serif;
    }

</style>
