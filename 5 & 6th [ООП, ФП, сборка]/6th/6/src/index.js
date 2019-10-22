import axios from 'axios'

import { ProductItem } from './product-item'
import { MeatStuff } from './meat'
import { EggStuff } from './eggs'
import { BreadStuff } from './bread'

import totalWeight from './total-weight'
import style from './style.css'

axios({
    method: 'get',
    url: '/api/list'
})
    .then((response) => {
        const list = response.data.map(function(item) {
            switch(item) {
                case this.title == 'Мясо':
                    new MeatStuff(item);
                    break;
                case this.title == 'Яйца':
                    new EggStuff(item);
                    break;
                case this.title == 'Хлеб':
                    new BreadStuff(item);
                    break;
                default:
                    new ProductItem(item);
            }
        });
        return Promise.resolve(list)
    })
    .then((list) => {
        // Работа со списком параметров корзины
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        // Суммарный вес потребительской корзины
        statisticsNode.innerHTML = `<dt>Суммарный вес корзины</dt>` +
            `<dd class=${style.term}>${totalWeight(list)} кг</dd>` +
            `<dt>Стоимости каждого наименования</dt>` +
            // TODO: перенести в парсеры и сделать в виде ФП
            `<dd class=${style.term}>${list.map(({ title, costsPerItem }) => `${title} - ${costsPerItem}`).join(', ')}</dd>`
        document.body.appendChild(statisticsNode)

        if (title == 'Хлеб') {
            bred.innerHTML = `<button onclick="this.SliceBread()">Нарезать хлеб</button>` + `<button onclick="this.EatBread()">Съесть хлеб</button>`
            document.body.appendChild(bred)
        }
    })
    .catch(() => {
        document.body.innerHTML = 'Сервис недоступен!'
    })


