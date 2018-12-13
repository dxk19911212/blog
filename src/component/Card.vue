<template>
    <div class="column is-6-tablet is-4-desktop">
        <div class="card">
            <div class="card-top">
                <div class="card-img" :style='backgroundStyles' @click="load"></div>
            </div>
            <div class="card-bottom">
                <div class="card-upper">
                    <span class="card-title">{{ title }}</span>
                    <span class="card-summary">{{ summary }}</span>
                </div>
                <div class="card-lower is-clearfix">
                    <div class="pull-left">
                        <a v-for="item in tags">#{{ item }}&nbsp;</a>
                    </div>
                    <div class="pull-right">
                        <div class="view-love">
                            <span class="icon">
                                <i class="fas fa-heart"></i>
                            </span>
                            <span>{{ views | formatNum }}</span>
                            <span class="icon">
                                <i class="fas fa-eye"></i>
                            </span>
                            <span>{{ loves | formatNum }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            id: Number,
            img: String,
            title: String,
            summary: String,
            tags: Array,
            views: Number,
            loves: Number
        },
        data() {
            return {
                backgroundStyles: {
                    background: 'url("' + this.img + '") center center no-repeat',
                    backgroundSize: '100% 100%'
                }
            }
        },
        methods: {
            load() {
                this.$emit('load')
            }
        }
    }
</script>

<style lang="scss" scoped>

    .card {
        margin: 20px;
        border-radius: 10px;
        background-color: white;
        transition: all .2s ease-out;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);

        &:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);
        }

        .card-top {
            overflow: hidden;
            cursor: pointer;
            position: relative;
            padding-top: 70%;

            .card-img {
                transition: all .3s;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }
        }

        .card-bottom {
            background-color: white;
            position: relative;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;

            .card-upper {
                padding: 19px 20px 13px;
                min-height: 100px;

                .card-title {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 27px;
                    color: #435b71;
                    display: inline-block;
                    margin-bottom: 7px;
                }

                .card-summary {
                    display: block;
                    font-size: 13px;
                    line-height: 22px;
                    color: #435b71;
                }
            }

            .card-lower {
                border-top: 1px solid rgba(67, 91, 113, .1);
                padding: 11px 20px 13px;

                .pull-left {
                    float: left !important;

                    a {
                        font-size: 15px;
                        line-height: 12px;
                        color: rgba(67, 91, 113, .5);
                        display: inline-block;
                        vertical-align: middle;
                    }
                }

                .pull-right {
                    float: right !important;

                    .view-love {
                        font-size: 12px;
                        font-weight: 700;
                        color: #435b71;
                        line-height: 12px;
                        vertical-align: middle;
                        display: inline-block;

                        span {
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }

</style>