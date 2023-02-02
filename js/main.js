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
