/**
 * ManageSpace Billing API
 * ManageSpace Billing API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InvoiceStatus } from './invoiceStatus';


export interface TransactionSummaryResponse { 
    /**
     * Invoice ID.
     */
    invoiceId: string;
    /**
     * Sequential Invoice Number.
     */
    invoiceNumber: number;
    invoiceStatus: InvoiceStatus;
    /**
     * Invoice period end date.
     */
    invoicePeriodEndDate: string | null;
    /**
     * Invoice id
     */
    invoiceLineItemId: string;
    /**
     * inferred status for invoice line item
     */
    status: TransactionSummaryResponse.StatusEnum;
    /**
     * Amount due
     */
    due: number;
    /**
     * Amount paid.
     */
    paid: number;
    /**
     * Item description/transaction notes.
     */
    description: string;
    /**
     * Transaction date.
     */
    transactionDate: string;
}
export namespace TransactionSummaryResponse {
    export type StatusEnum = 'paid' | 'unpaid';
    export const StatusEnum = {
        Paid: 'paid' as StatusEnum,
        Unpaid: 'unpaid' as StatusEnum
    };
}


