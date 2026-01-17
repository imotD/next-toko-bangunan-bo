

import { useInventoryListViewModel } from "@/features/inventory/useInventoryListViewModel";
import { useInvoiceListViewModel } from "@/features/invoice/useInvoiceListViewModel";
import { DashboardSummary } from "./dashboard.model";

export function useDashboardViewModel(): DashboardSummary {
  const inventoryVM = useInventoryListViewModel();
  const invoiceVM = useInvoiceListViewModel();

  return {
    totalItem: inventoryVM.items.length,
    lowStock: inventoryVM.getLowStockCount(),
    unpaidInvoice: invoiceVM.getUnpaidCount(),
  };
}
