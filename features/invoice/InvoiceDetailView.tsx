import { Card, Descriptions, Tag, Button } from "antd";
import { Invoice } from "./invoice.model";

type Props = {
    invoice: Invoice;
};

export default function InvoiceDetailView({ invoice }: Props) {
    return (
        <>
            <h1>Invoice Detail</h1>

            <Card>
                <Descriptions column={1}>
                    <Descriptions.Item label="Invoice Number">
                        {invoice.number}
                    </Descriptions.Item>

                    <Descriptions.Item label="Customer">
                        {invoice.customer}
                    </Descriptions.Item>

                    <Descriptions.Item label="Total">
                        Rp {invoice.total.toLocaleString()}
                    </Descriptions.Item>

                    <Descriptions.Item label="Status">
                        {invoice.status === "PAID" ? (
                            <Tag color="green">PAID</Tag>
                        ) : (
                            <Tag color="red">UNPAID</Tag>
                        )}
                    </Descriptions.Item>
                </Descriptions>

                {invoice.status === "UNPAID" && (
                    <Button type="primary">
                        Mark as Paid
                    </Button>
                )}
            </Card>
        </>
    );
}
