import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import CartReducer from '../store/reducers/cart';
import UIReducer from '../store/reducers/UI';
import '../styles/globals.css';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const rootReducer = combineReducers({
  prdCart: CartReducer,
  ui:  UIReducer
});

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
