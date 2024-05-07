const express = require("express");
const router = express.Router();

const { getDataProduct, getDataProductById } = require("../Controller/ProductController");

router.get("/dataproduct", getDataProduct);

router.get("/dataproductbyid/:id", getDataProductById);

module.exports = router;
