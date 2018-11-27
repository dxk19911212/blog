<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-hidden-touch is-1-desktop">
                    <div class="card-left">
                        <div class="badge-button animated bounceInLeft badge button-1" data-badge="1,530"
                             :style="this.model === 'read' ? '' : 'display: none'">
                            <span class="icon is-large">
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                        <div class="badge-button badge animated bounceInLeft button-2" data-badge="2,470"
                             :style="this.model === 'read' ? '' : 'display: none'">
                            <span class="icon is-large">
                                <i class="fas fa-eye"></i>
                            </span>
                        </div>
                        <div class="badge-button animated bounceInLeft button-3" @click="edit"
                             :style="this.model === 'read' ? '' : 'display: none'">
                            <span class="icon is-large">
                                <i class="fas fa-pen"></i>
                            </span>
                        </div>
                        <div class="badge-button animated bounceInLeft button-1" @click="preview"
                             :style="this.model === 'read' ? 'display: none' : ''">
                            <span class="icon is-large">
                                <i class="fas fa-exchange-alt"></i>
                            </span>
                        </div>
                        <div class="badge-button animated bounceInLeft button-2" @click="cancle"
                             :style="this.model === 'read' ? 'display: none' : ''">
                            <span class="icon is-large">
                                <i class="fas fa-trash"></i>
                            </span>
                        </div>
                        <div class="badge-button animated bounceInLeft button-3" @click="save"
                             :style="this.model === 'read' ? 'display: none' : ''">
                            <span class="icon is-large">
                                <i class="fas fa-save"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="column is-full-tablet is-9-desktop">
                    <div class="card content" :style="[handleCardPadding]" v-if="this.model === 'read'">
                        <vue-markdown :content="content"/>
                    </div>
                    <div class="card content" :style="[handleCardPadding]" v-if="this.model === 'preview'">
                        <vue-markdown :content="draft"/>
                    </div>
                    <div class="card content" :style="[handleCardPadding]" v-if="this.model === 'write'">
                        <textarea class="textarea" placeholder="写点东西吧..." rows="50"
                                  v-model="draft">{{ draft }}</textarea>
                    </div>
                </div>
                <div class="column is-hidden-touch is-2-desktop">
                    <div class="extend content">

                    </div>

                    <div class="extend content">

                    </div>

                    <div class="extend content">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as articleApi from '../api/articleApi'

    export default {
        data() {
            return {
                content: '',
                draft: '',
                model: 'read'
            }
        },
        computed: {
            ...mapGetters([
                'device'
            ]),
            handleCardPadding() {
                return this.device.isMobile ? {'padding': '15px', 'padding-top': '30px'} : {'padding': '50px'};
            }
        },
        methods: {
            load() {
                articleApi.getArticleInfo(1).then(response => {
                    this.content = response.data.content;
                });
            },
            edit() {
                this.model = 'write';
                this.draft = this.content;
            },
            preview() {
                this.model === 'preview' ? this.model = 'write' : this.model = 'preview';
            },
            cancle() {
                this.model = 'read';
            },
            save() {
                this.model = 'read';
                this.load();
            }
        },
        mounted() {
            this.load();
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";
    @import "~bulma-badge/dist/css/bulma-badge";

    section {
        padding: 3rem 0
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
            transition: all .3s;

            &:hover {
                border-color: #00d1b2;
                background: #00d1b2;
                box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2);
                color: #fff;
            }

            &:active {
                top: 2px;
            }
        }

        .button-2 {
            animation-delay: .1s;
        }

        .button-3 {
            animation-delay: .2s;
        }
    }

    .card {
        margin: -90px 10px 0 10px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
    }

    .extend {
        border-bottom: 1px solid #ddd;
    }
</style>