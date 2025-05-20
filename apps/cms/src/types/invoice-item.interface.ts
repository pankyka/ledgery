import { VatRate } from "./enums";

export interface InvoiceItem {
    description: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    totalNet: number;
    totalGross: number;
    vatRate: VatRate;
    vatAmount: number;
  }