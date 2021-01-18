export default {
    store(id, customer, items) {
        let invoices = localStorage.getItem('invoices')

        if (invoices) {
            invoices = JSON.parse(invoices)
        } else {
            invoices = []
        }

        invoices.push({id: id, customer: customer, items: items, payment: {status: 'outstanding'}})

        localStorage.setItem('invoices', JSON.stringify(invoices))
    },
    getInvoiceById(id) {
        return new Promise( (resolve, reject) => {
            let invoices = localStorage.getItem('invoices')

            if (!invoices) {
                reject({status: 404, message: "Unable to retrieve invoice as no invoices have been created"})
            }

            if (invoices) {
                let invs = JSON.parse(invoices)

                let invoice = invs.find( inv => inv.id === id)

                if (!invoice) {
                    reject({status: 404, message: "Invoice not found"})
                } 
                
                resolve({data: invoice})
            }
        })
    },
    update(id, customer, items) {
        return new Promise((resolve, reject) => {
            let invoices = localStorage.getItem('invoices')

            if (!invoices) {
                return reject({status: 404, message: "Invoice not found!"})
            }

            invoices = JSON.parse(invoices)

            let index = invoices.findIndex( inv => inv.id === id)

            if (!index) {
                return reject({status: 404, messages: "Invoice not found!"})
            }

            invoices[index].customer = customer
            invoices[index].items = items

            localStorage.setItem('invoices', JSON.stringify(invoices))

            return resolve({status: 200, message: "Successfully updated invoice!"})
        })
    }
}