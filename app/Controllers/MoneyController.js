import { ProxyState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";


function _drawMoney() {
    let currentMoney = ProxyState.money
    let moneyTemplate = /*html*/`
    <div class = "card">
        <div class="card-body text-center">
        <span>$${currentMoney}</span>
        <div class="btn btn-lrg btn-primary" onclick="app.moneyController.addMoney()">Add Quarter<div>
        </div>
    </div>`

    document.getElementById('counter').innerHTML = moneyTemplate
}

export class MoneyController {
    constructor() {
        ProxyState.on('money', _drawMoney)
        _drawMoney()
    }

    addMoney() {
        moneyService.addMoney()
    }
}