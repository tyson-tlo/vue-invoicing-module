<template>
    <div>
        <div class="invoice-container">
            <div class="title-container" v-if="invoice">
                <div v-if="invoice.customer">
                    <h3>{{ invoice.customer.name }}</h3>
                    <h4>{{ invoice.customer.address }}</h4>
                    <h4>{{ invoice.customer.city }}</h4>
                    <h4>{{ invoice.customer.province }}</h4>
                    <h4>{{ invoice.customer.postal_code }}</h4>
                    <h4>{{ invoice.customer.country }}</h4>
                </div>
                <div class="company-details">
                    <h3>Company Business</h3>
                    <h4>123 Business Street</h4>
                    <h4>Edmonton, AB</h4>
                    <h4>T5R-4E3</h4>
                    <h4>Canada</h4>
                </div>
            </div>

            <hr>
            <div v-if="invoice">
                <div class="item-display-container">
                    <div class="item-description">
                        <strong>Description</strong>
                    </div>
                    <div class="item-unit-cost">
                        <strong>Unit Cost</strong>
                    </div>
                    <div class="item-unit-totals">
                        <strong># of Units</strong>  
                    </div>
                    <div class="item-total">
                        <strong>Total</strong>
                    </div>        
                </div>            

                <invoice-item-row v-for="(item, i) in invoice.items" :key="i" :item="item"></invoice-item-row>

                <div class="summary">
                    <strong>Total: {{ invoice_total }}</strong>
                </div>
            </div>        
        </div>

        <div class="alert alert-green" v-if="paid">
            <h2>This invoice has been paid!</h2>
        </div>

        <div class="alert alert-orange" v-if="outstanding">
            <h2>This invoice is still outstanding!</h2>
        </div>
    </div>
    
</template>

<script>
import invoices from '../../data/invoices'

import InvoiceItemRow from './partials/InvoiceItemRow.vue'

export default {
    mounted() {
        this.getInvoice()
    },
    components: {
        InvoiceItemRow
    },
    data () {
        return {
            invoice: null
        }
    },
    methods: {
        getInvoice() {
            this.invoice = invoices.find( el => el.id === this.$route.params.invoice)
        }
    },
    computed: {
        invoice_total() {
            return this.invoice.items.reduce((a, b) => a + (b.unit_cost * b.units), 0).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            
        },
        paid() {
            if (this.invoice) {
                return this.invoice.payment.status === 'paid'
            }
            return false
        },
        outstanding() {
            if (this.invoice) {
                return this.invoice.payment.status === 'outstanding'
            }
            return false
        }
    }
}
</script>

<style scoped>
    .invoice-container {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        padding: 15px;
        box-shadow: 2px 2px 5px black;
        border: solid 1px black
    }

    .summary {
        width:20%;
        margin-left: 80%;
        margin-top: 25px;
    }

    @media (min-width: 950px) {
        .invoice-container {
            width: 900px;
            margin:20px auto;
        }

        .title-container {
            display: flex;
            justify-content: space-between;            
        }

        .title-container {
            text-align: left;
        }

        .title-container .company-details  {
            text-align: right
        }
    }
</style>