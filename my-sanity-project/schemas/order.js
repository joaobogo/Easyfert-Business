export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [

        {      

            
            name: 'products',
            title: 'products',
            type: 'array',
            of: [{ type: 'string' }],
            
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'personal_data',
            title: 'Personal Data',
            type: 'string',
        },
        {
            name: 'mailing_type',
            title: 'Mailing Type',
            type: 'string',
        },
        {
            name: 'total_price',
            title: 'Total Price',
            type: 'number',
        },
        {
            name: 'payment_status',
            title: 'Payment Status',
            type: 'string',
        },
        {
            name: 'payment_type',
            title: 'Payment Type',
            type: 'string',
        },
        {
            name: 'payment_id',
            title: 'Payment ID',
            type: 'number',
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'mailing_status',
            title: 'Mailing Status',
            type: 'string',
        }
    ]
}