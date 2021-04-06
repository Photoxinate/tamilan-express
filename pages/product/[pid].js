import React from 'react';
import { useRouter } from 'next/router'
import { initializeStore } from '../../store/store'
import { productDescription, products } from '../../config/config';
import ProductDescription from '../../components/ProductView/ProductDescription/ProductDescription';
import ProductDetail from '../../components/ProductView/ProductDetail/ProductDetail';
import classes from './ProductView.module.scss';


const index = (props) => {

  const router = useRouter()
  const { pid } = router.query
  const product = products.find(prod => prod.id === pid)

  return (

    <>
      <div className={classes.productContainer}>
        <div className={classes.imgWrap}>
          <img src={product.img} alt={product.alt} />
        </div>
        <ProductDetail product={product} />
      </div>
      <ProductDescription
        description={productDescription.desc}
        warranty={productDescription.warranty}
      />
    </>

  )
};

export function getServerSideProps() {
  const reduxStore = initializeStore()

  return { props: { initialReduxState: reduxStore.getState() } }
}

export default index;
