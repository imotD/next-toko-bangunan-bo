import { InventoryItem } from "./inventory.model";

export function useInventoryDetailViewModel(id: string | string[] | undefined) {
  const inventory: InventoryItem = {
    id: Number(id),
    name: "Bata Merah",
    stock: 100,
    description:
      "Semen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem Semen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem Semen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem Semen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem Semen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem",
  };

  return {
    inventory,
  };
}
