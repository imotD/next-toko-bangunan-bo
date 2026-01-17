import MainLayout from "@/components/MainLayout";
import DashboardView from "@/features/dashboard/DashboardView";
import { useDashboardViewModel } from "@/features/dashboard/useDashboardViewModel";
import { withAuth } from "@/auth/withAuth";

function DashboardPage() {
    const vm = useDashboardViewModel();

    return (
        <MainLayout>
            <DashboardView {...vm} />
        </MainLayout>
    );
}

export default withAuth(DashboardPage);
