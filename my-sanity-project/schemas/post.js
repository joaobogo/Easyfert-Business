export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'published_at',
      title: 'Data de Publicação',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    },
    {
      name: 'external_link',
      title: 'Link Externo',
      type: 'string',
    },
  ],
}
