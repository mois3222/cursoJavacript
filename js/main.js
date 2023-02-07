const spt = () => {
  console.log(`---------------------******--------------`);
};

/*Asincronia en JavaScript*/

/*Conceptos importantes de entender:

Procesamiento Single thread y Multi thread.
Operaciones de CPU y Operaciones de I/O.
Operaciones Concurrentes y operativas. 
Operaciones Bloqueantes y no Bloqueantes.
Operaciones sincronas y ansincronas. 

pddta: sigue en README.
*/

/*Código sincrono Bloqueante */
(() => {
  console.log(`Código Sincrono`);
  console.log(`Inicio`);

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log(`Uno`);
    dos();

    console.log(`Tres`);
  }

  uno();
  console.log(`Fin`);
})();

spt();
/*Código asincrono no Bloqueante */
/* 
(() => {
  console.log(`Código Sincrono`);
  console.log(`Inicio`);

  function dos() {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(() => {
      console.log(`Uno`);
    }, 0);
    dos();
    console.log(`Tres`);
  }

  uno();
  console.log(`Fin`);
})();

console.clear();

const cuadradoCallback = (value, callback) => {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
};

cuadradoCallback(0, (value, result) => {
  console.log(`Inicia callback`);
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
          });
        });
      });
    });
  });
});

**/

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
    return cuadradoPromise(3);
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

/*Funciones asincronas */

/*Mi promesa*/

const exponencialPromise = (value) => {
  if (typeof value !== "number")
    return Promise.reject(`Please insert a number!!`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        resolve: Math.exp(value),
      });
    }, 0 | (Math.random() * 1000));
  });
};

const asyncFunction = async () => {
  try {
    console.log(`Start Async Function`);
    let obj = await exponencialPromise(0);
    console.log(`Async Function "${obj.resolve}", ${obj.value}`);

    obj = await exponencialPromise(1);
    console.log(`Async Function "${obj.resolve}", ${obj.value}`);

    obj = await exponencialPromise(2);
    console.log(`Async Function "${obj.resolve}", ${obj.value}`);

    obj = await exponencialPromise(3);
    console.log(`Async Function "${obj.resolve}", ${obj.value}`);

    obj = await exponencialPromise(4);
    console.log(`Async Function "${obj.resolve}", ${obj.value}`);
  } catch (error) {
    console.error(error);
  }
};

asyncFunction();
