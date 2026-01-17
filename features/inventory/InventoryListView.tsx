import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { InventoryItem } from "./inventory.model";

type Props = {
    items: InventoryItem[];
    getStockStatus: (stock: number) => "LOW" | "OK";
};

export default function InventoryListView({
    items,
    getStockStatus,
}: Props) {
    const columns: ColumnsType<InventoryItem> = [
        {
            title: "Nama Barang",
            dataIndex: "name",
        },
        {
            title: "Stok",
            dataIndex: "stock",
        },
        {
            title: "Status",
            render: (_, record) =>
                getStockStatus(record.stock) === "LOW" ? (
                    <Tag color="red">MENIPIS</Tag>
                ) : (
                    <Tag color="green">AMAN</Tag>
                ),
        },
    ];

    return (
        <>
            <h1>Inventory</h1>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={items}
            />
        </>
    );
}
