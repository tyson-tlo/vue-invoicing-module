<template>
    <div>
        <router-link :to="item.to">{{ item.title }}</router-link>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: white;
        margin: 0 5px;
    }
</style>