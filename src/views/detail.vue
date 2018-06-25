<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
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
                        <div class="badge-button badge animated bounceInLeft button-3" data-badge="149">
                            <span class="icon is-large">
                                <i class="fas fa-stream"></i>
                            </span>
                        </div>
                        <div class="badge-button badge animated bounceInLeft button-4">
                            <span class="icon is-large">
                                <i class="fas fa-weibo"></i>
                            </span>
                        </div>
                        <div class="badge-button badge animated bounceInLeft button-5">
                            <span class="icon is-large">
                                <i class="fas fa-qq"></i>
                            </span>
                        </div>
                        <div class="badge-button badge animated bounceInLeft button-6">
                            <span class="icon is-large">
                                <i class="fas fa-weixin"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="column is-full-tablet is-8-desktop">
                    <div class="card animated bounceInUp">
                        <div class="card-top">
                            <div class="card-img img1"></div>
                        </div>
                        <div class="card-area">
                        </div>
                    </div>
                </div>
                <div class="column is-hidden-touch is-3-desktop">
                    <div class="columns is-multiline">
                        <div class="column">
                            <div class="card pic-1 animated bounceInRight">
                                <div class="card-box">
                                    <img src="../assets/pic1.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-multiline">
                        <div class="column">
                            <div class="card pic-2 animated bounceInRight">
                                <div class="card-box">
                                    <img src="../assets/pic2.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-hidden-touch is-1-desktop"></div>
                <div class="column is-full-tablet is-8-desktop">
                    <div class="card animated bounceInUp">
                        <div class="card-comment">
                            <quill-editor :content="content"
                                          :options="editorOption"
                                          @change="onEditorChange($event)">
                            </quill-editor>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import quill from 'quill'
    // import yourQuillModule from '../yourModulePath/yourQuillModule.js'
    // Quill.register('modules/yourQuillModule', yourQuillModule)

    export default {
        data() {
            return {
                content: '<h2>I am Example</h2>',
                editorOption: {
                    // some quill options
                }
            }
        },
        methods: {
            onEditorChange({quill, html}) {
                this.content = html;
                console.log(quill.getText())
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";
    @import "~bulma-badge/dist/bulma-badge";

    section {
        padding: 3rem 0
    }

    .img1 {
        background: url("../assets/demo/easyship.jpg") no-repeat center center;
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
        .button-3 {
            animation-delay: .2s;
        }
        .button-4 {
            margin-top: 50px;
            animation-delay: .3s;
        }
        .button-5 {
            animation-delay: .4s;
        }
        .button-6 {
            animation-delay: .5s;
        }
    }

    .card {
        margin: 10px;
        border-radius: 20px;
        background-color: #fff;
        transition: all .2s ease-out;
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);

        &:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
        }

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
            height: 100rem;
            padding: 30px;
        }

        .card-box {
            padding: 20px;
        }

        &.pic-2 {
            animation-delay: .2s;
        }

        .card-comment {
            height: 30rem;
            padding: 30px;
        }
    }

</style>