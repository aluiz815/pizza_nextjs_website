// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)
import product1 from '../../src/assets/product-1.jpg';
import product2 from '../../src/assets/product-2.jpg';
import product3 from '../../src/assets/product-3.jpg';

import sweet1 from '../../src/assets/sweet-1.jpg';
import sweet2 from '../../src/assets/sweet-2.jpg';
import sweet3 from '../../src/assets/sweet-3.jpg';
export default  (req, res) => {
  await cors(req, res)
  res.statusCode = 200
  const products1 = [
    {
      img:product1,
      alt:'Pizza',
      name:'Supreme Pizza',
      desc: 'Marinara sauce, basil,italian sausage,roma tomatoes, olives, and pesto',
      price: 'R$50.00',
      button: 'Adicionar Ao Carrinho'
    },
    {
      img:product2,
      alt:'Pizza',
      name:'Hawaiian Pizza',
      desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 'R$60.00',
      button: 'Adicionar Ao Carrinho'
    },
    {
      img:product3,
      alt:'Pizza',
      name:'Veggie Overload',
      desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 'R$75.00',
      button: 'Adicionar Ao Carrinho'
    }
  ]
  const products2 = [
    {
      img:sweet2,
      alt:'Donuts',
      name:'Doughlicious',
      desc: 'Donuts de Chocolate belga com chocolates por cima',
      price: 'R$10.00',
      button: 'Adicionar Ao Carrinho'
    },
    {
      img:sweet3,
      alt:'Ice Cream',
      name:'Sorvete De Caramelo',
      desc: 'Sorvete de baunilha com cobertura de caramelo',
      price: 'R$13.00',
      button: 'Adicionar Ao Carrinho'
    },
    {
      img:sweet1,
      alt:'Brownie',
      name:'Brownie Bunch',
      desc: 'Brownie com pedacos de chocolate incrivel',
      price: 'R$10.00',
      button: 'Adicionar Ao Carrinho'
    }
  ]
  res.json({products1,products2})
}
