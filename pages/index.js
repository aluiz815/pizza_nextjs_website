import Feature from '../src/components/Feature';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Products from '../src/components/Products';
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
