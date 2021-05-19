import { Product } from "./Models/Product.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  products = {
    doritos: new Product('doritos', .75, 'https://pngimg.com/uploads/doritos/doritos_PNG5.png'),
    cheetos: new Product('cheetos', .75, './assets/img/cheetos.png'),
    fritos: new Product('fritos', .75, 'https://www.fritolay.com/sites/fritolay.com/files/fritos-original.png'),
    coke: new Product('coke', 1, 'https://pngimg.com/uploads/cocacola/cocacola_PNG21.png'),
    drpepper: new Product('drpepper', 1, 'https://www.drpepper.com/images/featured/drpepper.png'),
    mtndew: new Product('mtndew', 1, 'https://www.mountaindew.com/wp-content/uploads/2019/02/mtndew-original-bottle.png'),
    cookie: new Product('cookies', 1.5, 'https://www.fritolay.com/sites/fritolay.com/files/2019-08/grandmas-homestyle-chocolate-chip.png'),
    poptart: new Product('poptart', 1.5, './assets/img/poptart.png')

  }
  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
