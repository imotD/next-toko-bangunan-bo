import { Invoice } from "./invoice.model";
import { invoiceData } from "@/data/invoice.data";

export function useInvoiceListViewModel() {
    const invoices: Invoice[] = invoiceData

    function getUnpaidCount() {
    return invoices.filter(inv => inv.status === "UNPAID").length;
  }

    return {
        invoices,
        getUnpaidCount
    }
}


