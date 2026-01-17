import MainLayout from "@/components/MainLayout";
import InvoiceListView from "@/features/invoice/InvoiceListView";
import { useInvoiceListViewModel } from "@/features/invoice/useInvoiceListViewModel";
import { withAuth } from "@/auth/withAuth";

function InvoicePage() {
    const vm = useInvoiceListViewModel();

    return (
        <MainLayout>
            <InvoiceListView invoices={vm.invoices} />
        </MainLayout>
    );
}

export default withAuth(InvoicePage);
