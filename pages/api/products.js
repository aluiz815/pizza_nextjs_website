// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';

export default (req, res) => {
  res.statusCode = 200
  const products = [
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
  res.json(products)
}
