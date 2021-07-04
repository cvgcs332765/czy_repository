var msg="hello world!";
var msg2="hello world chenzhongyan!"
console.log(msg)
let a=20;
let b=20;
console.log(a===b)

var test=
[{name:'chenyuze',language:"c#"},
{name:"chenzhongyan",language:'javascript'}
]
console.log(test.map(i=>i.language));
let valus=true;
alert(typeof valus);
valus=String(valus);
alert(typeof valus);
alert("6"/"3");
valus=Number(undefined);
alert(Number("    "));
alert("6"+3);
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint:${hint}`);
      return hint == "string" ? `name:${this.name}` : this.money;
    }
  };
  
  // 转换演示：
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500
outer: for(let i=0;i<3;i++){
    for(let j=0;i<3;j++){
        let num=prompt("坐标：",0);
        if(!num) continue outer;
    }

}
alert("测试完成！");

let num=prompt("who is there ?",0);
if(num=="Admin"){
  let pwd=prompt("please input your password :",0);
  if(pwd=="123456")
  alert("welcome!");
  else if(pwd==null)
  alert("illege!");
  else
  alert("cancell");
}
else if(num==null)
  alert("cancell");
else
  alert("I dont kown you!");

function isEmpty(obj){
  for(let key in obj){
    return false;
  }
  return true;
}

let schedule= {};

alert( isEmpty(schedule) );

schedule["8:30"]= "get up";

alert( isEmpty(schedule) );

let user1={
  name: "chenzhongyan",
  age: 36
};

let clone= {};

for (let key in user1){
  clone[key]= user1[key];
}

console.log(clone[name]);

// let user=function (man,woman){
//   man.wife=woman;
//   woman.husband=man;
//   return {
//     father: man,
//     mother: woman
//   }
// }({name: "chenzhongyan"},{name: "liutao"});

let user={
  name: "chenzhongyan",
  family: function(man,woman){
    man.wife=woman;
    woman.husband=man;
    return {
      father: man,
      mother: woman,
      [name]: "chenzhongyan",
      
      
    }
  }
}


console.log(user);
let user1=user.family({name: "chenzhongyan"},{name: "liutao"});
let user2={name: "liudehua"};
let user3=user.family.apply(user2,[{name: "chenzhongyan"},{name: "liutao"}]);
// console.log(user);

// // delete user.father;

// // delete user.mother.husband;

// // console.log(user.mother.husband);

console.log(user.family);
console.log(user1);
console.log(user3);

let calculator = {
  read() {
    this.num1=prompt("请输出第1个数：", "");
    this.num2=prompt("请输出第2个数：", "");
  },
  sum(){
    return (+this.num1)+(+this.num2);
  },
  mul(){
    return this.num1*this.num2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

function Accumulator(startingValue) {
  this.value= startingValue;
  this.read= function() {
    this.value+=+prompt("请输出第1个数：", "");
  }
}

let accumulator = new Accumulator(1); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

alert(accumulator.value); // 显示这些值的总和

let user = {
  user: {
    address1: "chenzhongyan",
    
  }
}; // user 没有 address 属性

user.user?.alert( user?.address?.[street] ); // undefined（不报错）

delete user.user?.address1;
console.log(user.user.address1);

//symbol测试
let age=Symbol("Num");

let user={
  name: "chenyuze",
  [age]: 18
}
//唯一symbol
let id=Symbol("Num");
user[id]=1;
console.log(user);
//全局symbol注册表
let allid=Symbol.for("allid");
let allid1=Symbol.for("allid");
user[allid]= 332765;
console.log(user[allid1]);
user[allid]= 11111;
console.log(user[allid1]);
console.log(allid.description);

let myname= Symbol.keyFor(allid1);
console.log(myname);

//object.assign拷贝symbol
let clone= Object.assign({},user);
console.log(clone);

//for in 忽略symbol
for (let key in clone) {
  console.log(clone[key]);
}
//返回所有symbol键
for( let key of (Object.getOwnPropertySymbols(clone) ) ){
  console.log(clone[key]);
}
//返回所有键，包括symbol
for( let key of (Reflect.ownKeys(clone) ) ){
  console.log(clone[key]);
}

let testValue= 1.5e5;
console.log(+(testValue.toFixed(8)));

// 当访问 str 的属性时，一个“对象包装器”被创建了。
// 在严格模式下，向其写入内容会报错。
// 否则，将继续执行带有属性的操作，该对象将获得 test 属性，但是此后，“对象包装器”将消失，
// 因此在最后一行，str 并没有该属性的踪迹。
let str = "Hello";

str.test = 5;

alert(str.test);

//36进制转短url实例，整数直接调用方法需要两点，小数一个就行
alert( 123456..toString(36) ); // 2n9c

console.log( Math.round( (6.35 * 10)* 10 ) );
//生成一个min~max之间的随机数，不包含max
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );

//从 min 到 max 的随机整数，包括 min 和 max
// 方案一：
function randomInteger(min, max) {
  // 现在范围是从  (min-0.5) 到 (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );

//方案二：
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function readNumber(){
  let num;
  do {
    num= prompt("请输出一个数字：","");
    
  } while(!isFinite(num) );
  
  if(num === null || num === ""){
  return null;
  }
  
  }
  alert(readNumber());

  
let a1= `w\·ord`;
let a3= `w\`ord`;
let a2=`sd${a1}fk\nlds\t j\bf sdk\'\\fs
sdfk\x7as\u00a9jd
sd\u{20331}k\u{1f60d}dfj
I\'m a teacher!\n`;

console.log(`\n
${a1}\x7a\u{20331}`);

console.log(a1.charAt(a1.length));

for(let char of a1)
{
  console.log(char);
}

a1[0]="a";
console.log(a1[0]);

console.log(a2.indexOf("word",-1));

console.log(a2.includes("word"));
console.log(a2.trim());
console.log(a2.endsWith("!"));

console.log(a2.slice(1,100));
console.log(a2.substring(3,-1));

console.log(a1.codePointAt(0));
console.log(String.fromCodePoint(65,66,67,68,69));
console.log(String.fromCodePoint(0x2f804,194564,0x404,0x005a));
console.log(a1.toUpperCase());
console.log(a1[0].toLowerCase());
console.log(a1.localeCompare(a3));
//复合字符，原本不相等，需要通过normalize（）规范化
console.log( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
console.log("S\u0307\u0323".normalize().length);
console.log("S\u0307\u0323".normalize() == "\u1e68");

console.log(ucFirst("word"));

function ucFirst(str){
  return str[0].toUpperCase() + str.slice(1);
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit")

function checkSpam(str){
  if (str.toLowerCase().includes("viagra".toLowerCase() ) || str.toLowerCase().includes("XXX".toLowerCase() )){
    return true;
  }else {
    return false;
  }
}

function truncate(str,maxlength){
  return str.length <= maxlength ? str : str.slice(0,19) + "…";
}

function extractCurrencyValue(str){

}


let arr = ["Jazz","Blues"];
console.log( arr.push("Rock-n-Roll") );
console.log(arr[ ( arr.length-3 ) / 2 ] );
arr[Math.trunc( (arr.length/2) )]= "Classics";
console.log( arr.shift() );
console.log( arr.unshift("Rap","Reggae"));

console.log(arr.toString());

function sumInput(){
  let sumarr = [];
  let sum = 0;
  let num = "";

  while ( true ) {
  num = prompt("请输入数字：",0);

  if( num === "" || num === null || !isFinite( num ) ) break; 

  sumarr.push( +num );
  };
  
  for (let value of sumarr){
    sum+= value;
  }

  console.log( `sum is : ${sum}!`);
}

sumInput();

function getMaxSubSum(arr){
  let maxSum = 0;
  let partSum = 0;

  for (let i = 0; i < arr.length; i++){
    partSum += arr[i];
    maxSum = Math.max(maxSum, partSum);

    if (partSum < 0) partSum = 0 ;
  } 
return maxSum;
  
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

let arr = ["I", "study", "JavaScript"];

alert( arr.splice(2, 0, "lve") ); // 从索引 1 开始删除 1 个元素

let user = {
  0 : "chenyuze",
  1 : "liutao",
  length : 2
};



console.log( arr.concat(user, [1, 2]) );


let ll = "ceshi";
let testuser = { aa : ll};
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let strs = ["chenzhongyan", "chenyuze", "liutao"];
let str = "chenyuze is a good boy";
str.toUpperCase


let nums = [-1, 20, -15, 3];

let user = users.find(item => item.id == 1);
//  console.log(user.name);

 let user1 = users.filter(item => item.id < 3);
//  console.log(user1);

let str1 = strs.map(item => item[0]);
let len = strs.reduce( (pre, item) => pre + item.length, 0);
let num1 = nums.reduce( (pre, item) => pre + item );
// console.log(str1);
console.log(len);
console.log(num1);
console.log( nums.sort( (x, y) => x - y ) );
//  nums.sort( function cmp(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// } );

//  console.log(nums);

let strarr = str.split(" ");
console.log( str.split(""));
console.log( strarr.join("$"));

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users1 = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];
//army作为this，如果没有这个参数this在非严格模式下将指向window，返回空数组
let soldiers = users1.filter( army.canJoin ,army);
let soldiers1 = users1.filter( user => army.canJoin(user));
//箭头函数this指向定义它的函数，所以以下返回空数组
let soldiers2 = users1.filter( user => user.age >= this.minAge && user.age < this.maxAge, army);
let soldiers3 = users1.filter( function(user) { return user.age >= this.minAge && user.age < this.maxAge}, army);
console.log(soldiers3);

console.log( army.canJoin(users1[2]) );
 
console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );
//reduce，map，slice，split，join练习
function camelize(str){
  // let wordArr = str.split("-");
  // console.log(wordArr);
  // return wordArr.reduce( (pre, item, index, arr) => pre + changeFirst(item) );
  return str.split("-")
  .map( (item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item  )
  .join("");
}

function changeFirst(str){
  return str[0].toUpperCase() + str.slice(1);
}
//filter练习,返回新数组
let arr = [-1, 0, 5, -2, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1（匹配值）

console.log( arr ); // 5,3,8,1（未修改）

function filterRange(arr, a, b){
  return arr.filter( item => item >= a && item <= b );
}

//splice删除练习，原位修改
filterRangeInPlace(arr, 1, 4);
console.log( arr );

function filterRangeInPlace(arr, a, b){
  arr.forEach( (item, index, arr) => item < a || item > b && arr.splice(index, 1) );
    
}
//数组复制，字符串排序
let arr1 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr1);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr1 ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr){
   let arrcp = arr.concat();
  // let arrcp = arr.slice();
  return arrcp.sort();
}

function Calculator(){
  let opr = { 
    "+" : (a, b) => a + b ,
    "-" : (a, b) => a - b 
  } ;

  this.calculate = function(str){
    let arr =str.split(" ");
    //return opr.some( item => item === arr[1] ) ?/*&&*/ eval( str ) : "运算符未定义！";
    if ( !opr[arr[1]] || isNaN( arr[0] ) || isNaN( arr[2] ) )
      return "非法输入！" ;
    
      return opr[arr[1]](+arr[0],+arr[2]);
      } 
     
  

  this.addMethod = function(name, func){
    console.log(opr);
    opr[name] = func;
    // this.calculate = function(str){
      
    //   return func(arr[0], arr[2]);
    //   if (arr[1] == "*")
    //      return arr[0] * arr[2] ;
    //   else if(arr[1] == "/")
    //      return arr[0] / arr[2];
    //   else if(arr[1] == "**")
    //      return arr[0] ** arr[2];
    //   else
    //      alert("输入错误！")；
    // }
  }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("3 ** 3");
alert( result ); // 8
//map练习,对象数组映射到普通数组
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users3 = [ john, pete, mary ];

let names = users3.map( item => item.name );

alert( names ); // John, Pete, Mary

//map练习,对象数组映射到另一个对象数组
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users4 = [ john1, pete1, mary1 ];

let usersMapped = users4.map( item => {return {"fullName" : item.name + " "+ item.surname , "id" : item.id};});

alert( usersMapped[1].id ) // 1
alert( usersMapped[1].fullName ) // John Smith

//排序对象数组

function sortByAge( users ){
  users.sort( (a, b) => a.age - b.age ) ;
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr2 = [ pete2, john2, mary2 ];

sortByAge(arr2);

// now: [john, mary, pete]
alert(arr2[0].name); // John
alert(arr2[1].name); // Mary
alert(arr2[2].name); // Pete

//获得数组原始元素的随机排列：建立副本、根据随机数复制源数组，并删除副本数组相应数，
//避免随机重复值
// function shuffle(array){
//   let myArray = array.concat();
  
//   for (let i = 0; i < array.length ;i++ ){
//     let myIndex = Math.floor( Math.random() * myArray.length );
//     array[i] = myArray[myIndex];
//     myArray.splice(myIndex,1);
//   };
  
//   // array.map( (item, index, arr) => 
//   // item[Math.floor( Math.random()*array.length ) ]);
// }
//获得数组原始元素的随机排列,
function shuffle(array){
  for (let i = array.length-1; i > 0; i--)
  {
    let j =  Math.floor( Math.random() * (i+1) );
    [ array[i], array[j] ] = [ array[j], array[i] ];
  }
}

// 所有可能排列的出现次数
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++)
{
  let arr = [1, 2, 3];
  shuffle(arr);
  count[arr.join("")]++;
}

console.log(count);
// shuffle(arr);
// // arr = [3, 2, 1]
// console.log(arr);
// shuffle(arr);
// // arr = [2, 1, 3]
// console.log(arr);
// shuffle(arr);
// // arr = [3, 1, 2]
// console.log(arr);

function groupById(arr){
  return arr.reduce( (pre, item) => {
    pre[item.id] = item;
    return pre;
  }, {} );
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);



let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}

let arr = Array.from(range, num => num * num);
console.log( arr );

let map = new Map( [
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

let arr1 = Array.from( map );
console.log( arr1 );
console.log( map );

let obj = Object.fromEntries( map.entries() );
console.log(obj);

let map1 = new Map( Object.entries(obj) );
console.log(map1);

//过滤字谜，set实现，返回最先出现的元素样式
// function aclean(arr){
//   for (let i = 0; i < arr.length; i++){
//     for (let j = i+1; j < arr.length; j++){
//       if (changeStr( arr[i] ) ===changeStr( arr[j] ) ){
//         arr[j] = arr[i];
//       }
//     }
//   }
//   return Array.from( new Set(arr));
// }
// function changeStr(str){
//   return str.toLowerCase().split("").sort().join("");
// }

//过滤字谜，map实现，返回最后出现的元素样式
// function aclean(arr){
//   let map = new Map();
//   for (let valus of arr){
//     let sortedVal = valus.toLowerCase().split("").sort().join("");
//     map.set(sortedVal, valus); 
//   }
//   return Array.from( map.values() ); //map的迭代方法返回的是可迭代对象类型的键值对
// }

//过滤字谜，object实现，返回最后出现的元素样式
function aclean(arr){
  let obj = {};
  for (let valus of arr){
    let sortedVal = valus.toLowerCase().split("").sort().join("");
    obj[sortedVal] = valus;
  }
  return Object.values(obj); //object静态方法返回的就是数组，无需转为数组
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let map = new WeakMap();


map.set(messages[0], new Date(2020, 1, 1));

console.log(map);
console.log("read message 0:" + map.has(messages[0]));
messages.shift();
console.log(messages);
//为什么map还有元素呢？
console.log(map);

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);



console.log(doublePrices); // 8

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

function sumSalaries(obj){
let sum = 0;
for (let valus of Object.values(obj))
{
   sum += valus;
}
return sum;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

function count(obj){
  let counter = 0;
  for (let key in obj){
    counter++;
  }
  return counter;
}


let date1 = new Date( 2012, 2, 20, 3, 12, 15, 450);
let date2 = new Date( "2012-02-20T03:12:15.450-07:00");
console.log(date1);

function getWeekDay(date){
  let dayArray = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return dayArray[ date.getDay() ];
  // switch( date.getDay() ){
  //   case 1: return 'MO';
  //   case 2: return 'TU';
  //   case 3: return 'WE';
  //   case 4: return 'TH';
  //   case 5: return 'FR';
  //   case 6: return 'SA';
  //   case 0: return 'SU';
  //   default: return NaN;
  // }
}
console.log( getWeekDay(date1) );

function getLocalDay(date){
  return date.getDay() || 7 ; 
}

console.log( getLocalDay(date1) );

function getDateAgo(date, days){
  return new Date( date.getFullYear(), date.getMonth(), date.getDate() - days);
}

console.log( getDateAgo(date1, 20) );
console.log(date1);

function getLastDayOfMonth(year, month){
  // 以下是c++传统判断方法判断输入是否合法，js有了Date对象，可以使用对象自动实现判断。
  // let dateCheck = [31, 
  //   ( year % 4 === 0 && year % 100 != 0 ) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31];
  // return dateCheck[month-1];
  return new Date( year, month+1, 0).getDate();
}

console.log( getLastDayOfMonth(2020, -2) );

function getSecondsToday(){
  let today = new Date();
  let todayBegin = new Date( today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round( ( today - todayBegin.getTime() ) / 1000 );
}

console.log( getSecondsToday() );

function getSecondsToTomorrow(){
  let today = new Date();
  return today = 24 * 3600 - today.getHours() * 3600 - today.getMinutes() * 60 - today.getSeconds();
}

console.log( getSecondsToTomorrow() );

function formatDate(date){
  let diffMs = Date.now() - date;
  let diffSec = Math.round( diffMs / 1000 );
  let diffMin = Math.round( diffSec / 60 );
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes(); 
  year =  year.toString().slice(2);
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? `0${date.getDate()}` : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  if ( diffSec < 1 ) return "right now";
  else if ( diffSec < 60 ) return  `${diffSec} sec. Ago`;
  else if ( diffMin < 60 ) return diffMin + " min. Ago";
  else return `${day}.${month}.${year} ${hour}:${minute}`;
  // 加号方式：day + '.' + month + '.' + year + ' ' + hour + ':' + minute;
  //方法一：通过数组的slice（-2）截取最后两位，使用map，reduce来实现。
  // else return ['0' + date.getDate(), '0' + ( date.getMonth() +1 ), '' + date.getFullYear(),
  //              '0' + date.getHours(), '0' + date.getMinutes() ].map( Com =>
  //                Com.slice(-2)).reduce( (pre, cur, index) => {
  //                   if (index <= 2 ) return pre + '.' + cur;
  //                   else if (index === 3) return pre + ' ' + cur;
  //                   else return pre + ':' + cur
  //                 } )
  //方法二：通过判断月，日，时和分的位数来判断是否在前面加0，然后直接join就行。
  

}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// 昨天的日期，例如 31.12.16 20:00
alert( formatDate(new Date(new Date - 10 * 86400 * 1000)) );

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
  let maxSal = 0;
  let maxName = null;
  
  for ( let [key, valus] of Object.entries(salaries)){
    if ( valus > maxSal){
      maxSal = valus;
      maxName = key;
    }
    // maxName = maxSal >= valus ? maxName : key;
    // maxSal = Math.max(maxSal, valus);
  }
  return maxName;
}

console.log( topSalary(salaries) );


let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);
console.log(json);

let room = {
  number: 23,
  toJSON(){
    return this.number;
  }
};

let room1 = {
  date: new Date(),
  room
}

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}, 2));

console.log( JSON.stringify(room));
console.log( JSON.stringify(room1));

let user = {
  name: "John Smith",
  age: 35
};

let jsonStr = JSON.stringify(user) ;
console.log(jsonStr);
let newUser = JSON.parse(jsonStr);
console.log(newUser);



let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// 循环引用
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  // 需要判断 key=="" 以排除第一个调用时 value 是 meetup 的情况。
   return key != '' && value == meetup ? undefined : value;
}));


//累加：循环 实现
function sumTo(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

function sumTo1(n){
  return n == 1 ? n : n + sumTo1(n-1);
}

console.log( sumTo1(100) );

function factorial(n){
  return n == 1 ? n : n * factorial(n-1);
}
console.log( factorial(5) );

//斐波那契：自下而上动态规划，不会出现重复计算，速度快
function fib(n){
  let a = 1;
  let b = 1;
  let c = 1;
  for (let i = 3; i <= n; i++){
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}

console.log( fib(77) );

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//遍历链表：循环实现
function printList(list){
  let temp = list;
  while( temp ){
    alert( temp.value );
    temp = temp.next;
  }
}

//遍历链表：递归实现
function printList1(list){
  alert(list.value);
  if (list.next){
    printList( list.next );
  } 
}

//反向输出链表：递归实现
function revList(list){
  
  if (list.next){
    revList( list.next );
    
  } 
  alert(list.value);
}

revList(list);

console.log("skdfjsf".charAt(0));



function sum(a){
  return function(b){
    return a+b;
  }
}
console.log( sum(5)(-1) );

let x = 1;

function func() {
  //console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b){
  return function(item){
    return item >= a && item <= b;
  }
}

console.log( arr.filter( inBetween(3, 6) ) );

function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // 会显示什么？

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName){
  return (a ,b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
console.log(users);


// var user = {name: "chenyuze"}
// function getUser(){
 
//   window.alert(window.user.name);
// }


// window.getUser();

// if (!window.Promise) {
//   alert("Your browser is really old!");
// }
//添加函数对象属性,方法，替代闭包
function makeCounter() {
  // 不需要这个了
  // let count = 0

  function counter() {
    return counter.count++;
  };
  counter.count = 0;
  counter.set = function(value){
    counter.count = value;
    return counter.count;
  };
  counter.decrease = function(value){
    counter.count--;
    return counter.count;
  }

  return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter.set(8) ); // 1
console.log( counter.decrease() );
console.log( counter.decrease() );

//NFE
let sayHi = function func(who) {};
console.log( sayHi.name );

//递归调用自身,添加函数属性来计数，重写函数方法toString来转换输出
//以下return sum，而非sum(),没有递归调用，而只是返回了函数。

function sum(sum1) {
  
  sum.couter += sum1;

  return sum;
  
};

sum.couter = 0;
sum.toString = function(){
  return sum.couter;
}

console.log( sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10) );



// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // 保存前一个调用的延时

//   if (start + 100 < Date.now()) alert(times); // 100 毫秒之后，显示延时信息
//   else setTimeout(run, 0); // 否则重新调度
// }, 0);

//setTimeout实现：定时输入数字
function printNumbers(from, to){
  setTimeout( function f() { 
    if ( from <= to )
    alert(from);
    from++;
    setTimeout( f, 1000);
  }, 1000);
} 

//setInterval实现：定时输入数字
function printNumbers1(from, to){
  setInterval(() => {
    if ( from <= to ){
      alert(from);
      from++;
    }
  }, 1000);
}

//printNumbers1(1, 5); 

//方法借用
function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

//hash(1, 2);

//间谍装饰器：在单元测试中很有用，
//它的高级形式是 Sinon.JS 库中的 sinon.spy
function work(a, b) {
  alert( a + b ); // work 是一个任意的函数或方法
}

function spy(func){
  let work = function(...args){
    
    work.calls.push(args);
    return func.apply(this, args);
  };
  work.calls = [];
  return work;
}

work = spy(work);


work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}



//延时装饰器
function f(x) {
  alert(x);
}

//方法一：使用函数声明，内部函数不能访问外部函数的this和arguments
function delay(func, ms){
    return function(...args){ 
      let that = this;
      setTimeout( function(){ 
        func.call( that, args.join() ) },
         ms);};
  
}

//方法二：使用箭头函数，箭头函数没有自己的this和arguments，使用外部函数的this和arguments，更简单。
function delay1(func, ms){
  return function(){ 
    setTimeout( () =>{ 
      func.call(this, [].join.call(arguments) ) },  //借用方法
       ms);};

}

// create wrappers
let f1000 = delay(f, 4000);
let f1500 = delay1(f, 6000);

f1000("test", "sdfasf"); // 在 1000ms 后显示 "test"
f1500("test", 1, "aaa"); // 在 1500ms 后显示 "test"

// //防抖装饰器：debounce 是一个处理一系列事件的好方法：无论是系列键盘输入，鼠标移动还是其他类似的事件
// let alert = sinon.spy()

// let f = _.debounce(alert, 1000);

// function debounce(func, ms){
//   let timeId; 
//   return function(){

//     clearTimeout(timeId);
//     timeId = setTimeout( () => func.apply(this, arguments), 1000);
//   };
// } 

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);
// // 防抖函数从最后一次函数调用以后等待 1000ms，然后执行：alert("c")

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  // loginOk() {
  //   alert(`${this.name} logged in`);
  // },

  // loginFail() {
  //   alert(`${this.name} failed to log in`);
  // },
  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }

};

//包装器的方式解决this丢失
//askPassword( () => user.loginOk(), () => user.loginFail() );
//bind绑定的方式解决this丢失问题。
//askPassword( user.loginOk.bind(user), user.loginFail.bind(user) );
//使用偏函数，固定参数可以实现一个原函数带着不同的固定参数被调用以返回不同的结果。
askPassword(user.login.bind(user, true), user.login.bind(user, false));
//箭头函数实现
//askPassword( () => user.login(true), () => user.login(false) );


let user= {
  name: "chenzhongyan"
};
//Object.preventExtensions(user);
Object.seal(user);   //实现preventExtensions + 所有属性configurable: false
Object.freeze(user); //实现preventExtensions + 所有属性configurable: false,writable: false
user.name = "liutao";
user.age = 18;
console.log(user.name);
console.log(user.age);

console.log(Object.isExtensible(user));
console.log(Object.isSealed(user));
console.log(Object.isFrozen(user));


Object.defineProperty(user, "name", {
  value: "chenyuze" ,
  configurable: false
} );

let myDescriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(myDescriptor, null, 2));
console.log(user.name);
user.name = "liutao";
console.log(user.name);

//delete user.name;
Object.defineProperty(user, "name", { 
  value: "Pete",
  writable: false
 });

 user.name = "liutao";

//  Object.defineProperty(user, "name", { 
//   value: "Pete",
//   writable: true             //configurable: false ,不能将writable: false改为true，反向可以。
//  });


user.age = 18;
console.log(user.age);
console.log(user.name);


let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name 太短了……
console.log(user._name);


function f(){
  this.age = 18;
};

// f.prototype = {
//   name: "chenyuze",
//   constructor: f
// };

let f1 = new f();

console.log(f1.age);

let f2 = new f1.constructor();

console.log(f2.age);

//给函数添加一个原型方法

Function.prototype.defer = function(ms){
  setTimeout(this, ms);
}; 

function f() {
  alert("Hello!");
}

f.defer(1000); // 1 秒后显示 "Hello!"

Function.prototype.defer = function(ms){
  let that = this;
  return function(){
    setTimeout( () => that.call(this, ...arguments), ms)  } ;
 
}; 

let user  = {
name: "chenyuze",
f(a, b) {
  alert(this.name + a + b);
}
};


// user.f = user.f.defer(1000);

// user.f(1, 2); // 1 秒后显示 "Hello!"


user.f = user.f.defer(1000);

//user.f = user.f.bind(user);

user.f(1, 2);

let sym = Symbol("id");
let parSym = Symbol("id");
let parUser = {
  six: "man",
  [parSym]: 0
};

let user = {
  name: "chenyuze",
  age: 18,
  [sym]: 1
};

user.__proto__ = parUser;

console.log(Object.keys(user));   //keys方法只返回对象上可枚举的属性
console.log(Object.getOwnPropertyNames(user)); //getOwnPropertyNames方法返回对象上所有属性，包括不可枚举的
console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));
//for...in可以迭代继承的属性，但不包括symbol类型和无法枚举的属性。
for (let key in user){
  console.log(key);
};


//第二参数，添加toString方法，标识符默认为false
let dictionary = Object.create(null, {
  toString : {
    value: function(){
      return Object.keys(this).join();
    }
  }
});

// 你的添加 dictionary.toString 方法的代码
// Object.defineProperty(dictionary, "toString", {
//   value: function(){
//     return Object.keys(this).join();
//   },
//   enumerable: false,
//   writable: true,
//   configurable:true
// })

// 添加一些数据
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // 这里 __proto__ 是一个常规的属性键

// 在循环中只有 apple 和 __proto__
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// 你的 toString 方法在发挥作用
alert(dictionary); // "apple,__proto__"

//判断原型上有某个实例没有的属性

function hasPrototypeProperty(object, name){
  return (! object.hasOwnProperty(name)) && (name in object);
};

//工厂函数创建对象。缺点，没有对象标识
function createObject(name, age){
let object = {};
object.name = name;
object.age = age;
object.sayName = function() {
  console.log(this.name); 
};
return object;
};


function Person(name, age){
  this.name = name;
  this.age = age;
  this.friend = ["zhouruiyang", "zhangjinhan"];
  this.sayName = function() {
     console.log(this.name); 
  };
};

Person.prototype.sayAge = function(){
console.log(this.age);
};
//构造函数创建对象。缺点：方法不能共享.
function Student(name, age, grade){
  this.grade = grade;
  this.name = "test";
   //盗用构造函数继承
  Person.call(this, name, age);
};

//函数实例作原型继承,继承方法
Student.prototype = new Person();
Student.prototype.sayGrade = function() {
  console.log(this.grade); 
};

//原型字面量作原型
// Student.prototype = createObject("chenyuze", 11);
// Object.defineProperty(Student.prototype, "Constructor", {
//     value: Student,
//     enumerable: false,
//     writable: true,
//     configurable: true
// }) ;
Student.prototype.Constructor = Student;

let chenyuze = new Student("chenyuze", 11, 5);
let lihanbin = new Student("lihanbin", 12, 6); 
chenyuze.friend.push("lianni");
console.log(chenyuze.friend);
console.log(lihanbin.friend);
chenyuze.sayName();
chenyuze.sayAge();
chenyuze.sayGrade();


console.log( hasPrototypeProperty(chenyuze, "age") );
console.log( chenyuze.hasOwnProperty("age") );
console.log("name:" + chenyuze.name);
console.log("age:" + chenyuze.age);
console.log("grade:" + chenyuze.grade);

console.log(chenyuze.__proto__ );
console.log(chenyuze.Constructor == Student);//false，object 而非 student
console.log(chenyuze instanceof Student);
console.log( Student.prototype.isPrototypeOf(chenyuze) );

//原型式继承：适合不需要创建构造函数，需要在对象间共享信息。引用值会共享。

let Person1 = {
  name: "chenyuze",
  age: 11

};

// let chenyuze = Object.create(Person, {
//     grade: {
//         value: 5,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// chenyuze.grade = 6;
// console.log(chenyuze.grade);
// console.log(chenyuze.__proto__.Constructor);

//寄生式继承

function createObject(obj){
    function f(){};
    f.prototype = obj;
    let newObj = new f();
    newObj.sayName = function(){
        console.log(this.name);
    };
    return newObj;
    
};

let chenzhongyan = createObject(Person1);
console.log(chenzhongyan.grade);
console.log(chenzhongyan.__proto__.Constructor);
console.log( chenzhongyan.sayName() );

//寄生式组合继承
function inheritPrototype(subType, superType){
    // subType.prototype = Object.create(superType.prototype);
    // //subType.prototype.__proto__ = superType.prototype;
    // subType.prototype.Constructor = subType;
    let prototype = Object.create(superType.prototype);
    //prototype.Constructor = subType;
    Object.defineProperty(prototype, "constructor", {
        value: subType,
        writable: true,
        enumerable: false,
        configurable: true
    });
    subType.prototype = prototype;

}

function Person(name, age){
    this.name = name;
    this.age = age;
    this.friend = ["zhouruiyang", "zhangjinhan"];
    this.sayName = function() {
       console.log(this.name); 
    };
  };
  
  Person.prototype.sayAge = function(){
  console.log(this.age);
  
  };

  //Person.prototype.constructor = Person;
  //构造函数创建对象。缺点：方法不能共享.
  function Student(name, age, grade){
    this.grade = grade;
    this.name = "test";
     //盗用构造函数继承
    Person.call(this, name, age);
  };
  
  //函数实例作原型继承,继承方法
  //Student.prototype = new Person();
  inheritPrototype(Student, Person);
  Student.prototype.sayGrade = function() {
    console.log(this.grade); 
  };
  

  let stu1 = new Student("liutao", 37, 88);
  let personPro = Object.getPrototypeOf(stu1.__proto__);
  console.log(stu1.name);
  console.log( stu1.sayName() );
  console.log( stu1.sayAge() );
  console.log( stu1.__proto__.constructor == Student);
  console.log( personPro);
  console.log( personPro.constructor == Person);
  
  console.log( stu1.__proto__.sayGrade.call(stu1));
  console.log( stu1.__proto__.sayAge.call(stu1));
  //console.log( stu1.__proto__.sayName.call(stu1));
  //console.log( stu1.__proto__.sayName());
  console.log( stu1 instanceof Student);
  console.log( stu1 instanceof Person);
  console.log( stu1 instanceof Object);

  console.log(Object.getOwnPropertyDescriptors(personPro));
  console.log(Object.getOwnPropertyDescriptors(stu1.__proto__));

  class User {
    
    constructor(name) {
      // 调用 setter
      this.name = name;
      this.age = 8;
      
    }
    
    

    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }

    // click(){          //类字段，每个实例化对象都有一个独立的方法,使用箭头函数可以得到对象的this，而函数表达式或者函数声明则不行
    //     console.log(this.age);
    //}
    click = () => {          //类字段，每个实例化对象都有一个独立的方法,使用箭头函数可以得到对象的this，而函数表达式或者函数声明则不行
      console.log(this.name);
    }
    abc = "chenyuze"        //类字段，每个实例化对象都有一个独立的属性
    show(){
      console.log(this.age);
    }
  
}
  //User.nameField = "test";  //可以在类外部添加类/原型的属性，不建议。
  
  let user = new User("John");
  let user1 = new User("Jake");
  console.log(user.name); // John

  console.log(user.abc);
  console.log(user.click);
  console.log(user1.click === user.click);
  setTimeout(user.click, 1000);
  console.log( User.prototype)
  console.log( user)

// class Button {
//     constructor(value) {
//       this.value = value;
//     }
    
//     name = "test"

//     click = () => {
//       alert(this.value);
//     }
//   }
  
//   let button = new Button("hello");
//   console.log(button.name);
//   setTimeout(button.click, 1000); // hello
  
// var name = "zhouxingchi";
// let test= {
//   name: "liudehua",
//   sayName: function(){
//     console.log(this.name);
//   },
//   sayName1: () => {
//     console.log(this.name)
//   }
// };

// test.sayName();  //显示“liudehua”
// test.sayName1(); //显示“zhouxingchi”


class Clock {
  constructor({ template }){
    this.template = template;
  }

 // get timer() {
 //   return this._timer;
 // }

 // set timer(value) {
 //   this._timer = value;
 // }

 render() {
   let date = new Date();

   let hours = date.getHours();
   if (hours < 10) hours = '0' + hours;

   let mins = date.getMinutes();
   if (mins < 10) mins = '0' + mins;

   let secs = date.getSeconds();
   if (secs < 10) secs = '0' + secs;

   let output = this.template
   .replace('h', hours)
   .replace('m', mins)
   .replace('s', secs);

   console.log(output);
 }

 stop() {
   clearInterval(this._timer);
 }

 start() {
   this.render();
   this._timer = setInterval(() => this.render(), 1000);
 }

}

let clock = new Clock({template: 'h:m:s'});
clock.start();

let animal = {
  eat: function() { // 这里是故意这样写的，而不是 eat() {...
    // ...
    console.log("hello");
  }
};

let rabbit = {
  __proto__: animal,
  eat(){               //不能写成 eat: function() { }
    super.eat();
  }
};

rabbit.eat();  // 错误调用 super（因为这里没有 [[HomeObject]]）

class Animal {
  static grade = 6;
  #test = "test";
  constructor(){
    this.name = "baba";
  }

  // get test(){
  //   return this.#test;
  // }
}
Animal.age = 18;
Animal.sayName =function(obj){
  console.log(obj.name + this.age);
}

class Student {
  static age = 16;
  constructor() {
    this.name = "chenyuze";
  }
}

Student.sayName = function(obj){
  console.log(obj.name);
}

let newAnimal = new Animal();
Animal.sayName(newAnimal);
alert(newAnimal.name) ;

class Rabbit extends Animal {}

let newRabbit = new Rabbit();
alert(newRabbit.name) ;


console.log(Rabbit.prototype.__proto__ === Animal.prototype);
console.log(Rabbit.prototype.__proto__.__proto__ === Object.prototype);
console.log(Rabbit.__proto__ === Animal)
console.log(Rabbit.__proto__.__proto__ === Function.prototype);
console.log(Rabbit.__proto__.__proto__.__proto__ === Object.prototype);
console.log(Rabbit.__proto__.__proto__.__proto__.__proto__ === null);

console.log(newRabbit.name + newRabbit.age + Rabbit.grade);
console.log( Rabbit.sayName(newAnimal) );

let num = 123;
let fun = function(){};
let str = "I`m a good boy!";
let arr = [1,2,3];
let obj1 = {
  age: 18
};
let obj = {
  [Symbol.toStringTag]: "Obj"

};

//let obj2 = Object.defineProperty( obj, Object.getOwnPropertyDescriptor(obj1, "name") );
Object.defineProperty(obj1, "name", {
  value: "chenyuze",
  enumerable: true
});

let obj2 = Object.assign( obj, obj1 );

// {
//   valus: "chenyuze",
//   writable: true
// };
let nl = null;
let ud = undefined;
let toStr = Object.prototype.toString;

let eventMixin = {
  /**
   * 订阅事件，用法：
   *  menu.on('select', function(item) { ... }
  */
 on(enventname, handler){
  if(!this.handlers) this.handlers = {};
  if(!this.handlers[enventname] )  this.handlers[enventname] = [];
  this.handlers[enventname].push(handler);
 },
/**
   * 取消订阅，用法：
   *  menu.off('select', handler)
   */
 off(enventname, handler){
   let handlers = this.handlers?.[enventname];
  if(!handlers) return;
  //以下代码实现删除所有匹配的时间处理程序！
  for (let i = 0; i < handlers.length; i++){
    if (handlers[i] === handler)
    handlers.splice(i--, 1);
  };
  },
  // 以下代码只实现删除第一个匹配的事情处理程序，不全面
  // let index = this.handlers[enventname].indexOf(handler);
  // if(index != -1)
  // this.handlers[enventname].splice(index, 1);
 
  /**
   * 生成具有给定名称和数据的事件
   *  this.trigger('select', data1, data2);
   */
  trigger(enventname, ...args){
    let handlers = this.handlers?.[enventname];
    if(!handlers) return;
    handlers.forEach( handler => handler.apply(this, args) );
  }

};


class Menu{
  choose(value){
    this.trigger("select", value);
  }
}

function hello(value){
  alert(`hello: ${value}`);
}

function iloveyou(value){
  alert(`I love you: ${value}`);
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on("select", hello);
menu.on("select", iloveyou);
menu.off("select", hello);
menu.choose("123");

//try...catch...finally,throw,rethrow
let userJson =`{ "age": 18}`;

try{
try{
  abc;
  let user = JSON.parse(userJson);
  
  if (!user.name) throw new SyntaxError("name is not define!");
  alert(user.name);
}catch(e){
  if (e.name === "SyntaxError")
    alert(e);
  else
    throw e;
}
}catch(e){
  alert(e);
}

alert("finally");


class myError extends Error{
  constructor(message){
    super(message);
    this.name = this.constructor.name;
  }
}

class validationError extends myError{}

class propertyRequiredError extends validationError{
  constructor(message){
    super("no property: " + message);
    this.property = message;
  }
}

let userJson =`{ "age": 18}`;
try{
  let user = JSON.parse(userJson);
  if (!user.name) throw new propertyRequiredError("name");
} catch(e) {
  alert(e);
  alert(e.property);
}