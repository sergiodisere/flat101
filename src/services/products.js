
const baseURL = "http://localhost:8080/products"

export const getProductsByPageAndLimit = (page, numMaxProductsScreen) => {
    
    let products = null;
    let totalProducts = null;
    return fetch(baseURL+'?_page=' + page + '&_limit=' + numMaxProductsScreen)
      .then(res => {
        totalProducts = (res.headers.get("X-total-count"))
        return res.json()
      })
      .then(result => {  
          return {
              products: result,
              totalProducts
          }
          //setListProducts(result); setDataDisplay(result) 
        })
      .catch((error) => console.log(error))
}
