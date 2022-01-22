import axios from "axios";

const SELLER_API_URL = "http://localhost:8762/seller"
const BUYER_API_URL = "http://localhost:8763/buyer"

class Service{

    // ============================SELLER_APIS==============================

    sellerRegister(sellerData){
        return axios.post(SELLER_API_URL+'/register',sellerData)
    }

    sellerLogin(login){
        return axios.post(SELLER_API_URL+'/login',login)
    }

    loggedSeller(){
        const store = JSON.parse(localStorage.getItem('SellerCredentials'))
        const authAxios = axios.create({baseURL:SELLER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.get('/loggedSeller')
    }

    sellerLogout(){
        const store = JSON.parse(localStorage.getItem('SellerCredentials'))
        const authAxios = axios.create({baseURL:SELLER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.post('/logout')
    }    

    sellerUpdateAccount(sellerData){
        const store = JSON.parse(localStorage.getItem('SellerCredentials'))
        const authAxios = axios.create({baseURL:SELLER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.put('/update',sellerData)
    }

    addProductSeller(formData){
        const store = JSON.parse(localStorage.getItem('SellerCredentials'))
        const authAxios = axios.create({baseURL:SELLER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.post('/addProduct',formData)
    }

    deleteProduct(proName){
        const store = JSON.parse(localStorage.getItem('SellerCredentials'))
        const authAxios = axios.create({baseURL:SELLER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.delete(`/delete/${proName}/${store.email}`)
    }

    myProducts(){
        const store = JSON.parse(localStorage.getItem('SellerCredentials'))
        const authAxios = axios.create({baseURL:SELLER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.get('/myProducts')
    }

    getAllProducts(){
        return axios.get(SELLER_API_URL+'/allProducts')
    }

    getProByName(name){
        return axios.get(SELLER_API_URL+`/productsByName/${name}`)
    }



    // ============================BUYER_APIS==============================

    registerBuyer(buyerData){
        return axios.post(BUYER_API_URL+'/register',buyerData)
    }

    buyerLogin(login){
        return axios.post(BUYER_API_URL+'/login',login)
    }

    loggedBuyer(){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.get('/loggedBuyer')
    }

    buyerLogout(){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.post('/logout')
    }

    updateBuyerAccount(updateData){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.put('/update',updateData)
    }

    getBuyerCart(){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.get('/cart')
    }

    buyerCheckout(){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.get('/checkout')
    }

    addProductToCart(proName,selEmail){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.put(`/addToCart/${proName}/${selEmail}`)
    }

    removeProFromCart(proName,selEmail){
        const store = JSON.parse(localStorage.getItem('BuyerCredentials'))
        const authAxios = axios.create({baseURL:BUYER_API_URL,headers:{Email:`${store.email}`,Authorization:`${store.token}`}})
        return authAxios.put(`/delFromCart/${proName}/${selEmail}`)
    }

}

export default new Service();
