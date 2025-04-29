import StorageInterface from "../interfaces/storageInter.js";

class indexDBStorage extends StorageInterface {

  constructor() {
    super();
  }

  async addTrade(tradeData) {
    try {
      const db = await this.openDB();
      const tx = db.transaction("trades", "readwrite");
      const store = tx.objectStore("trades");
      const result = await store.add(tradeData);
      return result;
    } catch (error) {
      console.error("Error adding trade:", error);
      throw error;
    }
  }

  async loadTrade() {
    try {
      const db = await this.openDB();
      const tx = db.transaction("trades", "readonly");
      const store = tx.objectStore("trades");
      const result = await store.getAll();
      return result;
    } catch (error) {
      console.error("Error loading trades:", error);
      throw error;
    }
  }

  async updateTrade(tradeData) {
    try {
      const db = await this.openDB();
      const tx = db.transaction("trades", "readwrite");
      const store = tx.objectStore("trades");
      const result = await store.put(tradeData);
      return result;
    } catch (error) {
      console.error("Error updating trade:", error);
      throw error;
    }
  }

  async deleteTrade(tradeId) {
    try {
      const db = await this.openDB();
      const tx = db.transaction("trades", "readwrite");
      const store = tx.objectStore("trades");
      const result = await store.delete(tradeId);
      return result;
    } catch (error) {
      console.error("Error deleting trade:", error);
      throw error;
    }
  }
    
  async openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("tradeDB", 1);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("trades")) {
          db.createObjectStore("trades", { keyPath: "trade_id" });
        }
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }
}


export default indexDBStorage;
   