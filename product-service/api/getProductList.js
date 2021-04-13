const { products } = require('./productList.js');

module.exports.getProductList = async () => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify(
        { items: products },
        null,
        2
      ),
    };
  } catch (e) {
    console.error('Get product list failed', e);
    return e;
  }
};
