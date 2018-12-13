<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
                <path-menu :style="device.isDesktop ? '' : 'display: none;'" :menu-item="this.menus"></path-menu>
                <div class="column is-hidden-touch is-1-desktop">
                    <div class="card-left">
                        <div class="badge-button badge animated bounceInLeft button-1" data-badge="1,530"
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
                <div class="column is-full-mobile is-11-desktop">
                    <div class="card" :style="[handleCardPadding]" v-if="this.model === 'read'">
                        <vue-markdown :content="article.info.content"/>
                    </div>
                    <div class="card" :style="[handleCardPadding]" v-if="this.model === 'preview'">
                        <vue-markdown :content="draft"/>
                    </div>
                    <div class="card" :style="[handleCardPadding]" v-if="this.model === 'write'">
                        <textarea class="textarea content" placeholder="写点东西吧..." rows="50"
                                  v-model="draft">{{ draft }}</textarea>
                    </div>
                </div>
                <!--<div class="column is-hidden-touch is-2-desktop">-->
                    <!--<div class="extend content">-->

                    <!--</div>-->

                    <!--<div class="extend content">-->

                    <!--</div>-->

                    <!--<div class="extend content">-->

                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                draft: '',
                model: 'read',
                menus: [
                    {
                        icon: 'fa-pen',
                        event: this.edit
                    },
                    {
                        icon: 'fa-exchange-alt',
                        event: this.preview
                    },
                    {
                        icon: 'fa-trash',
                        event: this.cancle
                    },
                    {
                        icon: 'fa-save',
                        event: this.save
                    }
                ]
            }
        },
        computed: {
            ...mapGetters([
                'device',
                'article'
            ]),
            handleCardPadding() {
                return this.device.isMobile ? {'padding': '15px', 'padding-top': '30px'} : {'padding': '50px'};
            }
        },
        methods: {
            load() {
                this.$store.dispatch('GetArticleInfo', this.article.info.id).then();
                this.draft = this.article.info.content;
            },
            edit() {
                this.model = 'write';
                this.draft = this.article.info.content;
            },
            preview() {
                this.model = this.model === 'read' ? 'read' : this.model === 'write' ? 'preview' : 'write';
            },
            cancle() {
                this.model = 'read';
            },
            save() {
                if (this.model === 'read') return;
                const data = {
                    id: this.article.info.id,
                    content: this.draft
                };
                this.$store.dispatch('UpdateArticle', data).then(() => {
                    this.model = 'read';
                    this.load();
                });
                this.draft = '';
            }
        },
        mounted() {
            this.load()
        },
        watch: {
            $route() {
                this.id = this.$route.params.id;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';
    @import "~bulma-badge/dist/css/bulma-badge";

    section {
        padding: 3rem 0;
        min-height: 500px;
    }

    .card-left {
        position: fixed;
        /*top: 35rem;*/

        .badge-button {
            position: relative;
            margin-bottom: .75rem;
            width: 3rem;
            height: 3rem;
            background: white no-repeat 50%;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
            cursor: pointer;
            border: 1px solid #999;
            transition: all .3s;

            &:hover {
                border-color: $pink;
                background: $pink;
                box-shadow: 0 14px 26px -12px rgba(216, 105, 124, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(209, 105, 116, 0.2);
                color: white;
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
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
    }

    .extend {
        border-bottom: 1px solid #ddd;
    }
</style>