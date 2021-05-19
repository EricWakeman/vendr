import { ProxyState } from "../AppState.js"
import { productService } from "../Services/ProductsService.js"


function _drawProducts() {
    let template = ''


    Object.values(ProxyState.products).forEach(product => {
        template += /*html*/ `

        <span>
            <img class="purchaseable" src="${product.img}">
            <h6>${product.name}</h6> 
            <div class = "btn btn-warning buy" onclick="app.productsController.buyProduct('${product.name}')"> BUY ME - Price: $${product.price}</div>
        </span>
            
        `
    }
    )
    document.getElementById('vending-machine').innerHTML = template
}







export default class ProductsController {

    constructor() {
        console.log('hello product')
        ProxyState.on('products', _drawProducts)
        _drawProducts()
    }

    buyProduct(productName) {
        productService.runBuyProduct(productName)
    }

}