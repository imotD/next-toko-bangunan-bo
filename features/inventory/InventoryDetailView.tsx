import { InventoryItem } from "./inventory.model";

type Props = {
  inventory: InventoryItem;
};

export default function InventoryDetailView({ inventory }: Props) {
  return (
    <div>
      <h1>Inventory Detail</h1>
    </div>
  );
}
