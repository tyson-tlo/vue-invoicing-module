<template>
    <div>
        {{ rowTotal.toLocaleString() }}
    </div>
</template>

<script>
export default {
    props: ['item'],
    computed: {
        rowTotal() {
            return (this.item.unit_cost * this.item.units).toLocalString()
        }
    }
}
</script>