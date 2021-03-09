import React from 'react';
import { initializeStore } from '../../store/store';
import { useSelector } from 'react-redux'
import CartTable from '../../components/CartTable/CartTable';
import SubTotal from '../../components/SubTotal/SubTotal';
import classes from './index.module.scss';

const index = (props) => {

  const cartProducts = useSelector(state => state.prdCart.products)


  if (cartProducts === undefined || cartProducts.length === 0) {
    return <div>No item Added, Start Shopping</div>;
  } else {
    return (
      <div className={classes.wrap}>
        <div className={classes.colCart}>
          <CartTable />
        </div>
        <div className={classes.colSub}>
          <SubTotal />
        </div>
      </div>
    );
  }
};

// export function getServerSideProps() {

//   const initialState = {
//     prdCart: { products: [] },
//         ui: {
//           isShowModal: false,
//           modalProduct: null,
//         },
//   }
//   const reduxStore = initializeStore()
//   const { dispatch } = reduxStore

//   return { props: { initialReduxState: reduxStore.getState() } }
// }


export default index;
