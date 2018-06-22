<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-0-tablet is-1-desktop">
                    <div class="card-panel animated bounceIn"
                         :class="isMobile ? 'animated fadeOutLeft' : 'animated bounceInLeft'">
                        <div class="button-1 badge" data-badge="1250"></div>
                        <div class="button-1 badge" data-badge="1250"></div>
                        <div class="button-1 badge" data-badge="1250"></div>
                    </div>
                </div>
                <div class="column is-full-tablet is-11-desktop">
                    <div class="card animated zoomIn">
                        <div class="card-top">
                            <div class="card-img img1"></div>
                        </div>
                        <div class="card-area"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {L2Dwidget} from 'live2d-widget/src/index'

    export default {
        data() {
            return {
                width: 1088,
                ratio: 3,
                isMobile: false
            }
        },
        methods: {
            handleCardPanel() {
                let rect = document.body.clientWidth;
                this.isMobile = rect - this.ratio < this.width;
            }
        },
        mounted() {
            this.handleCardPanel();
            const handler = () => {
                this.handleCardPanel()
            };
            window.addEventListener('resize', handler);
            //     L2Dwidget.init({
            //         model: {
            //             jsonPath: 'http://www.52cik.com/bilibili-haruna/assets/haruna/22/model.2018.lover.json'
            //         }
            //     });
        }
    }
</script>

<style lang="scss" scoped>

    section {
        padding: 3rem 0
    }

    .img1 {
        background: url("../assets/demo/confirmation-button-k.gif") no-repeat center center;
    }

    .card {
        margin: 20px;
        border-radius: 20px;
        background-color: #fff;
        transition: all .2s ease-out;
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);

        &:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
        }

        .card-top {
            overflow: hidden;
            cursor: pointer;
            position: relative;
            padding-top: 70%;

            .card-img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-size: 100% 100%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
            }
        }

        .card-area {
            overflow: hidden;
            cursor: pointer;
            position: relative;
            height: 300rem;
        }
    }

    .card-panel {
        position: fixed;
        /*top: 35rem;*/

        .button-1 {
            position: relative;
            margin-bottom: .75rem;
            width: 3rem;
            height: 3rem;
            background: #fff no-repeat 50%;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
            cursor: pointer;
        }
    }

</style>