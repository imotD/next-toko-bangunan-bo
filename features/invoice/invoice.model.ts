export type InvoiceStatus = "PAID" | "UNPAID" | "OVERDUE";

export type Invoice = {
    id: number;
    number: string;
    customer: string;
    total: number;
    status: InvoiceStatus;
}