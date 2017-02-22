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

var r = /hello\d/y;
console.trace(r.sticky);
var x = /hello\d/;
console.trace(x.sticky);


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

console.trace(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1); //true
console.trace(Number.MAX_SAFE_INTEGER === 9007199254740991) //true
console.trace(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER)//true
console.trace(Number.MIN_SAFE_INTEGER === -9007199254740991)//true

console.trace(Number.isSafeInteger('a')); // false
console.trace(Number.isSafeInteger(null)); // false
console.trace(Number.isSafeInteger(NaN));// false
console.trace(Number.isSafeInteger(Infinity)); // false
console.trace(Number.isSafeInteger(-Infinity)); // false

console.trace(Number.isSafeInteger(3)); // true
console.trace(Number.isSafeInteger(1.2)); // false
console.trace(Number.isSafeInteger(9007199254740990)); // true
console.trace(Number.isSafeInteger(9007199254740992)); // false

console.trace(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); // false
console.trace(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // true
console.trace(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.trace(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

console.trace(Number.isSafeInteger(9007199254740993));// false
console.trace(Number.isSafeInteger(990));// true
console.trace(Number.isSafeInteger(9007199254740993 - 990));//true
console.trace(9007199254740993 - 990);
// 返回结果 9007199254740002
// 正确答案应该是 9007199254740003
console.trace(9007199254740993 === 9007199254740992);


console.trace(Math.trunc(2.3));
console.trace(Math.trunc(2.9));
console.trace(Math.trunc(-2.3));
console.trace(Math.trunc(-2.8));
console.trace(Math.trunc('2.3'));//2
console.trace(Math.trunc('-2.3'));//-2
console.trace(Math.trunc(NaN));
console.trace(Math.trunc('foo'));
console.trace(Math.trunc(null));
console.trace(Math.trunc(undefined));
console.trace(Math.trunc());

console.trace(Math.sign(-9.889));
console.trace(Math.sign(-0));
console.trace(Math.sign(+0));
console.trace(Math.sign(+3.898));
console.trace(Math.sign('-2.36'));
console.trace(Math.sign('+2.389'));
console.trace(Math.sign(NaN));
console.trace(Math.sign('foo'));
console.trace(Math.sign());
console.trace(Math.sign(null));
console.trace(Math.sign(undefined));

console.trace(Math.cbrt(-1));
console.trace(Math.cbrt(0));
console.trace(Math.cbrt(1));
console.trace(Math.cbrt(2));
console.trace(Math.cbrt('-1'));
console.trace(Math.cbrt('+1'));
console.trace(Math.cbrt('foo'));
console.trace(Math.cbrt(NaN));
console.trace(Math.cbrt());
console.trace(Math.cbrt(null));
console.trace(Math.cbrt(undefined));

console.trace(Math.clz32(0));
console.trace(Math.clz32(1));
console.trace(Math.clz32(1000)); //默认其为十进制数 运行的时候转化为二进制之后在继续函数
console.trace(Math.clz32(0b01000000000000000000000000000000));
console.trace(Math.clz32(0b00100000000000000000000000000000));
console.trace(Math.clz32()); // 32
console.trace(Math.clz32(NaN));// 32
console.trace(Math.clz32(Infinity)); // 32
console.trace(Math.clz32(null));// 32
console.trace(Math.clz32('foo')); // 32
console.trace(Math.clz32([]));// 32
console.trace(Math.clz32({})); // 32
console.trace(Math.clz32(true));// 31
console.trace(Math.clz32(1<<1));
console.trace(Math.clz32(1<<2));
console.trace(Math.clz32(1<<29));
console.trace(Math.clz32(2.3));
console.trace(Math.clz32(3.9));

console.trace(Math.imul(2,4));
console.trace(Math.imul(-1,8));
console.trace(Math.imul(-2,-2));

console.trace(0x7fffffff * 0x7fffffff);//0
console.trace(Math.imul(0x7fffffff * 0x7fffffff));//1

console.trace(Math.fround(0));     // 0
console.trace(Math.fround(1));     // 1
console.trace(Math.fround(1.337)); // 1.3370000123977661
console.trace(Math.fround(2.1579)); // 2.157900094985962
console.trace(Math.fround(3.157852)); // 3.1578519344329834
console.trace(Math.fround(1.5));   // 1.5
console.trace(Math.fround(NaN));   // NaN

console.trace(Math.hypot(3, 4)); // 5
console.trace(Math.hypot(3, 4, 5));     // 7.0710678118654755
console.trace(Math.hypot());            // 0
console.trace(Math.hypot(NaN));         // NaN
console.trace(Math.hypot(3, 4, 'foo')); // NaN
console.trace(Math.hypot(3, 4, '5'));   // 7.0710678118654755
console.trace(Math.hypot(-3));          // 3

console.trace(Math.expm1(-1)); // -0.6321205588285577
console.trace(Math.expm1(0));  // 0
console.trace(Math.expm1(1));  // 1.718281828459045))

console.trace(Math.log1p(1));
console.trace(Math.log1p(0));
console.trace(Math.log1p(-1));
console.trace(Math.log1p(-2));

console.trace(Math.log10(2));
console.trace(Math.log10(1));
console.trace(Math.log10(0));
console.trace(Math.log10(-2));
console.trace(Math.log10(10));

console.trace(Math.log2(2));
console.trace(Math.log2(1));
console.trace(Math.log2(0));
console.trace(Math.log2(-2));
console.trace(Math.log2(1024));

console.trace(2**2);
console.trace(1**1);
let a=2**2;
console.trace(a);
let b=3;
b**=b;
console.trace(b);

console.trace(Math.pow(99, 99));
// 3.697296376497263e+197

console.trace(99 ** 99);
// 3.697296376497268e+197

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var tempMap = new Map();
var tempSet = new Set();

tempMap.set('0','a');
tempMap.set('1','b');
tempMap.set('2','c');
tempSet.add('a');
tempSet.add('b');
tempSet.add('c');


// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
var arr2 = [].slice.call(tempMap); // ['a', 'b', 'c']
var arr3 = [].slice.call(tempSet); // ['a', 'b', 'c']
console.trace(arr1);
console.trace(arr2);
console.trace(arr3);
// ES6的写法
let arr4 = Array.from(arrayLike); // ['a', 'b', 'c']
let arr5 = Array.from(tempMap); // ['a', 'b', 'c']
let arr6 = Array.from(tempSet); // ['a', 'b', 'c']
console.trace(arr4);
console.trace(arr5);
console.trace(arr6);

// arguments对象
function foo() {
    var args = Array.from(arguments);
    console.trace(args);
}

foo(1,2,3,4,5,6,7,8,9,0);

console.trace(Array.from('hello world!'));
console.trace(Array.from({length:3}));
console.trace(Array.from([1,2,3,4]));

console.trace(Array.from([2,4,6], x => x * x));
// 等同于
console.trace(Array.from([1,2,3,4,]).map(x => x * x));

console.trace(Array.from([1, 2, 3], (x) => x * x));

function countSymbols(string) {
    return Array.from(string).length;
}

console.trace(countSymbols('hello world!'));



console.trace(Array()); // []
console.trace(Array(3)); // [, , ,]
console.trace(Array(3, 11, 8)); // [3, 11, 8]

console.trace(Array.of(3, 11, 8)); // [3,11,8]
console.trace(Array.of(3)); // [3]
console.trace(Array.of(3).length);// 1

console.trace([1,2,3,4,5,6,7,8].copyWithin(0,2));
console.trace([1,2,3,4,5,6,7,8].copyWithin(2.5));
console.trace([1,2,3,4,5,6,7,8].copyWithin(0,2,5));
console.trace([1,2,3,4,5,6,7,8].copyWithin(0,5,2));
console.trace([1,2,3,4,5,6,7,8].copyWithin(5,1,2));

// 将3号位复制到0号位
console.trace([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
console.trace([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
console.trace([].copyWithin.call({length: 5, 3: 1}, 0, 3));
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
var i32a = new Int32Array([1, 2, 3, 4, 5]);
console.trace(i32a.copyWithin(0, 2));
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署TypedArray的copyWithin方法的平台
// 需要采用下面的写法
console.trace([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));
// Int32Array [4, 2, 3, 4, 5]

console.trace([1,2,3,4,5,6].find((x)=>x>4));
console.trace([1,2,3,4,5,6].find((x)=>x>6));
console.trace([1,2,3,4,5,6].find((value,index,arra)=>value>4));
console.trace([1,2,3,4,5,6].find((value,index,arra)=>value>6));
console.trace([1,2,3,4,5,6].findIndex((x)=>x>4));
console.trace([1,2,3,4,5,6].findIndex((x)=>x>6));
console.trace([1,2,3,4,5,6].findIndex((value,index,arr)=>value>4));
console.trace([1,2,3,4,5,6].findIndex((value,index,arr)=>value>6));

console.trace([NaN].indexOf(NaN));
// -1
console.trace([NaN].findIndex(y => Object.is(NaN, y)));
// 0
console.trace(new Array(5).fill(1));
console.trace(Array.from([1,2,3,4,5,6]).fill(2));
console.trace(Array.from([1,2,3,4,5,6]).fill(3,2,4));
console.trace(Array.from([1,2,3,4,5,6]).fill(3,2));

for(let [index,value] of [1,2,3,4,5,6,7].entries()){
    console.trace(index+':'+value+"\n");
}

for(let x of [1,2,3,4,5,6,7].keys()){
    if(x>2) {
        console.trace(x);
    }
}

for(let y of [1,2,3,4,5,6,7].values()){
    if(y>2) {
        console.trace(y);
    }
}

let letter = ['a', 'b', 'c'];
let entries = letter.entries();
let keys = letter.keys();
let values = letter.values();
console.trace(entries.next().index);
console.trace(entries.next().value);
console.trace(entries.next().index);
console.trace(entries.next().value);
console.trace(entries.next().index);
console.trace(entries.next().value);

console.trace(keys.next());
console.trace(keys.next());
console.trace(keys.next());

console.trace(values.next());
console.trace(values.next());
console.trace(values.next());

function saySomething (x,y){
    y=y||"world";
    console.trace(x+"\t"+y);
}
saySomething("hello");
saySomething("hello","Tom");

function saySomething(x,y){
    if(y !== undefined){
        console.trace(x+"\t"+y);
    }else{
        console.trace(x+"\tworld");
    }
}
saySomething("hello");
saySomething("hello","Tom");

function saySomething (x,y='world'){
    console.trace(x+"\t"+y);
}
saySomething("hello");
saySomething("hello","Tom");

function point(x=0,y=0){
    this.x=x;
    this.y=y;
}
let p1= new point();
let p2= new point(2,3);
console.trace(p1.x,p1.y);
console.trace(p2.x,p2.y);

function point(x=0,y=0){ //error
    let x;
    let y;
}

function add({x,y=3}){
    console.trace(x+y);
}

add(1,2);
add(1);
add({});
add({x:1,y:2});
add({x:1});
add();

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.trace(method);
}

fetch('http://example.com', {})
// "GET"

fetch('http://example.com')
// error

function fetch(url, { method = 'GET' } = {}) {
    console.trace(method);
}

fetch('http://example.com')
// "GET"

// 写法一
function m1({x = 0, y = 0} = {}) {
    console.trace("["+x+","+ y+"]");
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    console.trace("["+x+","+ y+"]");
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

function func(x=1,y,z) {
    console.trace(x+y+z);
}
func(1,2,3);
func(,2,3);
func(undefined,2,3);
func(1,,3);
func(1,undefined,3);
func(1,2,);
func(1,2,undefined);
func();

function func(x,y=1,z){
    console.trace(x+y+z);
}
func(1,2,3);
func(,2,3);
func(undefined,2,3);
func(1,,3);
func(1,undefined,3);
func(1,2,);
func(1,2,undefined);
func();

function func(x,y,z=1){
    console.trace(x+y+z);
}
func(1,2,3);
func(,2,3); //error
func(undefined,2,3);
func(1,,3);//error
func(1,undefined,3);
func(1,2,); //error
func(1,2,undefined);
func();

function func(x,y,z=1){

}
console.trace(func.length);

function func(x,y=1,z=2){
}
console.trace(func.length);

function func(x=1,y,z){
}
console.trace(func.length);

function func(x=1,y=3,z){
}
console.trace(func.length);

var x = 1;

function f(x, y = x) {
    console.log(y);
}

f(2) // 2

let x = 1;

function f(y = x) {
    let x = 2;
    console.log(y);
}

f() // 1

//默认值在调用前必须先声明
function f(y = x) {
    let x = 2;
    console.log(y);
}

f() // ReferenceError: x is not defined

var x = 1;
//依旧报错
function foo(x = x) {
    // ...
}

foo() // ReferenceError: x is not defined