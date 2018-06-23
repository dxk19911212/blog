<template>
    <div id="app" class="has-background-light">
        <router-view class="animated"/>
    </div>
</template>

<script>
    // import {L2Dwidget} from 'live2d-widget/src/index'
    // import model from 'live2d-widget-model-koharu/assets/koharu.model.json'

    export default {
        // mounted() {
        //     L2Dwidget.init({
        //         mode: {
        //             jsonPath: 'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
        //             scale: 0.001
        //         },
        //         react: {
        //             opacityDefault: 0.9
        //         }
        //     });
        // }
    }
</script>

<style lang="scss">

    html {
        font: 14px/20px "Lato", Arial, sans-serif;
    }

</style>
