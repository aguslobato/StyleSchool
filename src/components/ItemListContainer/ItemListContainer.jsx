 import React, { useEffect, useState } from "react";
 import { ItemList } from '../ItemList/ItemList'
 import { useParams } from "react-router";
 import { GetFechFirebase } from "../Services/GetFechFirebase.jsx";
 import './ItemListContainer.css'

 const ItemListContainer = () => {

     const [product, setProduct] = useState([])
     const {categoryId} = useParams()
     const [loading, setLoading] = useState(true);

     useEffect(() => {

         const dataBase = GetFechFirebase() 
        
         if (categoryId) {
 
             const dataBaseQuery = dataBase.collection("items").where("category", "==", categoryId).get()
 
             dataBaseQuery
             .then(response => setProduct(response.docs.map(item => ({id:item.id, ...item.data()}))))
             .catch (error => alert("Error:", error))
             .finally(()=> setLoading(false))
        }

         else {

             const dataBaseQuery = dataBase.collection("items").orderBy("category").get()

             dataBaseQuery
             .then(response => setProduct(response.docs.map(item => ({id:item.id, ...item.data()}))))
             .catch (error => alert("Error:", error))
             .finally(()=> setLoading(false))
        } 
    },[categoryId])

     return (
         <div> 
             {loading
                 ? <h2 className="LoadingTitulo">Los productos se estan cargando...</h2>
                 :  <ItemList product={product} />
             }
         </div>
    );
}
 export default ItemListContainer
