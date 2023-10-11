const express = require('express');
const app = express();
const port = 80; // Choose a port for your server

const popularProducts = [
  {
    id: 1,
    img: 'https://i.ibb.co/cXFnLLV/3.png',
    price: '6000',
    type: 'PRODUCT'
  },
  {
    id: 2,
    img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
    price: '2000',
    type: 'PRODUCT'
  },
  {
    id: 3,
    img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
    price: '8000',
    type: 'PRODUCT'
  },
];

app.get('/api/products', (req, res) => {
  res.json(popularProducts);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
