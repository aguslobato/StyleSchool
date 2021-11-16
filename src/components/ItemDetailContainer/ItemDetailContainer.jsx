 import React, { useEffect, useState } from "react";
 import GetFechDetail  from "../Services/GetFechDetail.jsx";
 import ItemDetail from '../ItemDetail/ItemDetail'
 import { useParams } from "react-router";

 const ItemDetailContainer = () => {

   const [itemDetail, setProduct] = useState([])
   const {productId} = useParams()

   useEffect(() => {
     GetFechDetail
     .then(response => {        
       setProduct(response.find((prod) => prod.id === parseInt(productId)));
    })
  },[productId])   

   return (
     <div className="DetallesLibro">
       <ItemDetail itemDetail={itemDetail}/>
     </div>
  )
}
 export default ItemDetailContainer