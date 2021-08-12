import { useEffect } from 'react';
import Feature from '../src/components/Feature';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Products from '../src/components/Products';
import axios from 'axios'
export default function Home() {
  const logged = true

  useEffect(()=>{
    async function startOneSignal() {
      window.OneSignal = await window.OneSignal || [];
  OneSignal.push(function () {
    OneSignal.init({
      appId: "ae1ed497-4cd1-43fb-bfbd-d7b633bbe410",
      safari_web_id: "web.onesignal.auto.4c35e1cb-920a-4e68-be7d-eea8363a1cf4",
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
                  email:'teste2@teste.com'
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
