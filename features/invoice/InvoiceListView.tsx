import { DataTable } from "@/components/DataTabel/DataTabel";
import { Invoice } from "./invoice.model";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

type Props = {
  invoices: Invoice[];
}

export default function InvoiceListView({ invoices }: Props) {
  const columns: ColumnsType<Invoice> = [
    {
      title: "Invoice Number",
      dataIndex: "number",
    },
    {
      title: "Customer",
      dataIndex: "customer",
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (value: number) => `Rp ${value.toLocaleString()}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) =>
        status === "PAID" ? (
          <Tag color="green">PAID</Tag>
        ) : (
          <Tag color="red">UNPAID</Tag>
        ),
    },
  ];
  return (
    <>
      <h1>Invoice</h1>

      <DataTable<Invoice>
        data={invoices}
        columns={columns}
        rowKey="id"
      />
    </>
  );
}