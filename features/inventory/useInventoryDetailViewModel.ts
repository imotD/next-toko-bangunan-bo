import { InventoryItem } from "./inventory.model";

export function useInventoryDetailViewModel(id: string | string[] | undefined) {
  const inventory: InventoryItem = {
    id: Number(id),
    name: "Bata Merah",
    stock: 100,
    description: "Bata merah berkualitas tinggi",
  };

  return {
    inventory,
  };
}
