<template>
    <div id="navbar">
        <nav-item v-for="(item, i) in navItems" :key="i" :item="item"></nav-item>
    </div>
</template>

<script>
    import navItems from '../../data/navigation-links'
    import NavItem from '../../components/navigation/NavItem.vue'

    export default {
        components: {
            NavItem
        },
        data() {
            return {
                navItems: navItems
            }
        }
    }
</script>

<style>
    #navbar {
        width: 100%;
        min-height: 70px;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        line-height: 70px;
        font-size: 1.1rem;
        font-weight: bold;
    }
</style>