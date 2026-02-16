import { Table } from "antd";
import { DataTableProps } from "./DataTabel.types";

export function DataTable<T extends object>({
  data,
  columns,
  rowKey,
  loading = false,
  emptyText = "No Data",
  pagination,
  bordered = false,
}: DataTableProps<T>) {
  return (
    <Table<T>
      dataSource={data}
      columns={columns}
      rowKey={rowKey}
      loading={loading}
      locale={{ emptyText }}
      pagination={pagination}
      bordered={bordered}
    />
  );
}
