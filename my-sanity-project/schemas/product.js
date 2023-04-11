export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [

        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: { hotspot: true }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        }
    ]
}