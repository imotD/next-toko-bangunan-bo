import { useRouter } from "next/router";
import MainLayout from "@/components/MainLayout";
import InvoiceDetailView from "@/features/invoice/InvoiceDetailView";
import { useInvoiceDetailViewModel } from "@/features/invoice/useInvoiceDetailViewModel";
import { withAuth } from "@/auth/withAuth";

function InvoiceDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    const vm = useInvoiceDetailViewModel(id);

    return (
        <MainLayout>
            <InvoiceDetailView invoice={vm.invoice} />
        </MainLayout>
    );
}

export default withAuth(InvoiceDetailPage);