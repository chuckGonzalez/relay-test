module.exports = (parent) => {
  if (!parent.installmentOptions) return null;
  else return parent.installmentOptions.paymentName;
};
