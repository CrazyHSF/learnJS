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
func(,2,3); //error
func(undefined,2,3);
func(1,,3); //error
func(1,undefined,3);
func(1,2,); //error
func(1,2,undefined);
func();

function func(x,y=1,z){
    console.trace(x+y+z);
}
func(1,2,3);
func(,2,3);//error
func(undefined,2,3);
func(1,,3); //error
func(1,undefined,3);
func(1,2,); //error
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
func(1,2); // 4
func(1,2,undefined);// 4
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

function func(x,y=1,z) {
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

let foo = 'outer';

function bar(func = x => foo) {
    let foo = 'inner';
    console.log(func()); // outer
}

bar();

function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}

bar() // ReferenceError: foo is not defined

var x = 1;
function foo(x, y = function() { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}

foo() // 3
x // 1

var x = 1;
function foo(x, y = function() { x = 2; }) {
    x = 3;
    y();
    console.log(x);
}

foo() // 2
x // 1

function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

foo() // Error: Missing parameter


function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

console.trace(add(2, 5, 3));// 10

function strCat(...str){
    var retStr="";
    for(var tempStr of str){
        retStr=retStr+tempStr
    }
    return retStr;
}
console.trace(strCat("hello"," ","world","!!!"));

function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

var a = [];
push(a, 1, 2, 3);
console.trace(a);

function push(...items,array) {     //error:Rest parameter must be last formal parameter
    items.forEach(function(item) {
        array.push(item);
    });
}

var a = [];
push( 1, 2, 3,a);
console.trace(a);

console.trace((function(a) {}).length); // 1
console.trace((function(...a) {}).length); // 0
console.trace((function(a, ...b) {}).length);  // 1

console.trace(...[1, 2, 3]);
// 1 2 3

console.trace(1, ...[2, 3, 4], 5);
// 1 2 3 4 5

function f(v, w, x, y, z) {
    console.trace(v);
    console.trace(w);
    console.trace(x);
    console.trace(y);
    console.trace(z);
}
var args = [0, 1];
f(-1, ...args, 2, ...[3]);

//由于JavaScript不提供求数组最大元素的函数，所以只能套用Math.max函数，将数组转为一个参数序列，然后求最大值。

// ES5的写法
console.trace(Math.max.apply(null, [14, 3, 77]));

// ES6的写法
console.trace(Math.max(...[14, 3, 77]));

// 等同于
console.trace(Math.max(14, 3, 77));

// ES5的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.trace(arr1);
// ES6的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.trace(arr1);
// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
new Date(...[2015, 1, 1]);


var newArray=[...[1,2,3],...[4,5,6],...[7,8,9]];
console.trace(newArray); //[1,2,3,4,5,6,7,8,9]

[a,...more]=newArray;
console.trace(a,more);

const [first, ...rest] = [1, 2, 3, 4, 5];
console.trace(first); // 1
console.trace(rest); // [2, 3, 4, 5]

const [first, ...rest] = [];
console.trace(first); // undefined
console.trace(rest);  // []:

const [first, ...rest] = ["foo"];
console.trace(first);  // "foo"
console.trace(rest);   // []

const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错

console.trace([...'hello']);

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
console.trace(arr);


var go = function*(){
    yield 1;
    yield 2;
    yield 3;
};

console.trace([...go()]); // [1, 2, 3]

//
var obj = {a: 1, b: 2}; //没有iterator接口的对象
let arr = [...obj]; // TypeError: Cannot spread non-iterable object

//ES6规定
//只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
// 报错
function doSomething(a, b = a) {
    'use strict';
    // code
}

// 报错
const doSomething = function ({a, b}) {
    'use strict';
    // code
};

// 报错
const doSomething = (...a) => {
    'use strict';
    // code
};

const obj = {
    // 报错
    doSomething({a, b}) {
        'use strict';
        // code
    }
};


'use strict';

function doSomething(a, b = a) {
    console.trace(a,b);
}
doSomething("hello!  ");

const doSomething = (function () {
    'use strict';
    return function(value = 42) {
        return value;
    };
}());
doSomething();

function theName() {

}
console.trace(theName.name);

var theName=function(){

}
console.trace(theName.name);

var theName=function anotherName(){

}
console.trace(theName.name);

console.trace((new Function).name);// "anonymous"


//箭头函数

var add =(x,y)=>x+y;

//等同于
function add(x,y){
    return  x+y;
}
console.trace(1,2);
console.trace("1","2");

const isEven = n => n % 2 == 0;

//等同于
function isEven(n){
    return n%2;
}

const square = n => n * n;

//等同于
function square(n){
    return n*n;
}

sonsole.trace(isEven(2));
console.trace(square(2));

const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
    return person.first + ' ' + person.last;
}
full({first:"hello",last:"world"});


function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42


var id=21;
function foo() {
    setTimeout(function () {
        console.log('id:', this.id);
    },100);
}

foo.call({ id: 42 });
//id: 21

var s1=0;
var s2=0;

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数 this 指向定义的环境 在此为当前类
    setInterval(() => this.s1++, 1000);
    // 普通函数 this 指向当前运行的环境 这里的this指向全局环境
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.trace('timer.s1: ', timer.s1), 3100);
setTimeout(() => console.trace('timer.s2: ', timer.s2), 3100);
setTimeout(() => console.trace('s1: ', s1), 3100);
setTimeout(() => console.trace('s2: ', s2), 3100);
// timer.s1: 3
// timer.s2: 0
// s1:0
// s2: 3

//this 在es5 和es6 中的对比
// ES6
function foo() {
    var id=11;
    setTimeout(() => {
        console.trace('id:', this.id); //this 默认绑定到当前定义的最外层环境 包括当前定义的环境中的回调函数的this
    }, 100);
}
foo();
foo.call({id:111});
// ES5

function foo() {
    var id=22;
    setTimeout(function () {
        console.trace('id:', this.id); //直接使用this
    }, 100);
}
foo();
foo.call({id:222});

function foo() {
    var id=33;
    var _this = this; //防止 this 指向预期意以外的地方,所以现将其当前的值记录下来,

    setTimeout(function () {
        console.trace('id:', _this.id);
    }, 100);
}
foo();
foo.call({id:333});



function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id); //this是定义环境下最外层的this,即这个this是foo的this 里面的三个匿名函数并没有this
            };
        };
    };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

//实际上在箭头函数中并没有this,在箭头函数中的this都是指向最外层的函数的this
//除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。

function foo() {
    setTimeout(() => {
        console.trace('args:', arguments);
    }, 100);
}

foo(2, 4, 6, 8)
// args: [2, 4, 6, 8]

//ES5
function insert(value) {
    return {into: function (array) {
        return {after: function (afterValue) {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }};
    }};
}

//ES6
insert(2).into([1, 3]).after(1); //[1, 2, 3]
let insert = (value) => ({into: (array) => ({after: (afterValue) => {
    array.splice(array.indexOf(afterValue) + 1, 0, value);
    return array;
}})});

insert(2).into([1, 3]).after(1); //[1, 2, 3]

//ES6 管道机制例子
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

addThenMult(5);
// 12

//简化写法
const plus1 = a => a + 1;
const mult2 = a => a * 2;

mult2(plus1(5));

// λ演算的写法  并不知道是什么东西!!!!
fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// ES6的写法
var fix = f => (x => f(v => x(x)(v)))
(x => f(v => x(x)(v)));

//ES6
var key="key";
var value="value";
var obj={key,value};
console.trace(obj);
console.trace(obj.key);
console.trace(obj.value);

//ES5
var key="key";
var value="value";
var obj={key:"key",value:"value"};
//或者
var obj={key:key,value:value};
console.trace(obj);
console.trace(obj.key);
console.trace(obj.value);

//ES6
function func(x,y){
    return {x,y};
}
console.trace(func(1,2));

//ES5
function func(x,y){
    return{x:x,y:y};
}
console.trace(func(1,2));

//ES6
var obj={
    func(){
        console.trace("hello world!");
    }
}
obj.func();

//ES5
var obj={
    func:function(){
        console.trace("hello world!");
    }
}
obj.func();

var obj={
    first:"hello",
    last:"world"
}
console.trace(obj.first+obj.last);

var obj={
    'first':"hello",
    'last':"world"
}
console.trace(obj.first+obj.last);
console.trace(obj['first']+obj['last']);

var obj={
    first:"hello"
}
obj['la'+'st']="world";
console.trace(obj.first+obj.last);
console.trace(obj.first+obj['last']);

var first="hello";
var last="world";
var obj={
    [first]:"hello",
    [last]:"world"
}
console.trace(obj[first]+obj[last]);
console.trace(obj['hello']+obj['world']);

var obj={
    ['first']:"hello",
    last:"world"
}
console.trace(obj.first+obj.last);
console.trace(obj['first']+obj.last);


// 报错 属性名表达式和简洁写法不能同时使用
var foo = 'bar';
var bar = 'abc';
var baz = { [foo] };

// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};


//属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
var a={key:'hello'}
var b={key:'world'}

var obj={
    [a]:'hello',
    [b]:'world'
}
console.trace(obj); //Object {[object Object]: "world"}
console.trace(obj.a+obj.b); //NaN

const obj={
    fuc0: function() {
        console.trace("hello function()");
    },
    func1(){
        console.trace("hello func1()");
    },
    set value(x){
    },
    get value(){
    }
}
console.trace(obj.getValue.name); //error
console.trace(obj.setValue.name); //error
const setDescriptor = Object.getOwnPropertyDescriptor(obj,'value');
const getDescriptor = Object.getOwnPropertyDescriptor(obj,'value');
console.trace(setDescriptor.get.name);
console.trace(getDescriptor.set.name);

(new Function()).name // "anonymous"

var doSomething = function() {
};
console.trace(doSomething.bind().name); // "bound doSomething"

const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1]() {},
    [key2]() {},
};
console.trace(obj[key1].name);// "[description]"
console.trace(obj[key2].name); // ""

console.trace(+0 == -0);//true
console.trace(NaN == NaN);// false

console.trace(+0 === -0); //true
console.trace(NaN === NaN);// false

console.trace(Object.is(+0, -0)); // false
console.trace(Object.is(NaN, NaN)); // true

var target={a:"a"}
var resource0={b:"b"}
var resource1={c:"c"}
var resource2={d:"d"}
Object.assign(target,resource0,resource1,resource2);
console.trace(target); //Object {a: "a", b: "b", c: "c", d: "d"}

var target={a:"a"}
var resource0={b:"b"}
var resource1={c:"c"}
var resource2={d:"d"}
var resource3={d:"y",c:"x"}
Object.assign(target,resource0,resource1,resource2,resource3);
console.trace(target); //Object {a: "a", b: "b", c: "x", d: "y"}

var obj={x:"x"}

console.trace(Object.assign(obj)===obj);
// Object.assign(undefined) // 报错
// Object.assign(null) // 报错

console.trace(Object.assign(obj,null)===obj);
console.trace(Object.assign(obj,undefined)===obj);

var v1 = 'abc';
var v2 = true; //不产生影响
var v3 = 10;  //不产生影响

var obj = Object.assign({}, v1, v2, v3);
console.trace(obj); // { "0": "a", "1": "b", "2": "c" }

console.trace(Object(true));// {[[PrimitiveValue]]: true}
console.trace(Object(10)); //  {[[PrimitiveValue]]: 10}
console.trace(Object('abc')); // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}

var obj1 = {a: {b: 1}};
var obj2 = Object.assign({}, obj1); //实际上还是跟obj1中的a中的对象.

obj1.a.b = 2;
console.trace(obj2.a.b);  //其实是同一个对象

var target = { a: { b: 'c', d: 'e' } }
var source = { a: { b: 'hello' } }
Object.assign(target, source); //对象的值会被直接替换掉,因为你想当于 a的value是一个对象,给其添加的是偶相当于是给a的value重新赋值.
console.trace(target);

var arr1=[1,2,3,4,5];
var arr2=[9,8];
Object.assign(arr1,arr2);
console.trace(arr1); //[9,8,3,4,5]

class Point{
    constructor(x,y){
        Object.assign(this,{x,y});
    }
}
var point=new Point(1,2);
console.trace(point);

class Point{
    constructor(x,y){
        Object.assign(this,{x,y});
    }
}

Object.assign(Point.prototype,{
    showPoint(){
        console.trace(this.x,this.y);
    },
    clearPoint(){
        this.x=0;
        this.y=0;
    }
});


var point =new Point(1,2);
console.trace(point);
point.showPoint();
point.clearPoint();
point.showPoint();

var clone=obj=>Object.assign({},obj);

var clone=obj=>{
    let protoobj=Object.getPrototypeOf(obj);
    return Object.assign(Object.create(protoObj), obj);
}

var obj={key0:"hello"};
console.trace(Object.getOwnPropertyDescriptor(obj,'key0'));

console.trace(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable);

// es6的写法  继承someOtherObj
var obj = {
    method: function() { ... }
};
obj.__proto__ = someOtherObj;

// es5的写法 继承someOtherObj
var obj = Object.create(someOtherObj);
obj.method = function() { ... };

var o = Object.setPrototypeOf({}, null);
//运行之后的返回值和成功执行之后的桉树对象{}一样.

let proto = {};
let obj = { x: 10 };
let newObj=Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

console.trace(obj.x); // 10
console.trace(obj.y); // 20
console.trace(obj.z); // 40

console.trace(newObj===obj);

console.trace(Object.setPrototypeOf(1, {}) === 1);// true
console.trace(Object.setPrototypeOf('foo', {}) === 'foo'); // true
console.trace(Object.setPrototypeOf(true, {}) === true); // tru

console.trace(Object.setPrototypeOf(undefined, {}));
// TypeError: Object.setPrototypeOf called on null or undefined

console.trace(Object.setPrototypeOf(null, {}));
// TypeError: Object.setPrototypeOf called on null or undefined

let mySymble=Symbol();
console.trace(typeof(mySymble));


var s1 = Symbol('foo');
var s2 = Symbol('bar');
var s3 = Symbol();
var s4 = Symbol();
var s5 = Symbol("test");
var s6 = Symbol("test");

console.trace(s1.toString()); // "Symbol(foo)"
console.trace(s2.toString()) // "Symbol(bar)"
console.trace(s1);
console.trace(s2);
console.trace(s3);
console.trace(s1===s2);
console.trace(s3===s4);
console.trace(s5===s6);

console.trace(s1+s2);
console.trace(s1+1);
console.trace(s1+"hello");

var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';
console.trace(a[mySymbol]);

// 第二种写法
var b = {
    [mySymbol]: 'Hello!'
};
console.trace(b[mySymbol]);

// 第三种写法
var c = {};
Object.defineProperty(c, mySymbol, { value: 'Hello!' });
console.trace(c[mySymbol]);

var mySymbol = Symbol();

var a = {};

a.mySymbol = 'Hello!';
console.trace(a[mySymbol]); // undefined
console.trace(a['mySymbol']); // "Hello!"

//看似成功了其实最终属性名mySymbol这个字符串,而不是mySymbol这个Symbol值.
let s = Symbol();

let obj = {
    [s]: function (value) {
        console.trace("arg:"+value);
    }
};

obj[s](111);

let newObj={
    [s](value){console.trace("arg:"+value)}
}

newObj[s](222);

var log={}
log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.trace(log.levels.DEBUG, 'debug message');
console.trace(log.levels.INFO, 'info message');
console.trace(log.levels.WARN,'warn message');

var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'Hello a';
obj[b] = 'hello b';
obj.c="hello c";
obj.d="hello d";

var objectSymbols = Object.getOwnPropertySymbols(obj);
// for(var item of obj){    obj[Symbol.iterator] is not a function
//     console.trace(item);
// }
for(var item in obj){
    console.trace(item);
}
console.trace(Object.getOwnPropertyNames(obj));
console.trace(JSON.stringify(obj));
console.trace(Object.keys(obj));
console.trace(Object.getOwnPropertySymbols(obj));

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2 // true

var s1 = Symbol.for("foo");
console.trace(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.trace(Symbol.keyFor(s2)); // undefined

class Even {
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}

console.trace(1 instanceof Even); // false
console.trace(2 instanceof Even); // true
console.trace(12345 instanceof Even); // false

let arr1 = ['c', 'd'];
console.trace(['a', 'b'].concat(arr1, 'e'));
// ['a', 'b', 'c', 'd', 'e']
// 默认数组会展开然后加入目标数组中
console.trace(arr1[Symbol.isConcatSpreadable]); // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.trace(['a', 'b'].concat(arr2, 'e')); //
// ['a', 'b', ['c','d'], 'e']
// 设为false的时候数组会一数组的形式直接插入目标数组中

let obj = {length: 2, 0: 'c', 1: 'd'};
console.trace(['a', 'b'].concat(obj, 'e')); // ['a', 'b', obj, 'e']
console.trace(obj[Symbol.isConcatSpreadable]);

obj[Symbol.isConcatSpreadable] = true;
console.trace(['a', 'b'].concat(obj, 'e')); // ['a', 'b', 'c', 'd', 'e']

class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
    //将构造函数的改为Array 而不是默认的MyArray
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.trace(mapped instanceof MyArray); // false
console.trace(mapped instanceof Array); // true

String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)

class MyMatcher {
    [Symbol.match](string) {
        return 'hello world'.indexOf(string);
    }
}

console.trace('e'.match(new MyMatcher()));  // 1

var obj={};
var arr=new Array();
var set=new Set();
arr.push(1);
set.add(1);
arr.push(1);
set.add(1);
arr.push(2);
set.add(2);
arr.push(2);
set.add(2);
arr.push(NaN);
set.add(NaN);
arr.push(NaN);
set.add(NaN);
arr.push(undefined);
set.add(undefined);
arr.push(undefined);
set.add(undefined);
arr.push({});
set.add({});
arr.push({});
set.add({});
arr.push(obj);
set.add(obj);
arr.push(obj);
set.add(obj);
console.trace(arr);
console.trace(set);
console.trace(set.has(1));
set.delete(1);
console.trace(set);
console.trace(set.has(1));

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.trace(item);
}


for (let item of set.values()) {
    console.trace(item);
}

for (let item of set.entries()) {
    console.trace(item);
}
//["red", "red"]
//["green", "green"]
//["blue", "blue"]

Set.prototype[Symbol.iterator] === Set.prototype.values
//true

let set = new Set(['red', 'green', 'blue']);
for(let item of set){
    console.trace(item);
}
//red
//green
//blue

let set = new Set([1, 2, 3]);
set.forEach((value, key) => console.trace(value * 2) )
//2
//4
//6

let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
console.trace(arr);

//没有办法直接改变set中的元素的值,只有在原来的set的基础之上重新创建一个新的set将改变后的值加入到set中.
// 方法一
let set1 = new Set([1, 2, 3]);
set1 = new Set([...set1].map(val => val * 2));
console.trace(set1);
// set的值是2, 4, 6

// 方法二
let set2 = new Set([1, 2, 3]);
set2 = new Set(Array.from(set2, val => val * 2));
console.trace(set2);
// set的值是2, 4, 6

var a = [[1,2], [3,4]];
var ws = new WeakSet(a);
console.trace(ws);

var map = new Map();
var obj={};
var boolean=true;
var string="String";
var array=[1,2,3];
var undef=undefined;
var nu=null;
var number=1;
var symbol=Symbol();
map.set(obj,"helloObj");
map.set(boolean,"helloBoolean");
map.set(string,"helliString");
map.set(array,"helloArray");
map.set(undef,"helloUndefined");
map.set(nu,"helloNull");
map.set(number,"helloNumber");
map.set(symbol,"helloSymbol");
console.trace(map.get(obj));
console.trace(map.get(boolean));
console.trace(map.get(string));
console.trace(map.get(array));
console.trace(map.get(undef));
console.trace(map.get(nu));
console.trace(map.get(number));
console.trace(map.get(symbol));

map.set(obj,obj);
obj.a="helloa";
obj.b="hellob";

console.trace(map.get(obj));

number=123;
console.trace(map.get(number));
map.set(number,boolean);
console.trace(map.get(number));
boolean=false;
console.trace(map.get(number));
map.set(123,string);
console.trace(map.get(123));

//map to array
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

//array to map
new Map([[true, 7], [{foo: 3}, ['abc']]])
// Map {true => 7, Object {foo: 3} => ['abc']}

//map to Object
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

//Object to Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

objToStrMap({yes: true, no: false})
// [ [ 'yes', true ], [ 'no', false ] ]

//Map to Json
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'

function mapToArrayJson(map) {
    return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'

//Json to Map
function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes":true,"no":false}')
// Map {'yes' => true, 'no' => false}

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}

//Proxy
var obj=new Proxy({},{
    get:function(target,key,receiver){
        console.trace(`getting ${key}!`);
        return Reflect.get(target,key);
    },
    set:function(target,key,value,receiver){
        console.trace(`setting ${key}!`);
        return Reflect.set(target,key,value,receiver);
    }
});

obj.count = 1;
++obj.count

var proxy= new Proxy({},{
   get: function(target,property){
       return 35;
   }
});

console.trace(proxy.name);
console.trace(proxy.title);
console.trace(proxy.time);

var target = {};
var handler = {};
var proxy = new Proxy(target,handler);
proxy.a='b';
console.trace(target.a);

 var proxy=new Proxy({},{
     get:function(target,property){
        return 35;
     }
 });

let obj=Object.create(proxy);
console.trace(obj.time);

var handler = {
    get:function(target,name){
        if(name === 'prototype'){
            return Object.prototype;
        }
        return 'hello '+name;
    },
    apply:function(target,thisBinding,args){
        return args[0];
    },
    construct: function(target,args){
        return {value: args[1]};
    }
};

var fproxy = new Proxy(function(x,y){
    return x+y;
},handler);

console.trace(fproxy(1,2));
console.trace(new fproxy(1,2));
console.trace(fproxy.prototype === Object.prototype);
console.trace(fproxy.foo);

//get
 var person={
     name:'xxx'
 };

 var proxy= new Proxy(person,{
     get: function(target,property){
        if(property in target){
            return target[property];
        } else {
            throw new ReferenceError("property \""+property+"\" does not exist.");
        }
     }
 });

 console.trace(proxy.name);
 console.trace(proxy.age);


 let proto = new Proxy({},{
     get(target,propertyKey,receiver){
         console.trace("GET"+propertyKey);
         return target[propertyKey];
     }
 });

let obj = Object.create(proto);
obj.xxx // "GET xxx"


function createArray(...elements){
    let handler = {
        get(target,propKey,reciever){
            let index = Number(propKey);
            if(index < 0){
                propKey = String(target.length + index);
            }
            return Reflect.get(target,propKey,reciever);
        }
    };
    let target = [];
    target.push(...elements);
    return new Proxy(target,handler);
}

 let arr = createArray('a','b','c');
 console.trace(arr[-1]);

 var pipe = (function(){
     return function (value){
         var funcStack = [];
         var oproxy = new Proxy({},{
             get : function(pipeObject,fnName){
                 if(fnName==='get'){
                     return funcStack.reduce(function(val,fn){
                         return fn(val);
                     },value);
                 }
                 funcStack.push(window[fnName]);
                 return oproxy;
             }
         });
         return oproxy;
     }
 }());

 var double = n => n * 2;
 var pow = n => n * n;
 var reverseInt = n => n.toString().split("").reverse().join("") | 0;
 console.trace(pipe(3).double.pow.reverseInt.get);
 console.trace(pipe().double.pow.reverseInt.get);

 var func=function(){
     return function (value){
         return console.trace(value);
     };
 }();
func(11);

 const target = Object.defineProperties({},{
   foo:{
       value:123,
       writable:false,
       configurable:false
    },
});

 const handler = {
     get(target,propKey){
         return "abc";
     }
 }

 const proxy =  new Proxy(target,handler);
 console.trace(proxy.foo);

//set

 let validator = {
     set: function(obj,prop,value){
        if(prop === 'age'){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not a integer');
            }
            if(value > 200){
                throw new RangeError('The age is seems invalid');
            }
        }
         obj[prop] = value;
     }
 };

 let person = new Proxy({},validator);
 person.age=100;
 console.trace(person.age);
 person.age = 'young';
 person.age = 300;

 let handler = {
     get (target,key){
         invariant(key,'get');
         return target[key];
     },
     set(target,key,value){
         invariant(key,'set');
         target[key]=value;
         return true;
     }
 };

 function invariant(key,action){
     if(key[0] === "_"){
         throw new  Error(`Incalid attemp to ${action} private "${key}" property `);
     }
 }
 var target = {};
 var proxy = new Proxy(target,handler);
 proxy._prop
 proxy._prop = 'c';
 proxy.prop
 proxy.prop = 'c';

 var setObj = Object.defineProperties({},{
     foo:{
         value : 123,
         writable : false,
         configurable : false
     }
 });

 var proxy = new Proxy(setObj,{
     set: function(obj,prop,value){
         obj[prop] = value;
     }
 })

proxy.foo = 'hello';
console.trace(proxy.foo);

//apply
var handler = {
    apply (target,ctx,args){
        return Reflect.apply(...arguments);
    }
};

var target = function(){
    return 'I am the target';
};

var handler = {
    apply:function(){
        return 'I am the proxy';
    }
};

var p = new Proxy(target,handler);

p();

var twice = {
    apply(target,ctx,args){
        return Reflect.apply(...arguments)*2;
    }
};

function sum(left,right){
    return left + right;
}

var proxy = new Proxy(sum,twice);

console.trace(proxy(1,2));
console.trace(proxy.call(null,5,6));
console.trace(proxy.apply(null,[7,8]));
console.trace(Reflect.apply(proxy,null,[9,10]));


var handler = {
    has (target,key) {
        if (key[0] === "_") {
            return false;
        }
        return key in target;
    }
};
var target ={
    _prop : 'foo',
    prop:'foo'
};
var proxy = new Proxy(target,handler);
console.trace('_prop' in proxy);
console.trace('prop' in proxy);

var obj ={a:10};
Object.preventExtensions(obj);

var p = new Proxy(obj,{
    has:function (target,prop){
        return false;
    }
});

console.trace('a' in p);
//TypeError

var obj = {a : 10};
var pobj = Object.create(obj);
pobj.b = 12;

var proxy = new Proxy(pobj,{
    has : function(target,prop){
        return Reflect.has(target,prop);
    }
})

console.trace('a' in proxy);
console.trace('b' in proxy);
console.trace('c' in proxy);


let stu1 = {name:'张三',score:59};
let stu2 = {name:'李四',score:99};

let handler = {
    has (target,prop){
        if(prop === 'score' && target[prop]<60){
            console.trace(`${target.name} 不及格`);
            return false;
        }
        return prop in target;
    }
}

let oproxy1 = new Proxy(stu1,handler);
let oproxy2 = new Proxy(stu2,handler);

console.trace('score' in oproxy1);
console.trace('score' in oproxy2);

for(let a in  oproxy1){
    console.trace(oproxy1[a]);
}

for(let b in oproxy2){
    console.trace(oproxy2[b]);
}

//construct
var handler = {
    construct (target,args,newTarget){
        return new target(...args);
    }
};

var p = new Proxy(function(){},{
   construct : function(target,args) {
       console.trace('called: '+args.join(','));
       return { value:args[0]*10 };
   }
});

console.trace((new p(1)).value);
console.trace((new p(1,2,3,4,5)).value);

var p = new Proxy(function(){},{
    construct:function(target,argumentsList){
        return 1;
    }
});

 new  p();

 //deleteProperty
var handler = {
    deleteProperty(target,key){
        invariant(key,'delete');
        return true;
    }
}

function invariant(key,action){
    if(key[0] === '_'){
        throw new Error(`Invalid attemp to ${action} private "${key}" property`);
    }
}

var target = {_prop : "foo"};
var proxy = new Proxy(target,handler);
delete proxy._prop


//defineProperty
var handler = {
    defineProperty(target,key,descriptor){
        return false;
    }
};

var target = {};
var proxy = new Proxy(target,handler);
proxy.foo = 'bar';
console.trace(proxy.foo);

//getOwnPropertyDescriptor
var handler={
    getOwnPropertyDescriptor(target,key){
        if(key[0] === '_'){
            return;
        }
        return Object.getOwnPropertyDescriptor(target,key);
    }
};

var target = {_foo:'bar',baz:"tar"};
var proxy = new Proxy(target,handler);
console.trace(Object.getOwnPropertyDescriptor(proxy,'wat'));
console.trace(Object.getOwnPropertyDescriptor(proxy,'_foo'));
console.trace(Object.getOwnPropertyDescriptor(proxy,'baz'));

//getPrototypeof
var proto ={};
var p = new Proxy({},{
    getPrototypeOf(target){
        return proto;
    }
});

console.trace(Object.getPrototypeOf(p) === proto);

//isExtensible
var p = new Proxy({},{
    isExtensible : function(target){
        console.trace("called");
        return true;
    }
});

Object.isExtensible(p);


Object.isExtensible(proxy) === Obejct.isExtensible(target)

var p = new Proxy({},{
    isExtensible : function(target){
        return false;
    }
});

Object.isExtensible(p);

//ownKey
let target={
    a:1,
    b:2,
    c:3
};

let handler = {
    ownKeys(target){
        return ['a'];
    }
};

let proxy = new Proxy(target,handler);

console.trace(Object.keys(target));
console.trace(Object.keys(proxy));


let target = {
    _bar: 'foo',
    _prop: 'bar',
    prop: 'baz'
};

let handler = {
    ownKeys (target){
        return Reflect.ownKeys(target).filter(key => key[0]!=='_');
    }
};

let proxy = new Proxy(target,handler);
for (let key of Object.keys(proxy)){
    console.trace(target[key]);
}

let target = {
    a:1,
    b:2,
    c:3,
    [Symbol.for('secret')]:'4',
};

Object.defineProperty(target,'key',{
    enumerable:false,
    configurable:true,
    writable:true,
    value:'static'
});

let handler = {
    ownKeys(target){
        return ['a','b',Symbol.for('secret'),'key'];
    }
};

let proxy = new Proxy(target,handler);
console.trace(Object.keys(proxy));

var p = new Proxy({},{
    ownKeys:function(target){
        return ['a','b','c'];
    }
});

console.trace(Object.getOwnPropertyNames(p));

var obj = {};
var p = new Proxy(obj,{
    ownKeys:function(target){
        return [123,true,undefined,null,{},[]];
    }
});

Object.getOwnPropertyNames(p);

var  obj = {};
Object.defineProperty(obj,'a',{
    configurable : false,
    enumerable : true,
    value:10
});

var p = new Proxy(obj,{
    ownKeys:function(target){
        return ['b'];
    }
});

console.trace(Object.getOwnPropertyNames(p));

var obj = {
    a : 1
};

Object.preventExtensions(obj);

var p=new Proxy(obj,{
    ownKeys :function(target){
        return ['a','b'];
    }
});

Object.getOwnPropertyNames(p);

var p = new Proxy({},{
    preventExtensions : function (traget) {
        return true;
    }
});

Object.preventExtensions(p);

var p = new Proxy({},{
    preventExtensions : function(target){
        console.trace('called');
        Object.preventExtensions(target);
        return true;
    }
});

console.trace(Object.preventExtensions(p));

var handler = {
    setPrototypeOf(target,proto){
        throw new Error('Changing the prototype is forbidden');
    }
};

var proto = {};
var target = function(){};
var proxy = new Proxy(target,handler);
Object.setPrototypeOf(proxy,proto);

let target = {};
let handler = {};
let {proxy,revoke} = Proxy.revocable(target,handler);
proxy.foo = 123;
console.trace(proxy.foo);
revoke();
console.trace(proxy.foo);

const target = {
    m : function(){
        console.trace(this === proxy);
    }
};

const handler = {};

const proxy = new Proxy(target,handler);

target.m();
proxy.m();

const _name= new WeakMap();

class Person {
    constructor(name){
        _name.set(this,name);
    }
    get name(){
        return _name.get(this);
    }
};

const jane = new Person("Jane");
console.trace(jane.name);

const proxy = new Proxy(jane,{});
console.trace(proxy.name);

const target = new Date();
const handler = {};
const proxy = new Proxy(target,handler);

proxy.getDate();

const target = new Date("2017-01-01");
const handler = {
    get(target,prop){
        if(prop === 'getDate'){
            return target.getDate.bind(target);
        }
        return Reflect.get(target,prop);
    }
}

const proxy  = new Proxy(target,handler);

console.trace(proxy.getDate());

try {
    Object.defineProperty(traget,property,attributes);
}catch (e) {

}

if(Reflect.defineProperty(target, property, attributes)){

}else{

}

'prop' in target

Reflect.has(target,'prop');

var proxy = new Proxy(target,{
    set(target,name,value,receiver){
        var flag = Reflect.set(target,name,value, receiver);
        if(flag){
            console.log('set value');
        }
        return flag;
    }
});

var loggedObj = {
    get(target,prop){
        console.log(`get ${prop} `);
        return Reflect.get(target,prop);
    },
    set(target,prop,value,receiver){
        console.log(`set ${prop} `);
        return Reflect.set(target,prop,value,receiver);
    },
    deleteProperty(target,prop){
        console.log(`delete ${prop} `);
        return Reflect.deleteProperty(target,prop)
    },
    has(target,prop){
        console.log(`has ${prop} `);
        return Reflect.has(target,prop);
    }
}

var obj = {
    a : "a",
    b : "b"
};

var  proxy = new Proxy(obj,loggedObj);

proxy.c = "c";
proxy.a;
delete proxy.c;
'a' in proxy;
console.trace(obj);

var obj = {
    a : "a",
    b : "b",
    c : "c"
}

console.trace(Reflect.get(obj,'a'));
console.trace(Reflect.get(obj,'b'));
console.trace(Reflect.get(obj,'c'));

var obj = {
    a : "a",
    b : "b",
    c : "c",
    get sayWord(){
        return console.trace(this.a+this.b+this.c);
    }
}

var tempobj = {
    a : "c",
    b : "b",
    c : "a"
}

Reflect.get(obj,'sayWord',tempobj);

var obj = {
    foo: 'foo',
    set setValue(value){
        this.foo = value;
        console.trace(this.foo);
    }
}

Reflect.set(obj,'setValue','hello world');

var obj = {
    foo : "foo",
    set setValue(value){
        this.foo = value;
    }
}

var tempobj = {
    foo : 'tempfoo'
}

Reflect.set(obj,'setValue','helloWorld',tempobj);

console.trace(obj.foo);
console.trace(tempobj.foo);

var handler = {
    set(target,prop,value,receiver){
        console.log('set');
        return Reflect.set(target,prop,value,receiver)
    },
    defineProperty(target,prop,attr){
        console.log('defineProperty');
        return Reflect.set(target,prop,attr);
    }
}

var tempObj = {
    foo : 'tempfoo'
}

var proxy = new Proxy(tempObj,handler);
proxy.foo = 'hello world';


var obj = {
    foo : 'foo'
}

console.trace('foo' in obj); // ES5
console.trace(Reflect.has(obj,'foo')); // ES6

var myObj = { foo: 'bar' };
delete myObj.foo;//ES5

var myObj = { foo: 'bar' };
Reflect.deleteProperty(myObj, 'foo'); //ES6

function Person(name) {
    this.name=name;
    console.trace(this.name);
}

console.trace(new Person('tom')); //ES5
console.trace(Reflect.construct(Person,['mac'])); //ES6

function Person(name) {
    this.name=name;
    console.trace(this.name);
}

var person = new Person("tom");

Object.getPrototypeOf(person) === Person.prototype;//ES5
Reflect.getPrototypeOf(person) === Person.prototype;//ES6

Object.getPrototypeOf(1) // Number {[[PrimitiveValue]]: 0}
Reflect.getPrototypeOf(1) // 报错

var obj = {foo : 'foo'};
var tempObj = {tempFoo : "temp"};

Object.setPrototypeOf(obj,tempObj); //ES5
console.trace(obj);

var obj = {foo : 'foo'};
var tempObj = {tempFoo : "temp"};
Reflect.setPrototypeOf(tempObj,obj) //ES6
console.trace(tempObj);

Object.setPrototypeOf(1,{}); //1
Reflect.setPrototypeOf(1,{}); //Error
Object.setPrototypeOf(null,{}); //Error
Reflect.setPrototypeOf(null,{}); //Error

//ES5
const ages = [11,22,33,44,55,66,77,88,99,100];

const youngest = Math.min.apply(Math,ages);
const oldest = Math.max.apply(Math,ages);
const type = Object.prototype.toString.call(youngest);
console.trace(`youngest : ${youngest}\r\n oldest : ${oldest} \r\n type : ${type}`);

//ES6
const ages = [11,22,33,44,55,66,77,88,99,100];

const youngest = Reflect.apply(Math.min,Math,ages);
const oldest = Reflect.apply(Math.max,Math,ages);
const type = Reflect.apply(Object.prototype.toString,youngest,[]);
console.trace(`youngest : ${youngest}\r\n oldest : ${oldest} \r\n type : ${type}`);

//ES5
var myDate = {};

Object.defineProperty(myDate,'now', {
    value : () =>  Date.now()
})
myDate.now();

//ES6
var myDate = {};

Reflect.defineProperty(myDate,'now',{
    value : () =>  Date.now()
})
myDate.now();

var target = {}
Reflect.defineProperty(target,'foo',{
    value : "hello world",
    writable : false,
    configurable : false
});

var dis0 = Object.getOwnPropertyDescriptor(target,'foo');
var dis1 = Reflect.getOwnPropertyDescriptor(target,'foo');
console.trace(dis0);
console.trace(dis1);
console.trace(dis0 === dis1);

var obj = {};
//ES5
console.trace(Object.isExtensible(obj));
console.trace(Object.isExtensible(1));
//ES6
console.trace(Reflect.isExtensible(obj));
console.trace(Reflect.isExtensible(1));


//ES5
var obj = {};
console.trace(Object.isExtensible(obj));
console.trace(Object.preventExtensions(obj));
console.trace(Object.isExtensible(obj));
//ES6
let obj = {};
console.trace(Reflect.isExtensible(obj));
console.trace(Reflect.preventExtensions(obj));
console.trace(Reflect.isExtensible(obj));

var obj = {
    foo : 'hello foo',
    [Symbol.for("foo")]  : 'hello Symbol'
}

console.trace(Object.getOwnPropertyNames(obj));
console.trace(Object.getOwnPropertySymbols(obj));
console.trace(Reflect.ownKeys(obj));


function timeout(ms){
    return new  Promise((resolve,reject)=>{
       setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value)=>{
    console.log(value);
});

let promise = new Promise(function (resolve,reject) {
    console.trace("Promise");
    resolve();
});

promise.then(function(){
   console.trace("Resolved.")
});

console.trace("hi!");

function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        var image = new Image();
        image.onload = function(){
            resolve(image);
        };
        image.onerror = function(){
            reject(new Error('could not load image at '+url));
        };
        image.src = url;
    });
}

loadImageAsync("http://es6.ruanyifeng.com/images/cover-2nd.jpg");

var getJSON = function (url) {
    var promise = new Promise(function (resolve,reject){
        var client = new  XMLHttpRequest();
        client.open('GET',url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept","application/json");
        client.send();

        function handler(){
            if(this.readyState !== 4){
                return ;
            }
            if(this.status === 200){
                resolve(this.response);
            } else {
                reject(new  Error(this.statusText));
            }
        };
    });
    return promise;
};

getJSON("http://es6.ruanyifeng.com/#docs/promise").then(function(json){
    console.log("Contents:" + json);
},function(error){
    console.error("error:",error);
});

var p1 = new  Promise(function(resolve,reject){
    setTimeout(() => reject(new Error('fail')),3000);
})

var p2 = new Promise(function(resolve,reject){
    setTimeout(() => resolve(p1),1000);
})

p2
    .then(result => console.trace(result))
    .catch(error => console.trace(error));

getJSON("/post/1.json").then(function(post){
    return getJSON(post.commentURL);
}).then(function funcA(comments){
    console.trace("Resolved: ",comments);
},function funcB(err){
    console.trace("Rejected: ",err);
});

getJSON("/post/1.json").then(function(post){
   return getJSon(post.commentsURL);
}).then(
    funcA = comments => console.trace("Resolved: ",comments),
    funcB = comments => console.trace("Rejected: ",err)
);

var p = new Promise(function(resolve,reject){
    throw new Error("some error");
})

p.catch(function(err){
    console.log("error"+err);
});


var promise = new Promis(function(resolve,reject){
    try{
        throw new Error("some errors");
    }catch(e){
        reject(e);
    }
});
promise.catch(function(erro){
    console.log(erro);
});

var promise = new Promise(function(resolve,reject){
    reject(new Error("some error"));
})
promise.catch(function(e){
    console.log("error")
});

getJSON('/post/1.json').then(function(post){
    return getJSON(post.commentURL);
}).then(function(comments){
    console.log("go on");
}).catch(function(error){
    console.log("some errors");
});

var someAsyncThing = function(){
    return new Promise(function(resolve,reject){
        resolve(x+2);
    })
}

someAsyncThing().then(function(){
    return someAsyncThing();
}).catch(function(error){
    console.log('oh no ',error);
}).then(function(){
    console.log("go on")
})

p.catch(function(err){
    console.log("error"+err);
});
var promises = [1,2,3,4,5,6,7].map(function(id){
    return getJSON("/post/"+id+".json");
})
Promise.all(promises).then(function(){
    console.log("ok!");
}).catch(function(){
    console.log("error");
})


var promise = new Promis(function(resolve,reject){
    try{
        throw new Error("some errors");
    }catch(e){
        reject(e);
    }
});
promise.catch(function(erro){
    console.log(erro);
});

var promise = new Promise(function(resolve,reject){
    reject(new Error("some error"));
})
promise.catch(function(e){
    console.log("error")
});

getJSON('/post/1.json').then(function(post){
    return getJSON(post.commentURL);
}).then(function(comments){
    console.log("go on");
}).catch(function(error){
    console.log("some errors");
});

var someAsyncThing = function(){
    return new Promise(function(resolve,reject){
        resolve(x+2);
    })
}

someAsyncThing().then(function(){
    return someAsyncThing();
}).catch(function(error){
    console.log('oh no ',error);
}).then(function(){
    console.log("go on")
})

var promiseArray = [1,2,3,4].map(function(id){
    return getJSON("/post/"+id+".json");
})

var promiseAll = new  Promise.all(promiseArray).then(function(post){
    console.log("do things")
}).catch(function(){
    console.log("Exception");
})


var dataSoursePromise = (datasourseUrl) => new Promise(()=>console.log(datasourseUrl+"aa"),()=>console.log(datasourseUrl+"bb"));
var dataSourse0 = dataSoursePromise(datasourseUrl).then(getDate0);
var dataSourse1 = dataSoursePromise(datasourseUrl).then(getDate1);
var dataSourse3 = dataSoursePromise(datasourseUrl).then(getDate2);

Promise.all([
    dataSourse0,
    dataSourse1,
    dataSourse2
])
.then(([data0,data1,data2]) => console.trace("ready:"+data0+data1+data2))
const p1 = new Promise((resolve,reject)=>{
    resolve('hello');
})
.then(result => result)
.catch(e=>e);

const p2 = new Promise((resolve,reject)=>{
    throw new Error('error');
})
.then(result=>result)
.catch(e=>e);

Promise.all([p1,p2])
.then(result => console.trace(result))
.catch(e => console.trace(e));

const p =Promise.race([
    fetch('/resourse-that-may-take-a-while'),
    new Promise(function(resolve,reject){
        setTimeout(()=>reject(new Error("error")),500)
    })
]);

p.then(response => console.log(response));
p.catch(error => console.log(error));

var jsPromise = new Promise($.ajax('/whatever.json'))

let  thenable =  {
    then : function(resolve,reject){
        resolve(42)
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value){
    console.log(value);
});

let p2 = Promise.reject("出错了");

var p = new Promise((resolve,reject) => reject('出错了'));
p.then(null,function(e){
    console.log(e);
})

const thenable = {
    then(resolve,reject){
        reject('出错了');
    }
};

Promise.reject(thenable)
    .catch(e => {
        console.log(e === thenable);
    })

const preloadImage = function(path){
    return new Promise(function(resolve,reject){
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    })
}

function getfoo(){
    return new Promise(function(resolve,reject){
        resolve('foo');
    });
}

var g = function* (){
    try{
        var foo = yield getfoo();
    }catch(e){
        console.trace(e)
    }
};

function run (generator){
    var it = generator();

    function go(result){
        if(result.done) {
            return result.value;
        }
        return result.then(function(value){
            return go(it.next(value));
        },function(error){
            return go(it.throw(error));
        });
    }

    go(it.next);
}

run(go);

const f = () => console.log('now');
(
    () => new Promise(
        resolve => resolve(f())
    )
)();
console.log('next');

const f = () => console.log('now');
Promise.try(f);
console.log('next');

var  array = [1,2,3,4,5,6];

var it = array[Symbol.iterator]();

console.trace(it.next());
console.trace(it.next());
console.trace(it.next());
console.trace(it.next());
console.trace(it.next());

class RangeIterator {
    consttuctor(start, stop) {
        this.start = start;
        this.stop = stop;
    }


    [Symbol.iterator]() {
        return this;
    }

    next() {
        var value = this.value;
        if (value < stop) {
            this.value++
            return {value: value, done: false}
        } else {
            return {value: value, done: true}
        }
    }
}

    function range(start,stop){
        return new RangeIterator(start,stop);
    }

    for(var value of range(0,4)){
        console.trace(value);
    }


