<template>
    <div class="row">
        <div class="col-4">
            {{ item.name }}
        </div>
        <div class="col-2">
            {{ item.unit_cost }}
        </div>
        <div class="col-2">
            {{ item.units }} {{ item.unit_type }}
        </div>
        <div class="col-2">
            {{ row_total }}
        </div>
        <div class="col-2">
            <span class="badge bg-warning pointer" @click="$emit('editItem', item)">Edit</span>
            <span class="badge bg-danger pointer ms-1" @click="removeItem">Remove</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        removeItem() {
            this.$emit('removeItem', this.item)
        }
    },
    computed: {
        row_total() {
            return (this.item.units * this.item.unit_cost).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        }
    }
}
</script>