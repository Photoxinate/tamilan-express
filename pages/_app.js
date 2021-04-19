import { Provider as AuthProvider } from 'next-auth/client';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import Layout from '../components/Layout/Layout';
import { useStore } from '../store/store';
// Import Swiper styles
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import '../styles/globals.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const paypalInitialOptions = {
  "client-id": "AQReEd8nU21jcTrjIBpnMWucHSjFX8Adf9CrXull6QaprE7_xc5CGej-LFvgEJKILvaW1tZ6b0zRGcd0",
  currency: "CAD",
  "buyer-country": "CA"
}

const  MyApp = ({ Component, pageProps }) => {

  const store = useStore(pageProps.initialReduxState)

  console.log('[_app] rendered');
  
  return (
    <Provider store={store}>
      <AuthProvider session={pageProps.session}>
        <ToastProvider autoDismiss autoDismissTimeout={10000} placement='bottom-left'>
          <PayPalScriptProvider options={paypalInitialOptions} >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PayPalScriptProvider>
        </ToastProvider>
      </AuthProvider>
    </Provider>
  );
}


export default MyApp;
