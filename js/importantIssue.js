//break and continue

//they help us to have control about our control structuries.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  /* if (i === 5) {
    break;
  } */

  if (i === 5) continue;

  console.log(numbers[i]);
}
