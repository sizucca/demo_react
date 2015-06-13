function *x() {
  yield 10;
  yield 20;
}
const gen = x;
console.log(gen);
