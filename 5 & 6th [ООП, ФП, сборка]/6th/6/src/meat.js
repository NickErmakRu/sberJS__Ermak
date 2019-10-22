import { ProductItem } from './product-item'

export class MeatStuff extends ProductItem {

    constructor (item) {
        super(item);
        this.row = true;
        this.color = this.params.color;
    }

    cookMeat () {
        alert(`Теперь ${this.title} можно есть!`);
        this.row = false;
        this.params.color = 'Коричневый';
    }

    eatMeet () {
        if ((this.row == false) && (this.params.count > 0)) {
            this.params.count--;
            alert('Приятного аппетита!');
        } else {
            alert('Что-то не так!');
        }
    }

}