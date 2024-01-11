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


export interface CreditDistribution { 
    /**
     * The invoice line item ID
     */
    invoiceLineItemId: string;
    /**
     * Credit towards the invoice line item.
     */
    creditAmount: number;
    /**
     * Credit notes.
     */
    notes?: string;
}

