 import React, { useEffect, useState } from "react";
 import ItemDetail from '../ItemDetail/ItemDetail'
 import { useParams } from "react-router";
 import { GetFechFirebase } from "../Services/GetFechFirebase.jsx";
 const ItemDetailContainer = () => {

   const [itemDetail, setProduct] = useState([])
   const {productId} = useParams()
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const dataBase = GetFechFirebase()

     const dataBaseQuery = dataBase.collection("items").doc(productId).get()

     dataBaseQuery
     .then(item => setProduct({id:item.id, ...item.data()}))
     .catch (error => alert("Error:", error))
     .finally(()=> setLoading(false))
  },[productId])   

   return (
     <div className="DetallesLibro">
       {loading
        ? <h2 className="LoadingTitulo">El detalle del producto se esta cargando</h2>
        : <ItemDetail itemDetail={itemDetail}/>
       }
     </div>
  )
}
 export default ItemDetailContainer