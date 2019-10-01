const { HOST_BASE } = process.env;

module.exports = ({ images, image }, { size }) => {
  let pathname;

  if (size && images && images[0]) {
    const { path } = images[0];
    pathname = path
      .replace('#width#', size)
      .replace('#height#', size)
      .replace(/#PLACEHOLDER#/g, size);
  } else if (image) {
    pathname = new URL(image).pathname;
  }

  return (pathname && `${HOST_BASE}${pathname}`) || null;
};
