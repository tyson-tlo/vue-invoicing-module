<template>
    <div class="create-invoice-container">
        <div class="create-invoice-card">
            <h2 class="text-center">Create an Invoice</h2>

            <hr>

            <div class="flex-row">
                <div class="w-50">
                    <customer-form :customer="customer" v-if="visible.editCustomer" v-on:updateCustomer="updateCustomer"></customer-form>
                    <customer-details :customer="customer" v-if="!visible.editCustomer" :editCustomer="editCustomer"></customer-details>
                </div>
                <div class="text-end ms-auto">
                    <h5>Company Business</h5>
                    <h5>123 Capital Square</h5>
                    <h5>Edmonton, AB</h5>
                    <h5>E4R-5T6</h5>
                    <h5>Canada</h5>
                </div>
            </div>

            <hr>

            <items-header-row />
            
            <added-item-row 
                v-for="(item, i) in items" 
                :key="i" :item="item" 
                v-on:removeItem="removeItem"
                v-on:editItem="editItem" />
            
            <button class="btn btn-outline-success btn-sm float-end mt-3" data-bs-toggle="modal" data-bs-target="#addItemModal"><strong>+</strong> Add Item</button>
            <base-modeltgf vvvvvvvvvvv></base-modeltgf>
            <add-item-modal v-on:saveItem="addItemToItems"></add-item-modal>

            <base-modal
                ref="editItemModal">
                <template #title>Edit Item</template>
                <template #content>
                    <edit-item-form :item="item" v-on:updateItem="updateItem"></edit-item-form>
                </template>                
            </base-modal>
            <!-- <edit-item-modal
            ref="editItemModal"
                :item="item"
                v-if="true"
                v-on:updateItem="updateItem" /> -->
            
        </div>
    </div>
</template>

<script>
import CustomerForm from './partials/CustomerForm.vue'
import CustomerDetails from './partials/CustomerDetails.vue'
import ItemsHeaderRow from './partials/ItemsHeaderRow.vue'
import AddedItemRow from './partials/AddedItemRow.vue'
import BaseModal from './partials/modals/BaseModal'
import EditItemForm from './partials/forms/EditItem.vue'

export default {
    components: {
        CustomerForm, CustomerDetails, ItemsHeaderRow, AddedItemRow, BaseModal, EditItemForm
    },
    mounted() {
        
    },
    data() {
        return {
            customer: {
                name: null,
                address: null,
                city: null,
                province: null,
                postal_code: null,
                country: null
            },
            items: [
                {
                    name: 'Programming Work',
                    unit_type: 'hours',
                    units: 5,
                    unit_cost: 45.00
                }
            ],
            item: null,
            visible: {
                editCustomer: false,
            }
        }
    },
    methods: {
        updateCustomer(data) {
            console.log(data)
            this.customer = data
            this.visible.editCustomer = false
        },
        editCustomer() {
            this.visible.editCustomer = true
        },
        addItemToItems(data) {
            console.log(data)
            this.items.push({...data})
        },
        removeItem(item) {
            let index = this.items.indexOf(item)
            console.log(index)
            this.items.splice(index, 1)
        },
        editItem(item) {
            this.item = item
            this.$refs.editItemModal.showModal()
        },
        updateItem(item) {
            let index = this.items.indexOf(this.item)
            this.items[index] = item
            this.$refs.editItemModal.hideModal()
        }
    }
}
</script>

<style scoped>
.create-invoice-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.create-invoice-card {
    padding: 10px;
    box-shadow: 0 2px 5px black;
    width: 90%;
    margin-left: 5%;
}

@media (min-width: 950px) {
    .create-invoice-card {
        width: 900px;
        margin: 0 auto;
    }
}

</style>