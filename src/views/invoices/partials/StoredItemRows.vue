<template>
    <div>

        <added-item-row v-for="(item, i) in items" :key="i" :item="item" v-on:removeItem="removeItem"></added-item-row>

        <button class="btn btn-outline-success btn-sm float-end mt-3" data-bs-toggle="modal" data-bs-target="#addItemModal"><strong>+</strong> Add Item</button>        

    </div>
</template>

<script>
    import AddedItemRow from './AddedItemRow.vue'

    export default {
        components: {
            AddedItemRow
        },
        props: ['items'],
        methods: {
            removeItem(item) {
                this.$emit('removeItem', item)
            }
        }
    }
</script>