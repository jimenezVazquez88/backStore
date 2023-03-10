const Product = require('../models/productSchema')

exports.get_products  = async () => {
    return await Product.find();
}

exports.delete_product  = async (id) => {
    return await Product.findByIdAndDelete(id);
}

exports.add_product = async (body) => {
  const product = new Product(body);
   return await product.save(); 
}

exports.get_product  = async (id) => {
     return await Product.findOne({ _id: id });
}

exports.edit_product = async (id,body) => {
  return await Product.findByIdAndUpdate(id, body);
}