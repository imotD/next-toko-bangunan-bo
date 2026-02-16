import { Tag, Button } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { InventoryItem } from "./inventory.model";
import { DataTable } from "@/components/DataTabel/DataTabel";
import Link from "next/link";

type Props = {
  items: InventoryItem[];
  getStockStatus: (stock: number) => "LOW" | "OK";
};

export default function InventoryListView({ items, getStockStatus }: Props) {
  const columns: ColumnsType<InventoryItem> = [
    {
      title: "Nama Barang",
      dataIndex: "name",
    },
    {
      title: "Stok",
      dataIndex: "stock",
      width: 100,
    },
    {
      title: "Status",
      width: 100,
      render: (_, record) =>
        getStockStatus(record.stock) === "LOW" ? (
          <Tag color="red">MENIPIS</Tag>
        ) : (
          <Tag color="green">AMAN</Tag>
        ),
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
      ellipsis: true,
    },
    {
      title: "Action",
      width: 85,
      align: "center",
      render: (_, record) => (
        <Link href={`/inventory/${record.id}`}>
          <Button type="primary" shape="circle" icon={<FileSearchOutlined />} />
        </Link>
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
        bordered={true}
      />
    </>
  );
}
