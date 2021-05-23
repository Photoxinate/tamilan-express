import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider as AuthProvider } from 'next-auth/client';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
// Import Swiper styles
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import Layout from '../hoc/Layout/Layout';
import { useStore } from '../store/store';
import { LiveChatLoaderProvider } from 'react-live-chat-loader';
import '../styles/globals.css';



const paypalInitialOptions = {
  // "client-id": "AQReEd8nU21jcTrjIBpnMWucHSjFX8Adf9CrXull6QaprE7_xc5CGej-LFvgEJKILvaW1tZ6b0zRGcd0",
  "client-id": "AWSeXUSMxbwnoWXvPS1XjDH1lbd0IgglkOW4tRbyJ6e3r6vhjQ8EUOa-SVYL_rhWtBDu2C-tuQuobwWZ",
  currency: "CAD",
  "buyer-country": "CA"
}

const  MyApp = ({ Component, pageProps }) => {

  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <AuthProvider session={pageProps.session}>
        <ToastProvider autoDismiss autoDismissTimeout={10000} placement='bottom-left'>
          <PayPalScriptProvider options={paypalInitialOptions} >
            <LiveChatLoaderProvider provider='messenger' providerKey='193409722177221' color='#F93800' themeCOlor='#F93800'>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LiveChatLoaderProvider>
          </PayPalScriptProvider>
        </ToastProvider>
      </AuthProvider>
    </Provider>
  );
}


export default MyApp;
