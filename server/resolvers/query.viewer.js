const fs = require('fs');
const jwt = require('jsonwebtoken');
const privateKey = fs.readFileSync('./resolvers/secrets/private.pem');
const publicKey = fs.readFileSync('./resolvers/secrets/public.pem');
const uuid = require('uuid/v1');

function generateToken(defaultID) {
  const id = defaultID || uuid();
  const data = {
    jwtid: id,
    expiresIn: '12h',
    algorithm: 'RS256',
    audience: 'customer',
    issuer: 'api.ektdevelopers.com',
  };
  const token = jwt.sign({ viewer: id }, privateKey, data);
  return { id, token, data };
}

module.exports = (operationType, _parent, args, req) => {
  const token =
    (req.headers.authorization || '').replace('Bearer', '').trim() || args.token || null;
  const result = { operationType };

  if (!token) {
    const { id, token, data } = generateToken();
    result.id = id;
    result.token = token;
    result.jwt = data;
  } else {
    try {
      const viewerData = jwt.verify(token, publicKey);
      const { id, token: newToken, data } = generateToken(viewerData.viewer);
      result.id = id;
      result.token = newToken;
      result.jwt = data;
    } catch (e) {
      const { id, token, data } = generateToken();
      result.id = id;
      result.token = token;
      result.jwt = data;
      result.tokenError = e;
    }
  }

  return result;
};
