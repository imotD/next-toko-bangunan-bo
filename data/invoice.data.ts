import { Invoice } from "@/features/invoice/invoice.model";

export const invoiceData: Invoice[] = [
  {
    id: 1,
    number: "INV-001",
    customer: "Toko Jaya",
    total: 1500000,
    status: "UNPAID",
  },
  {
    id: 2,
    number: "INV-002",
    customer: "Toko Makmur",
    total: 2500000,
    status: "PAID",
  },
  {
    id: 3,
    number: "INV-003",
    customer: "Toko Tommy",
    total: 1000000,
    status: "UNPAID",
  },
];
