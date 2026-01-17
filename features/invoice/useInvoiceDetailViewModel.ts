import { Invoice } from "./invoice.model";

export function useInvoiceDetailViewModel(id: string | string[] | undefined) {
  // mock data (nanti dari API)
  const invoice: Invoice = {
    id: Number(id),
    number: `INV-00${id}`,
    customer: "Toko Jaya",
    total: 1500000,
    status: "UNPAID",
  };

  return {
    invoice,
  };
}
