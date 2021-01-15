<template>
    <div>

        

                

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