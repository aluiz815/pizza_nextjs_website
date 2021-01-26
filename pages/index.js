import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';
export default function Home() {
  return (
    <>
      <Hero/>
      <Products heading="Escolha seu Sabor Favorito"/>
      <Feature/>
      <Products heading="Doçes Para Você"/>
      <Footer/>
    </>
  )
}
