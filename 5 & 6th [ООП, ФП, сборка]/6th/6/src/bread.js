import { ProductItem } from './product-item'

export class BreadStuff extends ProductItem {

    constructor (item) {
        super(item);
        this.color = this.params.color;
        this.slice = false;
    }

    SliceBread () {
        alert(`Хлеб порезан!`);
        this.slice = true;
    }

    eatBread () {
        if (this.slice == true) {
            alert(`Едим нарезанный хлеб`);
        } else {
            alert(`Едим не нарезанный хлеб...`);
        }
    }
}