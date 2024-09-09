/**
 * 获取数组中的随机元素
 */
// const randomElement = array => array[Math.floor(Math.random() * array.length)];
//
// const arr = [1, 2, 3, 4, 5]
// console.log(randomElement(arr))


/**
 * 数组扁平化
 */
// const flattenedArray = array => array.flat();
//
// const arr = [1, [2, 3, 4, 5]]
// console.log(flattenedArray(arr))


/**
 * 对象数组根据某个属性值进行排序
 */
// const sortedArray = (objectArray, property) =>
//   objectArray.sort((a, b) => a[property] - b[property]);
//
// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ]
// console.log(sortedArray(people, 'age'))

//
/**
 * 检查数组中是否存在重复项
 */
// const hasDuplicate = (array) => array.length !== new Set(array).size;
//
// console.log(hasDuplicate([1, 2, 3, 4, 4, 5]))

/**
 * 从数组中删除特定元素
 */
// const filteredArray = (array, specificElement) =>
//   array.filter(item => item !== specificElement);
//
// const colors = ['red', 'green', 'blue', 'red', 'yellow']
// console.log(filteredArray(colors, 'red'))

// /**
//  * 首字母大写
//  */
// const capitalizedString = string =>
//   string.charAt(0).toUpperCase() + string.slice(1);
//
// console.log(capitalizedString('hello world'))


/**
 * 获取一个指定范围内的随机整数
 */
// const randomInteger = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
//
// console.log(randomInteger(100, 10))


/**
 * 获取变量的类型
 */
const getType = (variable) =>
  Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();

console.log(getType(''));  // string
console.log(getType(0));  // number
console.log(getType());  // undefined
console.log(getType(null));  // null
console.log(getType({}));  // object
console.log(getType([]));  // array
console.log(getType(0)); // number
console.log(getType(() => {}));  // function


