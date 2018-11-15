<template>
    <div class="columes">
        <div class="column is-8 is-offset-2 has-text-centered">
            <h1 class="title big-title animated bounceIn">
                String的重用
            </h1>
            <div class="title-avatar has-text-centered">
                <img class="animated rubberBand" src="https://pic.iishoni.com/avatar.jpg" alt="Logo">
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
            <div class="title-btn has-text-centered animated fadeIn">
                <router-link :to="'/'" class="primary-btn ">Back to Blog</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .title-avatar {
        img {
            height: 70px;
            width: 70px;
            border: 3px solid #fff;
            border-radius: 50%;
        }

        .title-meta {
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

    .title-btn {
        padding-top: 30px;

        .primary-btn {
            border-radius: 500px;
            padding: 15px 70px;
            outline: none;
            border-color: #00c5a9;
            background-color: #00c5a9;
            color: #fff;
            transition: all 0.5s;

            &:hover {
                box-shadow: 0 14px 26px -12px rgba(0, 197, 169, 0.42),0 4px 23px 0px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0, 197, 169, 0.2);
            }
        }
    }
</style>