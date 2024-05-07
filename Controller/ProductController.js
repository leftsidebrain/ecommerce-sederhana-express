const res = require("express/lib/response");
const dataProduct = [
  {
    id: 1,
    product: "ice Capuchino",
    price: 15000,
  },
  {
    id: 2,
    product: "ice Cream",
    price: 20000,
  },
];

exports.getDataProduct = (req, res) => {
  return res.send({
    response: "success",
    message: "Get Data Product Success",
    data: dataProduct,
  });
};

exports.getDataProductById = (req, res) => {
  const id = req.params.id;
  const dataProductById = dataProduct.find((item) => item.id == id);
  if (!dataProductById) {
    return res.status(404).send({
      response: "fail",
      message: "Get Data Product fail",
      idparams: id,
      data: dataProductById,
    });
  }
  return res.send({
    response: "success",
    message: "Get Data Product Success",
    idparams: id,
    data: dataProductById,
  });
};
