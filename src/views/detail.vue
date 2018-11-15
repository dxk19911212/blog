<template>
    <section>
        <div class="container">
            <div class="columns is-multiline is-gapless">
                <div class="column is-hidden-touch is-1-desktop">
                    <div class="card-left">
                        <div class="badge-button badge animated bounceInLeft button-1" data-badge="1,530">
                            <span class="icon is-large">
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                        <div class="badge-button badge animated bounceInLeft button-2" data-badge="2,470">
                            <span class="icon is-large">
                                <i class="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="column is-full-tablet is-9-desktop">
                    <div class="card animated bounceInUp">
                        <div class="card-top">
                            <div class="card-img img1"></div>
                        </div>
                        <div class="content card-area" v-html="content"></div>
                    </div>
                </div>
                <div class="column is-hidden-touch is-2-desktop">
                    <div class="columns is-multiline is-gapless">
                        <div class="column">
                            <div class="card pic-1 animated bounceInRight">
                                <div class="card-box">
                                    <img src="https://pic.iishoni.com/p9.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-multiline is-gapless">
                        <div class="column">
                            <div class="card pic-2 animated bounceInRight">
                                <div class="card-box">
                                    <img src="https://pic.iishoni.com/p10.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--<div class="columns is-multiline">-->
                <!--<div class="column is-hidden-touch is-1-desktop"></div>-->
                <!--<div class="column is-full-tablet is-9-desktop">-->
                    <!--<div class="card animated bounceInUp">-->
                        <!--<div class="card-comment">-->
                            <!--<mavon-editor v-model="content"/>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </section>
</template>

<script>
    import * as articleApi from '../api/articleApi'

    export default {
        data() {
            return {
                content: ''
            }
        },
        methods: {
            loadDetail() {
                articleApi.getArticleInfo(1).then(response => {
                    this.content = response.data.content;
                });
            }
        },
        mounted() {
            this.loadDetail();
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";
    @import "~bulma-badge/dist/css/bulma-badge";

    section {
        padding: 3rem 0
    }

    .img1 {
        background: url("https://pic.iishoni.com/p2.jpg") no-repeat center center;
    }

    .card-left {
        position: fixed;
        /*top: 35rem;*/

        .badge-button {
            position: relative;
            margin-bottom: .75rem;
            width: 3rem;
            height: 3rem;
            background: #fff no-repeat 50%;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
            cursor: pointer;
            border: 1px solid #999;
        }

        .button-2 {
            animation-delay: .1s;
        }
    }

    .card {
        margin: 10px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);

        .card-top {
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
            position: relative;
            padding: 30px;
        }

        .card-box {
            padding: 10px;
        }

        &.pic-2 {
            animation-delay: .2s;
        }

        .card-comment {
            padding: 30px;
        }
    }

</style>