import {
  Currency,
  InvoiceSource,
  InvoiceType,
  PaymentMethod,
  PaymentStatus,
} from './enums';
import { InvoiceItem } from './invoice-item.interface';
import { Partner } from './partner.interface';

export interface Invoice {
  source: InvoiceSource;
  sourceInvoiceId: string;
  invoiceNumber: string;
  issueDate: string;
  fulfillmentDate: string;
  dueDate: string;
  currency: Currency;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  totalNet: number;
  totalGross: number;
  vatAmount: number;
  invoiceType: InvoiceType;
  partner: Partner;
  items: InvoiceItem[];
  originalXml?: string;
  documentSource?: string;
  archivedAt?: string;
}
