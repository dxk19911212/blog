<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-6-tablet is-1-desktop">
                    <div class="card-panel">
                        <div class="button-1" data-badge="1250">Love</div>
                        <div class="button-1"></div>
                        <div class="button-1"></div>
                        <div class="button-1"></div>
                        <div class="button-1"></div>
                        <div class="button-1"></div>
                    </div>
                </div>
                <div class="column is-6-tablet is-10-desktop">
                    <div class="card">
                        <div class="card-area"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>

    section {
        padding: 3rem 0
    }

    .img1 {
        background: url("../assets/demo/confirmation-button-k.gif") no-repeat center center;
    }

    .card {
        margin: 20px 5px;
        border-radius: 20px;
        background-color: #fff;
        transition: all .2s ease-out;
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);

        &:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
        }

        .card-area {
            overflow: hidden;
            cursor: pointer;
            position: relative;
            height: 300rem;
        }
    }

    .card-panel {
        position: fixed;
        top: 50rem;

        .button-1 {
            position: relative;
            margin-bottom: .75rem;
            width: 3rem;
            height: 3rem;
            background: #fff no-repeat 50%;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
            cursor: pointer;
        }
    }

</style>