// Trade class to handle trade form data

class Trade {
    constructor(trade_id, symbol, direction, market, entryPrice, exitPrice, quantity, notes, date) {
        this.trade_id = trade_id;
        this.symbol = symbol;
        this.direction = direction;
        this.market = market;
        this.entryPrice = entryPrice;
        this.exitPrice = exitPrice;
        this.quantity = quantity;
        this.notes = notes;
        this.date = date;
    }
}
        