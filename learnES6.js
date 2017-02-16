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
console.trace("hello \n world! \n".repeat(2));
console.trace("hello world!".repeat(2.2));
console.trace("hello world!".repeat(-2));
console.trace("hello world!".repeat(Infinity));

var world="world";
var templetObj={hello:"say hi",to:"to you"};
console.trace(`hello world!`);
console.trace(`\`,\\,\\\`,\t,\n,\s`);
console.trace(`\`,\\,\\\`,\t,\n,\s`);
console.trace(`hello ${world}`);
console.trace(`${3+44}+${3+2}=${3+44+3+2} \n${1===1} \n${templetObj.hello} ${templetObj.to}`);
console.trace(`${templetObj.sayhello}`);
console.trace(`print out \n\t${console.trace(`print from inside\n\t${console.trace(`inside!`)}`)}`);
console.trace(`hello this is a fuunction\n${function(){return "print from function"}()}`);

// 写法一
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack') ;

// 写法二
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
func('Jack') ;

console.trace`hello world!`;
console.trace("hello world!");
function consoletrace (str) {
    console.trace(str);
}
consoletrace`hello world!`;
consoletrace("hello world");

var a = 5;
var b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;

console.trace(String.raw`Hi\n${2+3}!`); //不会输出换行符 而是直接输出\n
console.trace(`Hi\n${2+3}`);
console.trace(String.raw`hello \\ world`);
console.trace(`hello \\ world`);
console.trace(String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2));

var regex = new RegExp(/xyz/, 'i');
var reg=new RegExp(/^[\w\W]+$/,"ig");
console.trace(regex.test("xyz"));
console.trace(reg.test("1234123asd"));
console.trace(regex.flags);
console.trace(reg.flags);

console.trace(/^\uD83D/u.test('\uD83D\uDC2A'));

console.trace(/^\uD83D/.test('\uD83D\uDC2A'));

console.trace(/\u{61}/.test('a'));
console.trace(/\u{61}/u.test('a'));
console.trace(/\u{20BB7}/u.test('𠮷'));
console.trace(/a{2}/.test('aa'));
console.trace(/a{2}/u.test('aa'));
console.trace(/𠮷{2}/.test('𠮷𠮷'));
console.trace(/𠮷{2}/u.test('𠮷𠮷'));
console.trace(/^\S$/.test('𠮷'));
console.trace(/^\S$/u.test('𠮷'));

var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

console.trace(r1.exec(s));
console.trace(r2.exec(s));

console.trace(r1.exec(s));
console.trace(r2.exec(s));

var s = 'aaa_aa_a';
var r = /a+_/y;
console.trace(r.exec(s));
console.trace(r.exec(s));

const REGEX = /a+_/g;
REGEX.lastIndex = 2;
const match = REGEX.exec('aaa_aa_a');
console.trace(match);
console.trace(match.index);
console.trace(REGEX.lastIndex);
console.trace(REGEX.exec('aaaa_'));

console.trace(0b1000000000===1024);
console.trace(0o767===503);
console.trace(Number(0b1000000000));
console.trace(Number(0o767));


console.trace(Number.isFinite(15)); // true
console.trace(Number.isFinite(0.8)); // true
console.trace(Number.isFinite(NaN)); // false
console.trace(Number.isFinite(Infinity)); // false
console.trace(Number.isFinite(-Infinity)); // false
console.trace(Number.isFinite('foo')); // false
console.trace(Number.isFinite('15')); // false
console.trace(Number.isFinite(true)); // false

console.trace(Number.isNaN(NaN));// true
console.trace(Number.isNaN(15));// false
console.trace(Number.isNaN('15')); // false
console.trace(Number.isNaN(true)); // false
console.trace(Number.isNaN(9/NaN));// true
console.trace(Number.isNaN('true'/0)); // true
console.trace(Number.isNaN('true'/'true')); // true

// ES5的写法
console.trace(parseInt('12.34'));// 12
console.trace(parseFloat('123.45#')); // 123.45

// ES6的写法
console.trace(Number.parseInt('12.34')); // 12
console.trace(Number.parseFloat('123.45#')); // 123.45

//两个标准中的方法对比
console.trace(Number.parseInt===parseInt); //true
console.trace(Number.parseFloat===parseFloat); //true

console.trace(Number.isInteger(25));// true
console.trace(Number.isInteger(25.0));// true
console.trace(Number.isInteger(25.1)); // false
console.trace(Number.isInteger("15"));// false
console.trace(Number.isInteger(true));// false

console.trace(Number.EPSILON);
console.trace(Number.EPSILON.toFixed(20));
console.trace(5.551115123125783e-17.toFixed(20));
