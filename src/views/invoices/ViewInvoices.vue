<template>
    <div id="view-invoices-container">
        <invoice-preview-card v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" @click="$router.push('/invoices/' + invoice.id)"></invoice-preview-card>
    </div>
</template>

<script>
import InvoicePreviewCard from './InvoicePreviewCard.vue'

// Strictly for testing
import invoices from '../../data/invoices'

export default {
    components: {
        InvoicePreviewCard
    },
    data() {
        return {
            invoices: invoices
        }
    }
}
    
</script>

<style>
    #view-invoices-container {
        width: 95%;
        margin: 20px auto;
        padding: 25px;
    }
</style>