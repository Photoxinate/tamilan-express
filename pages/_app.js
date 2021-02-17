import Layout from '../components/Layout/Layout';
import { Provider } from 'next-auth/client';

import '../styles/globals.css';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../components/ProductCarousel/ProductCarousel.css';

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
