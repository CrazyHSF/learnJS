/**
 * Created by skl on 2017/2/7.
 */
{
    var x=3;
    let y=4;
}
console.trace(x);
console.trace(y);

for(let i=0;i<4;i++){
    for(var j=0;j<5;j++){
    }
}
console.trace(j);
console.trace(i);   

console.trace(x);
var x;

cosnole.trace(y);
let y

{
    var x;
    var x;
}

{
    let x;
    let x;
}


{
    console.trace(x);
    var x
    console.trace(x);
    x=2;
    console.trace(x);
}

{
    console.trace(y);
    let y;
    console.trace(y);
    y=3;
    console.trace(y);
}

{
    let y;
    console.trace(y);
    y=3;
    console.trace(y);
}

var tmp = new Date();

function f() {
  console.trace(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f();

var tmp = new Date();

function f() {
  console.trace(tmp);
  if (false) {
    let tmp = "hello world";
  }
}

f();
 

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.trace(n); 
}

function f2() {
  var n = 5;
  if (true) {
    var n = 10;
  }
  console.trace(n); 
}

f1();
f2();

 //es5 报错 es6 不报错
'use strict';
if (true) {
  function f() {}
}

try {
  function f() {}
} catch(e) {
}


const obj={};
obj.name="obj";
obj.value="hello world";
obj.obj={}
console.trace(obj.name);
console.trace(obj.value);



var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};

constantize(obj);
obj.flag="freezen";
obj.name="name";
console.trace(obj.flag);
console.trace(obj.name);


window.a="this is window.a ";
{
  var a="this is a ";
}
console.trace(a);
console.trace(window.a);

window.a="this is window.a";
{
  let a="this is a";
  let b="this is b"
}
console.trace(a);
console.trace(window.a);
console.trace(window.b);

let [a, b, c] = [1, 2, 3];
console.trace(a);
console.trace(b);
console.trace(c);

let [a, [...b], d] = [1, [2, 3], 4];
console.trace(a);
console.trace(b);
console.trace(c);

let [x, y, z] = new Set(['a', 'b', 'c']);

console.trace(x);
console.trace(y);
console.trace(z);

function* fibs() {  //function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，返回一个Generator对象。
    let a = 0;
    let b = 1;
    while (true) {
        yield a;     //每次返回一个a的值 其最终相当于返回一个数组.
        [a, b] = [b, a + b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.trace(first);
console.trace(second);
console.trace(third);
console.trace(fourth);
console.trace(fifth);
console.trace(sixth);


let [a='a', b='b', c='c' , d] = [null, ,undefined,'d'];

console.trace(a);
console.trace(b);
console.trace(c);
console.trace(d);


let [a='a', b='b', c='c' , d] = (new Set([null, ,undefined,'d']));

console.trace(a);
console.trace(b);
console.trace(c); // d
console.trace(d); // undefined


let [a='a', b='b', c='c' , d] = (new Set(null,'bb',undefined,'d'));

console.trace(a);
console.trace(b);
console.trace(c);
console.trace(d);

function f() {
    console.trace('aaa');
    return 2;
}

let [x = f()] = [1];
// let [y = f()] = [];
console.trace(x);
// console.trace(y);

let {hello,name}={hello:'hi! ',name:'Tom'}
console.trace(hello+name);

let {a,b,c,d,e}={a:'a',b:undefined,d:'d',e:c}