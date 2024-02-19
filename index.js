const express = require("express");
const app = express();
const cors = require("cors");
const { connectMongoDb } = require("./connect");
const connectionString = "mongodb://127.0.0.1:27017/purchases";
const { v4: uuidv4 } = require("uuid");
const { PURCHASE } = require("./Models/purchase");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enabling CORS for API calling from diffrent region
app.use(cors());

connectMongoDb(connectionString).then(() => console.log("MongoDB Connected"));
app.get("/entry", (req, res) => {
  res.json("Hello World");
});
var allpurchasedata;

app.get("/getallpurchase", (rq, res) => {
  allpurchasedata = [
    {
      invoiceamount: 2500,
      invoicenumber: 101,
      productid: 1,
      purchasedate: "",
      purchaseid: 1,
      quantity: 3,
      suppliername: "abc",
      productname: "iphone",
    },
    {
      invoiceamount: 1600,
      invoicenumber: 101,
      productid: 2,
      purchasedate: "",
      purchaseid: 2,
      quantity: 2,
      suppliername: "abc",
      productname: "ipad",
    },
  ];
  res.send({
    result: allpurchasedata,
  });
});

app.post("/savepurchase", async (req, res) => {
  const newpurchase = req.body.newpurchase;
  console.log("New Purchase" + newpurchase);

  //save puchase service SA

  const id = uuidv4();

  await PURCHASE.create({
    ID: id,
    invoiceamount: newpurchase.invoiceamount,
    invoicenumber: newpurchase.invoicenumber,
    productid: newpurchase.productid,
    purchasedate: newpurchase.purchasedate,
    purchaseid: newpurchase.purchaseid,
    quantity: newpurchase.quantity,
    suppliername: newpurchase.suppliername,
    productname: newpurchase.productname,
  });

  // EA

  res.json({ result: "Success" });
});

app.get("/getallproducts", (req, res) => {
  const productlist = [
    {
      productid: 1,
      productname: "iPhone",
    },
    {
      productid: 2,
      productname: "ipad",
    },
    {
      productid: 3,
      productname: "macbook",
    },
    {
      productid: 4,
      productname: "apple watch",
    },
  ];
  res.send({ result: productlist });
});

app.get("/getallStock", (req, res) => {
  const allstock = [
    {
      productid: 1,
      productname: "Iphone",
      createdDate: "17-02-2024",
      modifiedDate: "17-02-2024",
      quantity: 2,
    },
    {
      productid: 2,
      productname: "Macbook",
      createdDate: "17-02-2024",
      modifiedDate: "17-02-2024",
      quantity: 3,
    },
    {
      productid: 3,
      productname: "Ipad",
      createdDate: "17-02-2024",
      modifiedDate: "17-02-2024",
      quantity: 5,
    },
  ];
  res.send({ result: allstock });
});

app.get("/getallsell", (req, res) => {
  const allselldata = [
    {
      invoiceamount: 2500,
      invoicenumber: 101,
      productid: 1,
      purchasedate: "",
      purchaseid: 1,
      quantity: 3,
      suppliername: "abc",
      productname: "iphone",
    },
    {
      invoiceamount: 1600,
      invoicenumber: 101,
      productid: 2,
      purchasedate: "",
      purchaseid: 2,
      quantity: 2,
      suppliername: "abc",
      productname: "ipad",
    },
  ];

  res.send({
    result: allselldata,
  });
});

app.listen(5000, () => {
  console.log("Api is getting listened on 5000");
});
