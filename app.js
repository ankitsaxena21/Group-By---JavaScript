const obj = [
  {
    car: "tesla",
    color: "red",
  },
  {
    car: "tesla",
    color: "black",
  },
  {
    car: "ford",
    color: "black",
  },
];

// console.log(_.groupBy(obj, 'car'));
// console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));


const groupBy = function (values, keyFinder) {
  return values.reduce((acc, curr) => {
    const key =
      typeof keyFinder === "function" ? keyFinder(curr) : curr[keyFinder];
    if (!acc[key]) {
      acc[key] = [curr];
    } else {
      acc[key] = [...acc[key], curr];
    }

    return acc;
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
