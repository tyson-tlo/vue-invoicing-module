export default [
    {
        id: 'AX456ED2FGtyuH',
        customer: {
            name: 'Tyson London',
            address: '27 Road Street',
            city: 'No City',
            province: 'Alberta',
            postal_code: 'T6Y-7U8',
            country: 'Canada'
        },
        items: [
            {
                name: 'Programming Work',
                unit_type: 'hours',
                units: 5,
                unit_cost: 45.00
            },
            {
                name: 'Hosting',
                unit_type: 'months',
                units: 1,
                unit_cost: 90.00
            },
            {
                name: 'Domain Purchase',
                unit_type: 'domains',
                units: 2,
                unit_cost: 25.00
            }
        ],
        payment: {
            due_date: 1621900800, // As unix time stamp UTC
            status: 'outstanding',
            paid_date: null
        }        
    }
]