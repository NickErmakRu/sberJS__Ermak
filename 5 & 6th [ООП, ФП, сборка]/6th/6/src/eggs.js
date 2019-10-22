import { ProductItem } from './product-item'

export class EggStuff extends ProductItem {

    constructor (item) {
        super(item);
        this.row = true;
        this.color = item.params.color;
    }

    cookEggs (count) {
        this.params.count = this.params.count - count;
        alert(`Ты сварил(а) ${count} штук`);
        this.row = false;
    }

    brakeEggs (count) {
        if (this.params.count >= count) {
            this.params.count = this.params.count - count;
            alert(`Ты разбил(а) ${count} штук!`);
        } else {
            this.params.count = 0;
            alert(`Ты разбил(а) ${this.params.count} штук, и ничего не осталось!`);
        }
    }

}