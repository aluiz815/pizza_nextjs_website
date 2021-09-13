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
    OneSignal.push(async function () {
    function bindEvent(element, eventName, eventHandler) {
      element.addEventListener(eventName, eventHandler, false);
    }
    var iframeSource = 'https://andredeveloper.com.br';
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', iframeSource);
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    await bindEvent(window, 'message', function (e) {
        console.log(`received message: ${e.data} from ${iframeSource}`);
      if (event.origin !== "https://andredeveloper.com.br") {
        // ignore messages from anywhere except where we expect
        return
      }
        if (e.data === false){
            console.log("user not subscribed to mainsite, let's prompt")
            //Option 1 - Prompt the user for this page
            OneSignal.showNativePrompt();
            //Option 2 - Open a window or tab to main site
            //window.open("https://mainsite.com", "_blank", "width=400,height=400")
        } else {
            console.log("user is subscribed to mainsite, lets unsubscribe from subdomain.site");
          OneSignal.setSubscription(false);
        }
    });
      OneSignal.on('subscriptionChange', function (isSubscribed) {
        if(isSubscribed) {
          OneSignal.getUserId(async function(userId) {
            await axios.post('https://webpush-ltm.herokuapp.com/store/user',{
                DEKEY:"08C1FE3F-5364-45AB-9C7C-18643ADAB436",
                items:JSON.stringify([{
                  player_id:userId
                }])
              })
           });

           if(isSubscribed && logged) {
            OneSignal.getUserId(async function(userId) {
              await axios.put(`https://webpush-ltm.herokuapp.com/update/user/${userId}`,{
                DEKEY:"08C1FE3F-5364-45AB-9C7C-18643ADAB436",
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
