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
import { InvoiceV2LineItemResponse } from './invoiceV2LineItemResponse';


export interface GetInvoiceLineItemsByFilters200Response { 
    data?: Array<InvoiceV2LineItemResponse>;
    success?: boolean;
    error?: object;
}

