const mongoose = require('mongoose')


/*     invoiceamount: 2500,
      invoicenumber: 101,
      productid: 1,
      purchasedate: "",
      purchaseid: 1,
      quantity: 3,
      suppliername: "abc",
      productname: "iphone",*/
const purchaseSchema = new mongoose.Schema({
    ID:{
        type : String,
        required : true,
        unique : true,
    },
    invoiceamount : {
        type : Number,
        required : true,
    },
    invoicenumber : {
        type : String,
        required : false,
    },
    productid : {
        type : Number,
        required : true,
    },
    purchasedate : {
        type : Date,
        required : false,
    },
    purchaseid : {
        type : Number,
        required : false,
    },
    quantity : {
        type : Number,
        required : true,
    },

    suppliername : {
        type : String,
        required : false,
    },
    productname : {
        type : String,
        required : false,
    }  
});

const PURCHASE = mongoose.model('purchase',purchaseSchema);

module.exports = PURCHASE;