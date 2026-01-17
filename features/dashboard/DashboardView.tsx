import { Card, Row, Col } from "antd";
import { DashboardSummary } from "./dashboard.model";

type Props = DashboardSummary;

export default function DashboardView({
    totalItem,
    lowStock,
    unpaidInvoice,
}: Props) {
    return (
        <>
            <h1>Dashboard</h1>

            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Invoice Unpaid">
                        <h2>{unpaidInvoice}</h2>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="Total Barang">
                        <h2>{totalItem}</h2>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card title="Stok Menipis">
                        <h2>{lowStock}</h2>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
