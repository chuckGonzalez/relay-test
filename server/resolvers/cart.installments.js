module.exports = (parent) => {
  if (!parent.installmentOptions) return [];
  else return parent.installmentOptions.installments;
};
