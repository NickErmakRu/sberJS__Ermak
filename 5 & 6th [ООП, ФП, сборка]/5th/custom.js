//let counter = {
//    count: 0,
//    add() {
//        this.count++;
//        console.log(this.count);
//    }
//}
//
////counter.add();
//
//let clock = {
////    count: 0,
//    ticktock() {
////        setInterval(() => {
////            this.add();
////            console.log(counter);
////            console.log(clock);
////        }, 1000);
//        setInterval(() => this.add.call(counter), 1000);
//    }
//}
//
//Object.setPrototypeOf(clock, counter);
//
//clock.ticktock();
//
//counter.count = 3600;


class Counter {
    
    static count;
    // также заменили this на Counter, чтобы изменения были и в clock, и в counter
    
    constructor(count) {
        Counter.count = count;
    }
    
    add(){
        Counter.count++;
        console.log(Counter.count);
    }
}


class Clock extends Counter {
    ticktock(){
        setInterval(() => this.add(), 1000);
    }
}

let counter = new Counter(3600);
let clock = new Clock(3600);

clock.ticktock();





