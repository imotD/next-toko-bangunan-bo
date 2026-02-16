import MainLayout from "@/components/MainLayout";
import InventoryDetailView from "@/features/inventory/InventoryDetailView";
import { useInventoryDetailViewModel } from "@/features/inventory/useInventoryDetailViewModel";
import { useRouter } from "next/router";
import { withAuth } from "@/auth/withAuth";

function InventoryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const vm = useInventoryDetailViewModel(id);

  return (
    <MainLayout>
      <InventoryDetailView inventory={vm.inventory} />
    </MainLayout>
  );
}

export default withAuth(InventoryDetailPage);
