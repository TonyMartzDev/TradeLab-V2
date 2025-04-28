// Storage Interface

class StorageInterface {
    async addTrade(tradeData) {}
    async loadTrade() {}
    async updateTrade(tradeData) {}
    async deleteTrade(tradeId) {}
}

export default StorageInterface;
