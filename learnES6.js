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

console.trace(a); //a
console.trace(b); //b
console.trace(c); //c
console.trace(d); //undefined

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

let y="e";
let {a,b,c,d="d",e=y}={a:'a',b:undefined,d:undefined,}
console.trace(a);
console.trace(b);
console.trace(c);
console.trace(d);
console.trace(e);

let {tag:x,flag:y}={flag:"flag",tag:"tag"}
console.trace(x);
console.trace(y);
console.trace(tag);
console.trace(flag);

let foo;
({foo} = {foo: 1}); 

let baz;
({bar: baz} = {bar: 1}); 

console.trace(foo);
console.trace(baz);

let y
let {flag:y}={flag:"flag"};
console.trace(y);

let {flag,value:{date:{x,y,tag:value}}}={flag:"falg",value:{date:{x:1,y:2,tag:"tag"}}}
console.trace(flag,x,y,value);

let {foo:{bar}}={flag:{baz:"baz"}}; //报错

let x;
{x} = {x: 1};      //错误,被解释为了代码块,

let x;  
({x} = {x: 1}); //正确,

let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
console.trace(first,last);

let [a,b,c,d,e]="hello";
let {length:len}="hello";
console.trace(a,b,c,d,e,len);

let {toString: s} = 123;
s === Number.prototype.toString // true
console.trace(s);

let {toString: s} = 123;
s === Number.prototype.toString  // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
 //s在最后将被赋值为一个函数，

let { value: x } = undefined; // TypeError
let { value: y } = null; // TypeError
//undefined 和 null并不能被转化为对象，最后将会报错。

function add([x,y]){
    return x*y;
}

function and({x,y}={}) {
    return x*y;
}

function func({x,y=1,z}={}) {
    return x/y+z;
}
console.trace(add([1,4]));
console.trace(and({x:1,y:4}));
console.trace(func({x:4,z:1}));

// String for...of
for (let c of "hello world!"){
    console.trace(c);
}

var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.trace(text[i]);
}


for (let i of text) {
    console.trace(i);
}

var s = 'Hello world!';

console.trace(
s.startsWith('world'),
s.endsWith('Hello'),
s.includes('Hello'),
s.startsWith('world', 6),
s.endsWith('Hello', 5),
s.includes('Hello', 6)
);

console.trace("hello".repeat(1));
console.trace("hello world!".repeat(2));
console.trace("hello \nworld! \n".repeat(2));
console.trace("hello world!".repeat(2.2));
console.trace("hello world!".repeat(-2));
console.trace("hello world!".repeat(Infinity));

