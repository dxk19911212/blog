<template>
    <section>
        <div class="jobs">
            <div class="column">
                <!--<h1 class="title big-title animated bounceIn">-->
                <!--String的重用-->
                <!--</h1>-->
                <div class="title-avatar has-text-centered">
                    <img class="animated rubberBand" :src="avatar" alt="Logo">
                    <div class="title-meta animated fadeIn">
                        <div class="author-name">
                            Posted by
                            <span>Xiaokang</span>
                        </div>
                        <div class="timestamp">
                            on
                            <span>2018-06-22</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="columns is-multiline">
                <path-menu :style="device.isDesktop ? '' : 'display: none;'" :menu-item="this.menus"></path-menu>
                <div class="column is-hidden-touch is-1-desktop">
                    <div class="card-left">
                        <div class="badge-button animated bounceInLeft button-1"
                             :style="this.model === 'read' ? '' : 'display: none'">
                            <span class="icon is-large">
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                        <div class="badge-button animated bounceInLeft button-2"
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
    import {IMG_URL, AVATAR} from '../utils/constant'

    export default {
        data() {
            return {
                articleId: null,
                avatar: IMG_URL + AVATAR,
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
                const id = this.articleId == null ? this.article.info.id : this.articleId;
                this.$store.dispatch('GetArticleInfo', id).then();
                this.draft = this.article.info.content;
                this.articleId = this.article.info.id;
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
            this.articleId = this.$route.params.id;
            this.load()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/customize';

    section {
        padding-bottom: 5rem;
        min-height: 500px;
    }

    .jobs {
        padding: 20px 0;
        color: white;
        background: linear-gradient(45deg, #5761b4 0%, #c142a0 100%);

        .title-avatar {
            img {
                height: 70px;
                width: 70px;
                border: 3px solid white;
                border-radius: 50%;
            }

            .title-meta {
                margin-bottom: 30px;

                .author-name span {
                    font-size: 1.2rem;
                    font-weight: 600;
                    text-transform: capitalize;
                }

                .timestamp span {
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }
    }

    .card-left {
        position: fixed;
        top: 25rem;

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
        margin: -40px 10px 0 10px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
    }

    .extend {
        border-bottom: 1px solid #ddd;
    }
</style>