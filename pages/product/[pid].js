import React from 'react';
import ProductView from '../../components/ProductView/ProductView';
import { useRouter } from 'next/router'
import { initializeStore } from '../../store/store'
import { products } from '../../config/config';

const index = (props) => {

  const router = useRouter()
  const { pid } = router.query
  return <ProductView product={products.find(prod => prod.id === pid)} />;
};

export function getServerSideProps() {
  const reduxStore = initializeStore()

  return { props: { initialReduxState: reduxStore.getState() } }
}

export default index;
