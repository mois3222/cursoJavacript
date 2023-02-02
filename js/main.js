const spt = () => {
  console.log(`---------------------******--------------`);
};

/**Promesas */

const cuadradoPromise = (value) => {
  if (typeof value !== "number")
    return Promise.reject("Error el valor ingresado no es un numero");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        resolve: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
};

cuadradoPromise(0)
  .then((obj) => {
    console.log(`Inicia promise`);
    console.log(`Promise ${obj.value}, ${obj.resolve}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.resolve}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.resolve}`);
    return cuadradoPromise("3");
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.resolve}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise ${obj.value}, ${obj.resolve}`);
    cuadradoPromise(5);
    console.log("Fin de la Promesa");
  })
  .catch((err) => console.error(err));
