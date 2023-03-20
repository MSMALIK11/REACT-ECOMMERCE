import axios from 'axios'


export const getProducts=async()=>{
   try {
      const res= await axios.get('https://dummyjson.com/products')
  return res.data



   } catch (error) {
       console.log("error while callingpruduct api",error)
   }



}

export const getOneProduct=async(id)=>{
    try {
        const res=await axios.get(`https://dummyjson.com/products/${id}`)
        return res.data
    } catch (error) {
        console.log("error while calling single product api",error)

    }
}

export const getCartItem=async(id)=>{
    try {
        const res=await axios.get(`https://dummyjson.com/products/${id}`)
        return res.data
    } catch (error) {
        console.log("error while calling single product api",error)

    }
}