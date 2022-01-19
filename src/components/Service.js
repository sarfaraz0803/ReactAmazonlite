import axios from "axios";

const SELLER_API_URL = "http://localhost:8762/seller"

class Service{

    // ============================Seller Api==============================

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

}

export default new Service();
