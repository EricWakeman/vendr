import { ProxyState } from "../AppState.js"


class ProductsService {
    runBuyProduct(productName) {
        let product = ProxyState.products[productName]
        let purchaseTemplate = /*html*/ `
        <img src="${product.img}" alt="${product.name}">
        `
        if (!product) {
            throw new Error('Bad product name ' + productName)
        }
        if (ProxyState.money >= product.price) {
            ProxyState.money -= product.price
            document.getElementById("purchase").innerHTML = purchaseTemplate


        }
        else alert('You do not have enough money')

    }

}
export const productService = new ProductsService()