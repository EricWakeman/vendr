import ProductsController from "./Controllers/ProductsController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { ProxyState } from "./AppState.js"
import { MoneyController } from "./Controllers/MoneyController.js";

class App {
  valuesController = new ValuesController();
  productsController = new ProductsController();
  moneyController = new MoneyController();
}

console.log(ProxyState)

window["app"] = new App();
