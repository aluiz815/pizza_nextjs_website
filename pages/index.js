import { useEffect } from 'react';
import Feature from '../src/components/Feature';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Products from '../src/components/Products';
import axios from 'axios'
export default function Home() {
  useEffect(()=>{
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function () {
      OneSignal.init({
        appId: "ae1ed497-4cd1-43fb-bfbd-d7b633bbe410",
        safari_web_id: "web.onesignal.auto.4c35e1cb-920a-4e68-be7d-eea8363a1cf4",
          notifyButton: {
              enable: true,
          },
          allowLocalhostAsSecureOrigin: true,
      });
      OneSignal.on('subscriptionChange', function (isSubscribed) {
        if(isSubscribed) {
          OneSignal.getUserId(async function(userId) {
            const response = await axios.post('https://fe35117170640474711472.pub.s10.sfmc-content.com/voxfui0ystv',{
              DEKEY:"DEFBCFB5-2E7A-4A40-A4EF-F660B86B04A5",
              items:[{
                player_id:userId
              }]
            })
           });
        }
      });
  });
  return () => {
      window.OneSignal = undefined;
  };
  },[])
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
