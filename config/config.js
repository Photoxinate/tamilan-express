const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://api.tamilanexpress.com/';

export const contact = {
  phone: {text: '+1-1001-234-5678', link: '+110012345678'},
  email: 'hello@tamilanexpress.com',
  address: '126, select ave - unit 3 scarborough on, m1v 3y6, ontario, canada.',
  openHours: {
    weekdays: 'Mon-Fri: 08:00 - 20:00',
    weekend: 'Mon-Fri: 08:00 - 20:00',
  },
};

export const social = {
  facebook: 'https://facebook.com/tamilanexpress',
  instagram: 'https://instagram.com/tamilanexpress',
  twitter: 'https://twitter.com/tamilanexpress',
}

export const products = [
  {
    _id: '6056fabd0d0e4f1a90ad463f',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா REAL',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 42,
    discount: 41,
  },
  {
    _id: '002',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 0,
  },
  {
    _id: '003',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://images.ctfassets.net/xuuihvmvy6c9/noJGw3I5yNiK2nJrQkN5W/f1bc273ad39fe467f384ef899029d7d4/Web_1920________26.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    _id: '004',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCzK_8A55qmn6ENtHjcw14SFLzH0DxdwWxQ&usqp=CAU',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    _id: '005',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://img2.pngio.com/nestle-milkmaid-96573-png-images-pngio-milkmaid-png-650_650.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    _id: '006',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://www.pngitem.com/pimgs/m/284-2843673_coffee-products-in-sri-lanka-hd-png-download.png',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    _id: '007',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://i.ebayimg.com/images/g/804AAOSwUuRgJZ1X/s-l500.jpg',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    _id: '008',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 40.50,
    discount: 40,
  },
  {
    _id: '009',
    category: 'Dairy and Milk',
    name: 'Anchor-400g-அங்கோர் பால் மா ',
    img: 'https://cdn2.webdamdb.com/md_IRLcaRTbLgZ1.png?1517915165',
    alt: 'anchor image',
    weight: '400g',
    maxQty: 10,
    qty: 1,
    tamil: '',
    price: 100,
    discount: 40,
  },
];

export const banners = [
  {
    src:
      '/images/1.jpg',
    alt: 'product image',
  },
  {
    src:
      '/images/2.jpg',
    alt: 'product image',
  },
  {
    src:
      '/images/3.jpg',
    alt: 'product image',
  },
  {
    src:
      '/images/4.jpg',
    alt: 'product image',
  },
];


export const productDescription = {
  desc:`t is a long established fact that a reader will be distracted by 
  the readable content of a page when looking at its layout. The point of 
  using Lorem Ipsum is that it has a more-or-less normal distribution of
   letters, as opposed to using 'Content here, content here', making it 
   look like readable English. Many desktop publishing packages and web 
   page editors now use Lorem Ipsum as their default model text, and a 
   search for 'lorem ipsum' will uncover many web sites still in their 
   infancy. Various versions have evolved over the years, sometimes by 
   accident, sometimes on purpose (injected humour and the like).`,

   warranty: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
   It has roots in a piece of classical Latin literature from 45 BC, making it 
   over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
   College in Virginia, looked up one of the more obscure Latin words, consectetur, 
   from a Lorem Ipsum passage, and going through the cites of the word in classical 
   literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
   1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
   (The Extremes of Good and Evil) by Cicero, written in 45 BC. `
}