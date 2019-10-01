const {
  CLICKNCOLLECT_SERVICE = 'https://televenta.ektdevelopers.com/api/v1/clickandcollect/stores',
  STORELOCATOR_SERVICE = 'https://services.elektra.com.mx/OCCServices/StoresLocatorService.svc/json',
} = process.env;

const fetch = require('node-fetch');
const filter = ({ IdEntity, Entity, IdChannel }) =>
  Entity === 'COMERCIO' && IdEntity === 1 && IdChannel === 1;

module.exports = async () => {
  const stores = (await fetch(CLICKNCOLLECT_SERVICE).then((res) => res.json())).data;
  const promises = stores.map((store) => {
    return fetch(`${STORELOCATOR_SERVICE}/GetStoreById/${store.storeId}`, {
      method: 'POST',
      body: JSON.stringify('key_5A672A345'),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => ({ ...store, ...res.Result.find(filter) }))
      .then((res) => {
        const {
          lat,
          lng,
          storeId: id,
          State: state,
          NameSuc: name,
          Street: street,
          Population: city,
          Telephones: phone,
          zipcode: postalCode,
          Colony: neighborhood,
        } = res;

        return { id, street, postalCode, neighborhood, state, lat, lng, city, name, phone };
      });
  });

  return Promise.all(promises).catch((error) => console.trace(error));
};
