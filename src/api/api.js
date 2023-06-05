import { server_api } from "../admin/const/api";

const addProductCategory = `${server_api}/api/add_product_category`;
const getProductCategory = `${server_api}/api/getProductCategory`;
const deleteProductCategory = `${server_api}api/deleteProductCategory`;
const selectInvoice = `${server_api}/api/selectinvoice_terms`;
const insertApi = `${server_api}/api/insertInvoice_terms`;
const updateApi = `${server_api}/api/update_invoiceterms`;

const selectPurchase = `${server_api}/api/selectpurchase_terms`;

const purchaseInsert = `${server_api}/api/insertpurchase_terms`;
const PurchaseUpdate= `${server_api}/api/update_purchaseterms`;

const quotesGet= `${server_api}/api/getallnotes`;
const quotesInsert= `${server_api}/api/insertquotes`;
const quotesUpdate= `${server_api}/api/update_clikekartnote`;

export {
  addProductCategory,
  getProductCategory,
  deleteProductCategory,
  selectInvoice,
  insertApi,
  updateApi,
  purchaseInsert,
  selectPurchase,
  PurchaseUpdate,
  quotesInsert,
  quotesUpdate,
  quotesGet
  

};