export const calcBil = (data) => {
  if (data) {
    return data.reduce(
      (acc, curr) =>
        (curr.quantity * curr.product.price * (100 - curr.product.sale)) / 100 +
        acc,
      0
    );
  }
};
export const calcPrice = (data) => {
  if (data) {
    return Math.floor(
      data.product.price * data.quantity * ((100 - data.product.sale) / 100)
    );
  }
};
export const formatCash = (number) => {
  if (number) {
    const str = number.toString();
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }
};

export const priceProduct = (product) => {
  if (product) {
    return Math.floor((product.price * (100 - product.sale)) / 100);
  }
};
