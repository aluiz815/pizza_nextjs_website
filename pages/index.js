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
      appId: "ae1ed497-4cd1-43fb-bfbd-d7b633bbe410",
      safari_web_id: "web.onesignal.auto.56640081-e0ac-44c5-9d26-db4b2624f604",
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true
    });
      OneSignal.on('subscriptionChange', function (isSubscribed) {
        if(isSubscribed) {
          OneSignal.getUserId(async function(userId) {
            await axios.post('https://webpush-andre.herokuapp.com/store/user',{
                DEKEY:"5F880AFC-20EB-4C0E-91FA-F91028D6D5D5",
                items:[{
                  player_id:userId
                }]
              })
           });

           if(isSubscribed && logged) {
            OneSignal.getUserId(async function(userId) {
              await axios.put(`https://webpush-andre.herokuapp.com/update/user/${userId}`,{
                DEKEY:"5F880AFC-20EB-4C0E-91FA-F91028D6D5D5",
                values:{
                  email:'teste@teste.com'
                }
              }) 
              });              
           }
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
