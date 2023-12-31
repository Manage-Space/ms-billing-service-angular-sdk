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
import { AccountTransactionType } from './accountTransactionType';


export interface AccountTransactionResponse { 
    /**
     * Account Transaction ID.
     */
    accountTransactionId: string;
    /**
     * Organization ID.
     */
    orgId: string;
    /**
     * Site ID.
     */
    siteId: string;
    /**
     * Account ID.
     */
    accountId: string;
    /**
     * Account Name
     */
    accountName: string;
    /**
     * Email
     */
    email: string | null;
    /**
     * Mobile Number
     */
    mobileNumber: string;
    /**
     * Transaction Date
     */
    transactionDate: string;
    /**
     * Amount Due
     */
    due: number;
    /**
     * Amount Paid
     */
    paid: number;
    /**
     * Notes
     */
    notes: string | null;
    accountTransactionType: AccountTransactionType;
    /**
     * Invoice Line Item IDs
     */
    invoiceLineItemIds: string;
}
export namespace AccountTransactionResponse {
}


