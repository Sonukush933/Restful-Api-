import axios from "axios"

export const getProduct = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
    
} 


export const getSingleProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
}