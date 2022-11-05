const array = []
for (let index = 0; index < 20; index++) {
  array[index] = Math.round(Math.random() * 60)
}

console.log(array)

//#region TASK1
// let min = array[0]

// for (let index = 0; index < array.length; index++) {
//   if (min > array[index]) {
//     min = array[index];
//   }
// }
// console.log(min)

//#endregion

//#region TASK2
// let max = array[0]

// for (let index = 0; index < array.length; index++) {
//   if (array[index] > max) {
//     max = array[index];
//   }
// }
// console.log(max)

//#endregion

//#region TASK3

// let min = array[0]
// let i=0;
// for (let index = 0; index < array.length; index++) {
//   if (min > array[index]) {
//     min = array[index];
//     i=index;
//   }
// }
// console.log(i)

//#endregion

//#region TASK4

// let max = array[0]
// let i=0;
// for (let index = 0; index < array.length; index++) {
//   if (array[index]> max) {
//     max = array[index];
//     i=index;
//   }
// }
// console.log(i)

//#endregion

//#region TASK 5

// let sum=0;

// for (let index = 1; index < array.length; index+2) {
//   sum+=array[index];
// }
// console.log(sum)
//#endregion

//#region TASK6

// reverseArray(array)

// function reverseArray(array){
//  array = array.slice().reverse()
//  console.log(array)
// }

// reverseArray(array)

// function reverseArray(array) {
//   for (let index = 0; index < array.length / 2; index++) {
//     const temp = array[index]
//     array[index] = array[array.length - 1 - index]
//     array[array.length - 1 - index] = temp
//   }
//   console.log(array)
// }
//why is it not working i dont knowww(

//#endregion

//#region TASK7

// let counter=0;
// for (let index = 0; index < array.length; index++) {
//   if(array[index]%2==1){
//     counter++
//   }

// }
// console.log(counter)

//#endregion

//#region TASK8

// let split = 0
// let arr
// let arr1
// let arr2

// split = array.length / 2
// arr1 = array.slice(0, split)
// arr2 = array.slice(split, array.length)
// arr = [arr2 + arr1]
// console.log(arr)

//#endregion

//#region TASK9
// console.log(bubble(array))

// function bubble(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < arr.length - index - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr;
// }

//#endregion

//#region TASK10

// console.log(selection(array))

// function selection(arr) {
//   let index = 0
//   let length = arr.length
//   let nextIndex = 0
//   while (index < length - 1) {
//     nextIndex = index + 1
//     let maxIndex = index

//     while (nextIndex < length) {
//       if (arr[maxIndex] < arr[nextIndex]) {
//         maxIndex = nextIndex
//       }
//       nextIndex++
//     }
//     if (maxIndex != index) {
//       [arr[index], arr[maxIndex]] = [arr[maxIndex], arr[index]]
//     }
//     index++
//   }
//   return arr
// }

//#endregion
