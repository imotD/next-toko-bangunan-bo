import { Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { InventoryItem } from "./inventory.model";
import { DataTable } from "@/components/DataTabel/DataTabel";

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
            <DataTable<InventoryItem>
                data={items}
                columns={columns}
                rowKey="id"
            />
        </>
    );
}
