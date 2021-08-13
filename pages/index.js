import { useEffect } from 'react';
import Feature from '../src/components/Feature';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Products from '../src/components/Products';
import axios from 'axios'
export default function Home() {
  const logged = false

  useEffect(()=>{
    async function startOneSignal() {
      window.OneSignal = await window.OneSignal || [];
  OneSignal.push(function () {
    OneSignal.init({
      appId: "73c47d45-3a7a-49cf-8cd8-1be2a91af6d1",
      safari_web_id: "web.onesignal.auto.56640081-e0ac-44c5-9d26-db4b2624f604",
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true
    });
      OneSignal.on('subscriptionChange', function (isSubscribed) {
        if(isSubscribed) {
          OneSignal.getUserId(async function(userId) {
            if(logged) {
              await axios.put(`https://webpush-andre.herokuapp.com/update/user/${userId}`,{
                DEKEY:"82C69E04-1E05-4466-992C-DFDC08697DF8",
                values:{
                  email:'teste@teste.com'
                }
              })
            } else {
              await axios.post('https://webpush-andre.herokuapp.com/store/user',{
                DEKEY:"82C69E04-1E05-4466-992C-DFDC08697DF8",
                items:[{
                  player_id:userId
                }]
              })
            }
           });
        }
      });
  });
  return () => {
      window.OneSignal = undefined;
  };
    }
    startOneSignal();
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
