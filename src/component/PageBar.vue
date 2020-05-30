<template>
    <div class="page-container">
        <div class="columns is-multiline">
            <div class="column is-3"></div>
            <div class="column">
                <pagination class="is-rounded is-centered is-large"
                            :url-builder="page => ({ params: { page } })"
                            :current-page="currentPage"
                            :last-page="lastPage"
                            :display-page="6"
                            :prev="'«'"
                            :next="'»'"/>
            </div>
            <div class="column is-3"></div>
        </div>
    </div>
</template>

<script>
    import Pagination from 'vue-bulma-pagination/src/Pagination'

    export default {
        components: {
            Pagination
        },
        props: {
            currentPage: {
                type: Number,
                default: 1
            },
            lastPage: Number
        }
    }
</script>

<style lang="scss">
    .page-container {
        padding: 0 30px;
        border-radius: 0;
        margin: 50px 0 100px;
    }

    .pagination {
        a {
            position: relative;
            float: left;
            padding: 6px 12px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            color: rgba(67, 91, 113, .5);
            width: 50px;
            height: 50px;
            background: none;
            border: 2px solid rgba(67, 91, 113, .5);
            margin: 4px;
            transition: all .3s;

            &:hover {
                z-index: 2;
                color: white;
                border-color: #FA7C91;
                background-color: #FA7C91;
            }
        }

        .pagination-previous {
            border: none;
            flex-grow: 0;
        }

        .pagination-next {
            border: none;
            flex-grow: 0;
        }

        .pagination-list {
            align-items: normal;

            .pagination-link.is-current {
                color: white;
                border-color: #FA7C91;
                background-color: #FA7C91;
            }
        }
    }
</style>