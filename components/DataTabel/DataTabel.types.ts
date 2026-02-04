import { ColumnType, TablePaginationConfig } from "antd/es/table";

export interface DataTableProps<T extends object>{
    data: T[];
    columns: ColumnType<T>[];
    rowKey: string | ((record: T) => string);
    loading?: boolean;
    emptyText?: string;
    pagination?: TablePaginationConfig;
}