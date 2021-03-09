import { Provider as AuthProvider } from 'next-auth/client';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { useStore } from '../store/store';


// Import Swiper styles
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

import '../styles/globals.css';

const  MyApp = ({ Component, pageProps }) => {

  const store = useStore(pageProps.initialReduxState)

  console.log('[_app] rendered');
  
  return (
    <Provider store={store}>
      <AuthProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}


export default MyApp;
