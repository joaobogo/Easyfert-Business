export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [             
    {
      name: 'orders'    ,
      title: 'orders',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
        name: 'password',
        title: 'Password',
        type: 'string',
    },

  ],
}
