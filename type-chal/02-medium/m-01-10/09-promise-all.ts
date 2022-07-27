/*                                    Promise.all
Link: https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> 
where T is the resolved result array.

/*Example:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)*/