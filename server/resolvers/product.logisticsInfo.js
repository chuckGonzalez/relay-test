const { VTEX_APP_KEY, VTEX_APP_TOKEN, ACCOUNT_NAME = 'elektraqa' } = process.env;
const fetch = require('node-fetch');

module.exports = (parent) => {
  if (!parent.productId) return null;
  return fetch(
    `https://logistics.vtexcommercestable.com.br/api/logistics/pvt/inventory/skus/${parent.productId}?an=${ACCOUNT_NAME}`,
    {
      headers: {
        'x-vtex-api-appkey': VTEX_APP_KEY,
        'x-vtex-api-apptoken': VTEX_APP_TOKEN,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => {
      const logistics = {
        availableInWarehouse: false,
        availableInStore: false,
      };
      res.balance.map((el) => {
        let availableWH = !!Math.max(el.totalQuantity - el.reservedQuantity, 0);
        if (['1f06721', 'store_pickup'].indexOf(el.warehouseId) > -1) {
          logistics.availableInStore = !!(availableWH || el.hasUnlimitedQuantity);
        } else if (!logistics.availableInWarehouse) {
          logistics.availableInWarehouse = !!(availableWH || el.hasUnlimitedQuantity);
        }
      });
      return logistics;
    })
    .catch((err) => {});
};
