const { products } = require('./productList.js');

module.exports.getProductById = async ({ pathParameters }) => {
  try {
    const product = products.find(({ id }) => id === pathParameters.id);

    return {
      statusCode: 200,
      body: JSON.stringify(
        { item: product },
        null,
        2
      ),
    };
  } catch (e) {
    console.error('Product not found', e);
    return e;
  }
};