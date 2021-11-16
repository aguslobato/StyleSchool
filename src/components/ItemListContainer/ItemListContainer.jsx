 import React, { useEffect, useState } from "react";
 import  GetFechList  from "../Services/GetFechList.jsx";
 import { ItemList } from '../ItemList/ItemList'
 import { useParams } from "react-router";

 const ItemListContainer = () => {

     const [product, setProduct] = useState([])
     const {categoryId} = useParams()

     useEffect(() => {
         if (categoryId) {
             GetFechList
             .then(response => {        
                 setProduct(response.filter(prod => prod.category === categoryId))
            })
        }
      
         else {
             GetFechList
             .then(response => {        
                 setProduct(response)
            })
        }
    },[categoryId])

     return (
         <> 
             <ItemList product={product} />
         </>/*Ahorra divs.... lo explica el profe en el after/ no olvidar!*/
    );
}
 export default ItemListContainer
