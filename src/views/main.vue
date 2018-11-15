<template>
    <div>
        <header-bar></header-bar>
        <transition mode="out-in"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                    appear>
            <keep-alive>
                <router-view class="animated"/>
            </keep-alive>
        </transition>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>

</style>