
export class goldPriceGenerator {
    constructor(start = 3500) {
        this.price = start,
        this.trend = 0
    }

    nextPrice() {
        this.trend += (Math.random() - 0.5) * 0.02
        console.log(this.trend)
        const change = (this.trend + (Math.random() - 0.05)) * 2
        console.log(change)

        this.price += change

        if(this.price < 1000) this.price = 1000

        return this.price
    }
}