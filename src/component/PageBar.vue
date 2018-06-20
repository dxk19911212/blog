<template>
    <div class="page-container">
        <div class="columns is-multiline">
            <div class="column"></div>
            <div class="column is-6-tablet is-4-desktop">
                <pagination class="is-rounded is-centered is-medium"
                            :urlPrefix="'/'"
                            :currentPage="5"
                            :lastPage="30"
                            :prev="'«'"
                            :next="'»'"/>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>

<script>
    import Pagination from 'vue-bulma-pagination/src/Pagination'

    export default {
        components: {
            Pagination
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

            &:hover {
                z-index: 2;
                color: #fff;
                border-color: #00d1b2;
                background-color: #00d1b2;
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
                color: #fff;
                border-color: #00d1b2;
                background-color: #00d1b2;
            }
        }
    }
</style>