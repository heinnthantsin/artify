import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData';
import FollowingList from '../components/card/FollowingList';

function Product() {
  TabTitle("Artify | Product");
  return (
    <div>
      <CardList itemList={productData} />
      <FollowingList itemList={productData} sectionTitle={"Recommended Product"} />
    </div>
  )
}

export default Product