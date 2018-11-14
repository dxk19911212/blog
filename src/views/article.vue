<template>
    <section>
        <div class="container">
            <div class="column">
                <ul class="category-list animated bounceInLeft">
                    <li v-for="item in categoryData">
                        <a>{{ item.mark }}</a>
                        <span class="b-badge gelatine">{{ item.total | formatNum }}</span>
                    </li>
                </ul>
            </div>
            <div class="columns is-multiline animated fadeIn">
                <card v-for="item in cardData"
                      :img="item.img"
                      :title="item.title"
                      :summary="item.summary"
                      :tags="item.tags"
                      :views="item.views"
                      :loves="item.loves"/>
            </div>
        </div>
        <page-bar :current-page="pageNum" :last-page="total | getLastPage"/>
    </section>
</template>

<script>
    import * as articleApi from '../api/articleApi'

    export default {
        data() {
            return {
                categoryData: [],
                cardData: [],
                pageNum: 1,
                total: 0
            }
        },
        methods: {
            loadTag() {
                articleApi.getTagList().then(response => {
                    this.categoryData = response.data;
                })
            },
            loadArticle() {
                const params = {
                    pageNum: this.pageNum
                };
                articleApi.getArticleList(params).then(response => {
                    this.cardData = response.data.list;
                    this.total = response.data.count;
                });
            }
        },
        mounted() {
            this.loadTag();
            this.loadArticle();
        },
        watch: {
            $route() {
                this.pageNum = this.$route.params.page;
                this.loadArticle();
            }
        }
    }
</script>

<style lang="scss" scoped>

    section {
        padding: 3rem 0
    }

    .container {
        z-index: 1;
    }

    .b-badge {
        height: 20px;
        min-width: 20px;
        max-width: 100px;
        padding: 3px 6px;
        line-height: 1.2;
        white-space: nowrap;
        vertical-align: middle;
        font-size: 0.8rem;
        color: #fff;
        text-align: center;
    }

    @keyframes gelatine {
        from, to {
            transform: scale(1, 1)
        }
        25% {
            transform: scale(0.9, 1.1)
        }
        50% {
            transform: scale(1.1, 0.9)
        }
        75% {
            transform: scale(0.95, 1.05)
        }
    }

    .gelatine {
        animation: gelatine 0.6s;
        -webkit-animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
    }

    .category-list {
        display: flex;
        justify-content: center;
        padding-bottom: 30px;

        li {
            display: inline-block;
            margin: 0 10px;
            position: relative;
            transition: all .3s;

            .b-badge {
                position: absolute;
                top: -18px;
                right: -9px;
                font-weight: 700;
                justify-content: center;
                align-items: center;
                display: none;
                background: #00c5a9;
                border-radius: 200px;
            }

            a {
                color: #999;
                border: 1px solid #999;
                border-radius: 6px;
                padding: 10px 20px;
                transition: all .3s;

                &:hover {
                    border-color: #00d1b2;
                    background: #00d1b2;
                    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2);
                    color: #fff;

                    + .b-badge {
                        display: block;
                    }
                }
            }
        }
    }

    .row {
        margin-top: 70px;
    }
</style>