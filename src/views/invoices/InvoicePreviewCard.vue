<template>
    <div class="invoice-preview-card">
        <h4>{{ invoice.customer.name }} <small>{{ invoice.payment.status }}</small></h4>
        <div class="preview-container">
            <div class="customer-details">
                <h5>Address: {{ invoice.customer.address }}</h5>
                <h5>City: {{ invoice.customer.city }}</h5>
                <h5>Province: {{ invoice.customer.province }}</h5>
                <h5>Postal Code: {{ invoice.customer.postal_code }}</h5>
            </div>
            <div class="total-details">
                <h5>Total: {{ total }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['invoice'],
        computed: {
            total() {
                return this.invoice.items.reduce( (a, b) => a + b.units * b.unit_cost ,0).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            }
        }
    }
</script>

<style scoped>
    .invoice-preview-card {
        box-shadow: 2px 2px 2px black;
        border: solid .5px black;
        padding: 5px;
        text-align: left;
        margin: 0 auto;
        cursor: pointer;
    }
    
    .invoice-preview-card .preview-container {
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }

    .customer-details h5 {
        margin-top: 5px;
        margin-bottom: 0px;
    }

    @media (min-width: 500px) {
        .invoice-preview-card {
            width: 480px;
        }
    }
</style>