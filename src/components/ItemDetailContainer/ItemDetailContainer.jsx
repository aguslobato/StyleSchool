import React, { useEffect, useState } from "react";
import GetFetchDetail  from "../Services/GetFechDetail.jsx";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router";


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])

  const {productId} = useParams()

  useEffect(() => {
      GetFetchDetail
      .then(response => {        
        setProduct(response.find((prod) => prod.id === parseInt(productId)));
      })
  },[productId])   

  
  return (
     <div className="DetallesLibro">
         <ItemDetail product={product}/>
       </div>
  )
}

export default ItemDetailContainer