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
  facebook: 'https://www.facebook.com/Tamilan-Express-193409722177221',
  instagram: 'https://instagram.com/tamilanexpress',
  twitter: 'https://twitter.com/tamilanexpress',
}

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