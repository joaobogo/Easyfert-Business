export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [             
      {
        name: 'title'    ,
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
        type: 'blockContent',
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
   
  
    ],
  }
  