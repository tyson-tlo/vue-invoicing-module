<template>
    <div class="item-display-container">
        <div class="item-description">
            {{ item.name }}
        </div>
        <div class="item-unit-cost">
            {{ unit_cost }}
        </div>
        <div class="item-unit-totals">
            {{ item.units }} {{ item.unit_type }}
        </div>
        <div class="item-total">
            {{ row_total }}
        </div>        
    </div>
</template>

<script>
export default {
    props: ['item'],
    computed: {
        row_total() {
            return (this.item.unit_cost * this.item.units).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })
        },
        unit_cost() {
            return this.item.unit_cost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
        }
    }
}
</script>

<style>
    .item-display-container {
        display: flex;
        text-align: left;
        margin-bottom: 15px;
    }

    .item-description {
        width: 70%;        
    }

    .item-unit-cost {
        width: 10%;
    }

    .item-unit-totals {
        width: 10%;
    }

    .item-total {
        width: 10%;
    }
</style>