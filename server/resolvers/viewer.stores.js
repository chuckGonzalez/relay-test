const {
  STORELOCATOR_SERVICE = 'https://services.elektra.com.mx/OCCServices/StoresLocatorService.svc/json',
} = process.env;
const fetch = require('node-fetch');

module.exports = (_, { postalCode, storeProducts }) => {
  if (!postalCode) return [];

  const items = storeProducts.map((val) => {
    return { Sku: val.sku, Quantity: val.qty };
  });

  return fetch(`${STORELOCATOR_SERVICE}/GetStoresWithStockFromPostalCode/${postalCode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items),
  })
    .then((res) => res.json())
    .then((res) => res.Result)
    .then((res) => {
      return res.map(
        ({
          idTiendaField: id,
          calleField: street,
          codigoPostalField: postalCode,
          coloniaField: neighborhood,
          latitudField: lat,
          longitudField: lng,
          municipioField: city,
          nombreTiendaField: name,
          telefonoField: phone,
          estadoField: { nombreEstadoField: state },
        }) => ({
          id,
          street,
          postalCode,
          neighborhood,
          state,
          lat,
          lng,
          city,
          name,
          phone,
        }),
      );
    });
};
