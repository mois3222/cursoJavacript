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
})();*/

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
