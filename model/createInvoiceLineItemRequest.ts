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


export interface CreateInvoiceLineItemRequest { 
    /**
     * Account ID
     */
    accountId: string;
    /**
     * The quantity of items.
     */
    quantity?: number;
    /**
     * The price of the unit.
     */
    unitPrice: number;
    /**
     * A description of the fee.
     */
    description?: string;
    /**
     * Product ID
     */
    productId?: string;
    /**
     * Rental ID
     */
    rentalId?: string;
    /**
     * Rental ID
     */
    feeId?: string;
    /**
     * Ledger ID
     */
    ledgerId?: string;
}

