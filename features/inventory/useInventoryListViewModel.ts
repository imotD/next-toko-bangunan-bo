import { InventoryItem } from "./inventory.model";
import { inventoryData } from "@/data/inventory.data";

const LOW_STOCK_THRESHOLD = 10;

export function useInventoryListViewModel() {
  const items: InventoryItem[] = inventoryData;

  function getStockStatus(stock: number) {
    return stock < LOW_STOCK_THRESHOLD ? "LOW" : "OK";
  }

  function getLowStockCount() {
    return items.filter(item => item.stock < LOW_STOCK_THRESHOLD).length;
  }

  return {
    items,
    getStockStatus,
    getLowStockCount
  }
}   
