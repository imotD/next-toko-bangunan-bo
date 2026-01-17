import MainLayout from "@/components/MainLayout";
import InventoryListView from "@/features/inventory/InventoryListView";
import { useInventoryListViewModel } from "@/features/inventory/useInventoryListViewModel";
import { withAuth } from "@/auth/withAuth";

function InventoryPage() {
    const vm = useInventoryListViewModel();

    return (
        <MainLayout>
            <InventoryListView
                items={vm.items}
                getStockStatus={vm.getStockStatus}
            />
        </MainLayout>
    );
}

export default withAuth(InventoryPage);

