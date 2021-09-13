import { useEffect } from 'react';
import Feature from '../src/components/Feature';
import Footer from '../src/components/Footer';
import Hero from '../src/components/Hero';
import Products from '../src/components/Products';
import axios from 'axios'
export default function Home() {
  const logged = false

  useEffect(()=>{
    
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
    function bindEvent(element, eventName, eventHandler) {
      element.addEventListener(eventName, eventHandler, false);
    }
    var iframeSource = 'https://andredeveloper.com.br';
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', iframeSource);
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    bindEvent(window, 'message', function (e) {
        console.log(`received message: ${e.data} from ${iframeSource}`);
      if (e.origin !== "https://andredeveloper.com.br") {
        // ignore messages from anywhere except where we expect
        return
      }
        if (e.data === false){
            console.log("user not subscribed to mainsite, let's prompt")
            //Option 1 - Prompt the user for this page
            OneSignal.showNativePrompt();
            //Option 2 - Open a window or tab to main site
            //window.open("https://andredeveloper.com.br", "_blank", "width=400,height=400")
        } else {
          OneSignal.setSubscription(false);
        }
    });
  });
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
