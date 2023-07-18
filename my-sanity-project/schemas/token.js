export default {
    name: 'token',
    title: 'Token',
    type: 'document',
    fields: [
        {
            name: 'access_token',
            title: 'Access Token',
            type: 'string',
        },
        {
            name: 'refresh_token',
            title: 'Refresh Token',
            type: 'string',
        },
        {
            name: 'expires_in',
            title: 'Expires In',
            type: 'number',
        },
    ]
}