var person = {
    "name": "1234",
    gender: "male",
    13123: "asdd"
};
with (person) {
    alert(name);
    alert(gender);
    alert(13123);
    alert("13123");
};
alert(person["13123"]);
alert(person['13123']);
alert(person[13123]);
alert(person.name);
console.trace(person.name);
console.log(person.name);

var array = new Array(2);
array[0] = "22";
array[4] = "ss";
console.trace(array[0]);
console.trace(array[1]);
console.trace(array[3]);
console.trace(array[4]);
var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
console.trace(colors.toString()); // red,blue,green
console.trace(colors.valueOf()); // red,blue,green
console.trace(colors); // red,blue,green
console.trace(colors.toLocaleString());

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.trace(nums.indexOf(1));
console.trace(nums.lastIndexOf(8));
console.trace(nums.indexOf(13));

var colors = ["red", "blue", "green"];
console.trace(nums.indexOf("red"));
console.trace(nums.indexOf(1));

var nums = [1, 2, 3, 4, 5, 6, 7];

function doevery(item, index, array) {
    if (item > 0) {
        console.trace(index);
        return true;
    }
    else {
        return false;
    }
}

console.trace(nums.every(doevery));

var nums = [1, 2, 3, 4, 5, 6, 7];

function dofilter(item, index, array) {
    if (item > 2 && item < 4 || item == 1) {
        console.trace(index);
        return true;
    }
    else {
        return false;
    }
}

console.trace(nums.filter(dofilter));

var nums = [1, 2, 3, 4, 5, 6, 7];

function doforeach(item, index, array) {
    console.trace(index);
}

console.trace(nums.forEach(doforeach));



var nums = [1, 2, 3, 4, 5, 6, 7];

function dosome(item, index, array) {
    if (item > 2 && item < 6) {
        return true;
    }
    console.trace(index);
    return false;
}

console.trace(nums.some(dosome));

var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {
    console.trace(index);
    return prev + cur;
});
console.trace(sum);


var values = [1, 2, 3, 4, 5];
var sum = values.reduceRight(function (prev, cur, index, array) {
    console.trace(index);
    return prev + cur;
});
console.trace(sum);


var values = [1];
var sum = values.reduce(function (prev, cur, index, array) {
    console.trace(index);
    console.trace(cur);
    return prev + cur;
});
console.trace(sum);

var values = [5];
var sum = values.reduceRight(function (prev, cur, index, array) {
    console.trace(index);
    console.trace(cur);
    return prev + cur;
});
console.trace(sum);

var values = ["1", "2", "3", "4", "5"];
var sum = values.reduceRight(function (prev, cur, index, array) {
    console.trace(index);
    return prev + cur;
});
console.trace(sum);

var values = ["1", "2", "3", "4", "5"];
var sum = values.reduce(function (prev, cur, index, array) {
    console.trace(index);
    return prev + cur;
});
console.trace(sum);


var now = new Date();
var nowtime = Date.now();
var time0 = new Date("May 10,2012");
var time1 = new Date("May 11,2015");
var time2 = new Date("May 34,2012");
var time3 = new Date(Date.parse("may 12,2012"));
var time4 = new Date("2014-10-12");
var time5 = new Date("1992-12");
var time6 = new Date("1998-12-14T24:12:35");
var time7 = new Date("1992/12/12");
var time8 = new Date("1998-12-14T22:12:35")

console.trace(now.format("YYYY-MM-DD"));
console.trace(time0.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time1.format("YYYY-MM-DD HH"));
console.trace(time2.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time3.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time4.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time5.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time6.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time7.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time8.format("YYYY-MM-DD HH:mm:ss"));
console.trace(time8.format());

var start = Date.now();
var start1 = +Date.now();
setTimeout(function () {
    dosomething();
}, 10000);

function dosomething() {
    console.trace("已经过了10s了,运行方法,计算时间");
    var end = Date.now();
    var end1 = +Date.now()
    var time = end - start;
    var time1 = end1 - start1;
    console.trace(time);
    console.trace(time1);
}

var now = new Date();
console.trace(now.toString());
console.trace(now.toLocaleString());
console.trace(now.valueOf());

var nowtime = Date.now();
console.trace(nowtime.toString());
console.trace(nowtime.toLocaleString());
console.trace(nowtime.valueOf());


var nowtime = Date.now();
console.trace(typeof (nowtime));
var now = new Date();
console.trace(typeof (now));

var nowtime = new Date();
console.trace(nowtime.toDateString());
console.trace(nowtime.toTimeString());
console.trace(nowtime.toLocaleDateString());
console.trace(nowtime.toLocaleTimeString());
console.trace(now.toUTCString());

var expression = /\[bc\]at/ig;
var expression1 = /\[bc]at/gim;
var expression2 = /\[bc\]at/mg;
console.trace(expression.ignoreCase);
console.trace(expression.global);
console.trace(expression.lastIndex);
console.trace(expression.multiline);
console.trace(expression.source);
console.trace(expression1.ignoreCase);
console.trace(expression1.global);
console.trace(expression1.lastIndex);
console.trace(expression1.multiline);
console.trace(expression1.source);
console.trace(expression2.ignoreCase);
console.trace(expression2.global);
console.trace(expression2.lastIndex);
console.trace(expression2.multiline);
console.trace(expression2.source);

var expression = new RegExp("\\[bc\\]at", "img");
console.trace(expression.ignoreCase);
console.trace(expression.global);
console.trace(expression.lastIndex);
console.trace(expression.multiline);
console.trace(expression.source);

var text = "mom and dad and baby";
var expression = /mom( and dad( and baby)?)?/gi;
var matches = expression.exec(text);
console.trace(matches.index);
console.trace(matches.input);
for (var item in matches) {
    console.trace(matches[item]);
}
for (var i = 0; i < matches.length; i++) {
    console.trace(matches[i]);
}


var text = "this has been a short summer";
var pattern = /(.)hort/g;

if (pattern.test(text)) {
    console.trace(RegExp.input);
    console.trace(RegExp.leftContext);
    console.trace(RegExp.rightContext);
    console.trace(RegExp.lastMatch);
    console.trace(RegExp.lastParen);
    console.trace(RegExp.multiline);
}

if (pattern.test(text)) {
    (RegExp.$_);
    console.trace(RegExp["$`"]);
    console.trace(RegExp["$'"]);
    console.trace(RegExp["$&"]);
    console.trace(RegExp["$+"]);
    console.trace(RegExp["$*"]);
}

var text = "this has been a short summer";
var pattern = /(..)or(.)/g;
if (pattern.test(text)) {
    console.trace(RegExp.$1);
    console.trace(RegExp.$2);
    console.trace(RegExp.$3);
    console.trace(RegExp.$4);
    console.trace(RegExp.$5);
}


function funcsum(num1, num2) {
    return num1 + num2;
}
console.trace(funcsum(2, 3));

var anothersum = funcsum;

console.trace(anothersum(3, 4));

funcsum = null;
console.trace(anothersum(3, 4));
console.trace(funcsum(3, 4));

console.trace(sum(1, 2));
function sum(num1, num2) {
    console.trace(num1 + num2);
}

console.trace(sum);
var sum = function (num1, num2) {
    console.trace(num1 + num2);
}

function sum(num1, num2) {
    return num1 + num2;
}
function anothersum(somnepara) {
    return "hello" + somnepara;
}
function todosum(func, obj) {
    return func(obj.num1, obj.num2);
}
function todoanothersum(func, para) {
    return func(para);
}

var obj = {};
obj.num1 = 1;
obj.num2 = 2;
console.trace(todosum(sum, obj));
console.trace(todoanothersum(anothersum, "myfriend"));

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
console.trace(factorial(10));
var newfactorial = factorial;
factorial = null;
console.trace(newfactorial(10));


function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
console.trace(factorial(10));
var newfactorial = factorial;
factorial = null;
console.trace(newfactorial(10));

var person = {};
person.name = "jason";
person.sayName = sayName;
var student = {};
student.name = "jack";
student.sayName = sayName;
window.name = "name";

function sayName() {
    console.trace(this.name);
}

sayName();
person.sayName();
student.sayName();

function somefunc(arg1, arg2, arg3) {
}
function somefunc1(arg1, agr2) {
}
function somefunc2(arg) {
}
console.trace(somefunc.length);
console.trace(somefunc1.length);
console.trace(somefunc2.length);

function sum(num1, num2) {
    return num1 + num2;
}
function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}
function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}
console.trace(callSum1(10, 10));
console.trace(callSum2(10, 10));

function sum(num1, num2) {
    return num1 + num2;
}
function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}
function applySum(num1, num2) {
    return sum.call(this, arguments);
}
console.trace(callSum(10, 10));
console.trace(applySum(10, 10));

window.color = "red";
var someobject = { color: "blue" };
function sayColor() {
    console.trace(this.color);
}
sayColor();
sayColor.call(this);
sayColor.call(window);
sayColor.call(someobject);

window.color = "blue";
function sayColor() {
    console.trace(this.color);
}
var anotherobject = { color: "red" };
var anotherSayColor = sayColor.bind(anotherobject);

sayColor();
anotherSayColor();


var str = "A b CdEf Gh A";
console.trace(str.length);
console.trace(str);
console.trace(str.charAt(2));
console.trace(str);
console.trace(str.charCodeAt(1));
console.trace(str);
console.trace(str.indexOf("E"));
console.trace(str);
console.trace(str.concat("hello", "world"));
console.trace(str);
console.trace(str.lastIndexOf("A"));
console.trace(str);
console.trace(str.replace("A", "S"));
console.trace(str);
console.trace(str.match("Ab"));
console.trace(str);
console.trace(str.split("E"));
console.trace(str);
console.trace(str.trim());
console.trace(str);
console.trace(str.search("Ef"));
console.trace(str);


var array = [1, 2, 4, 6, 3, 7, 2, 4, 8, -1];
var max = Math.max.apply(Math, array);
var max1 = Math.max(array);
console.trace(max);
console.trace(max1);


var person = {
    name: "tony"
}

console.trace(person.name);
Object.defineProperty(person, "name", { writable: false });
person.name = "kobe";
console.trace(person.name);

var person = {};
person.name = "tom";
console.trace(person.name);
delete person.name;
Object.defineProperty(person, "name", {
    configuarable: false,
    value: "tony"
});
console.trace(person.name);
delete person.name;
console.trace(person.name);
Object.defineProperty(person, "name", {
    configurable: true
});


person = {
    _firstname: "mike",
    _lastname: "jordan"
};
Object.defineProperty(person, "name", {
    get: function () {
        return this._firstname + this._lastname;
    },
    set: function (firstname) {
        this._firstname = firstname;

    }
});


console.trace(person.name);
person.name = "tony";
console.trace(person.name);

var person = {
    name: "hello world"
};

Object.defineProperty(person, "age", {
    configuarable: true,
    value: "11",
    enumerable: true,
    writable: false
});
var object = Object.getOwnPropertyDescriptor(person, "age");
console.trace(object.configurable);
console.trace(object.enumberable);
console.trace(object.writable);
console.trace(object.value);
object = Object.getOwnPropertyDescriptor(person, "name");
console.trace(object.configurable);
console.trace(object.enumberable);
console.trace(object.writable);
console.trace(object.value);

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.trace(this.name);
    };
    return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
person1.sayName();
person2.sayName();

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.trace(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.sayName();
person2.sayName();

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function(console.trace(this.name));
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.sayName();
person2.sayName();

function sayname() {
    console.trace(this.name);
}

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.sayName();
person2.sayName();
console.trace(person1.sayName == person2.sayName);
function sayName() {
    console.trace(this.name);
}

function Person() {

}

Person.prototype.name = "hello";
Person.prototype.age = "18";
Person.prototype.sayName = function () {
    console.trace(this.name + this.age);
}

var person1 = new Person();
var person2 = new Person();
person1.sayName();
person2.sayName();
console.trace(person1 == person2);
console.trace(person1.sayName == person2.sayName);

console.trace(Person.prototype.isPrototypeOf(person1));
console.trace(Object.getPrototypeOf(Person1).name);


function Person() {
}

Person.prototype.name = "hello";
Person.prototype.words = "world";
Person.prototype.sayName = function () {
    console.trace(this.name + this.words);
}

var person1 = new Person();
person1.sayName();
person1.name = "nihao";
person1.sayName();
delete person1.name;
person1.sayName();

function Person() {
}

Person.prototype.name = "hello";
Person.prototype.words = "world";
Person.prototype.sayName = function () {
    console.trace(this.name + this.words);
}
var person1 = new Person();
console.trace(person1.hasOwnProperty("name"));
console.trace("name" in person1);
person1.name = "nihao";
console.trace(person1.hasOwnProperty("name"));
console.trace("name" in person1);
delete person1.name;
console.trace(person1.hasOwnProperty("name"));
console.trace("name" in person1);

function Person(){
}
Person.prototype = {
    name: "hello",
    words: "world",
    sayWord: function () {
        console.trace(this.name + this.words);
    }
}

var person =new Person();
console.trace(Object.keys(person));
person.name="nihao";
console.trace(Object.keys(person));
console.trace(Object.keys(Person.prototype));
console.trace(Object.getOwnPropertyNames(Person.prototype));
console.trace(Object.getOwnPropertyNames(person));
var keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys);

function Person() {
}

Person.prototype.name = "hello";
Person.prototype.words = "world";
Person.prototype.sayName = function () {
    console.trace(this.name + this.words);
}
console.trace(Object.getOwnPropertyNames(Person.prototype));

function Person(){
}
Person.prototype = {
    name: "hello",
    words: "world",
    sayWord: function () {
        console.trace(this.name + this.words);
    }
}

console.trace(Object.getOwnPropertyNames(Person.prototype));


function Person(){
}
Person.prototype = {
    name: "hello",
    words: "world",
    sayWord: function () {
        console.trace(this.name + this.words);
    }
}

var person1=new Person();
var person2=new Person();
person1.sayWord();
person2.sayWord();
Person.prototype.name="nihao";
person1.sayWord();
person2.sayWord();
Person.prototype.sayWord=function(){
    console.trace("this is not hello world!");
}
person1.sayWord();
person2.sayWord();

function Person(){
}
Person.prototype = {
constructor: Person,
name : "Nicholas",
age : 29,
job : "Software Engineer",
friends : ["Shelby", "Court"],
sayName : function () {
console.trace(this.name);
}
};
var person1 = new Person();
var person2 = new Person();
person1.friends.push("Van");
console.trace(person1.friends); 
console.trace(person2.friends); 
console.trace(person1.friends === person2.friends);

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.friends = ["Shelby", "Court"];
}
Person.prototype = {
constructor : Person,
sayName : function(){
console.trace(this.name);
}
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
console.trace(person1.friends); 
console.trace(person2.friends); 
console.trace(person1.friends === person2.friends); 
console.trace(person1.sayName === person2.sayName);

 function Person(name,gender,age){
    this.name=name;
    this.gender=gender;
    this.age=age;
    if(this.sayName!="function"){}
        Person.prototype.sayName=function(){
            console.trace(this.name);
        }
 }

 var person1=new Person("tom","Male","22");
 person1.sayName();

 function Person(name,gender,age){
     var o=new Object;
     o.name=name;
     o.gender=gender;
     o.age=age;
     o.sayName=function(){
         console.trace(this.name);
     };
     return o;
 }

 var person1=new Person("tom","male","age");
 person1.sayName();

 function Person(name,gender,age){
     var o=new Object;
     o.name=name;
     o.gender=gender;
     o.age=age;
     o.sayName=function(){
         console.trace(name);
     };
     return o;
 }
 
 var person=Person("tom","male","22");
 person.sayName();

function SuperType(){
this.property = true;
}
SuperType.prototype.getSuperValue = function(){
return this.property;
};
function SubType(){
this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
return this.subproperty;
};
var instance = new SubType();
console.trace(instance.getSuperValue());

function SuperType(){
this.property = true;
}
SuperType.prototype.getSuperValue = function(){
return this.property;
};
function SubType(){
this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype = {
getSubValue : function (){
return this.subproperty;
},
someOtherMethod : function (){
return false;
}
};
var instance = new SubType();
console.trace(instance.getSuperValue()); 

function SuperType(){
    this.color=["red","blue","green"],
    this.showColor = function(){
        console.trace(this.color.toString());
   }
};

function SubType(){};
 SubType.prototype=new SuperType();

 var color1=new SubType();
 var color2=new SubType();
 color1.showColor();
 color2.showColor();
 color1.color.push("black");
 color1.showColor();
 color2.showColor();


function SuperType(){
    this.colors=["red","green","blue"];
};
function SubType(){
    SuperType.call(this);
}
var color1 = new SubType();
var color2 = new SubType();
console.trace(color1.colors.toString());
console.trace(color2.colors.toString());
color1.colors.push("black");
console.trace(color1.colors.toString());
console.trace(color2.colors.toString());


function SuperType(name){
this.name = name;
}
function SubType(){
SuperType.call(this, "Nicholas");
this.age = 29;
}
var instance = new SubType();
console.trace(instance.name); 
console.trace(instance.age);


function SuperType(name){
this.name = name;
this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
console.trace(this.name);
};
function SubType(name, age){

SuperType.call(this, name);
this.age = age;
}

SubType.prototype = new SuperType();    
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
console.trace(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.trace(instance1.colors); 
instance1.sayName(); 
instance1.sayAge(); 
var instance2 = new SubType("Greg", 27);
console.trace(instance2.colors);
instance2.sayName(); 
instance2.sayAge(); 

function OldPerson(){
    this.name="mike";
}

var newPerson =Object.create(OldPerson);
var newPerson1 =Object.create(OldPerson,{
    name:{value:"tom"}
});
console.trace(newPerson.name);
console.trace(newPerson1.name);

function OldPerson(){
    this.name="mike";
}

function createPerson(oldPerson){
    var clone=Object(oldPerson);
    clone.name="tom";
    clone.sayName=function(){
        console.trace("hello"+this.name);
    }
    return clone;
}
 var newPerson=createPerson(OldPerson);
 newPerson.sayName();


function inheritPrototype(subType, superType){
var prototype = Object(superType.prototype); 
prototype.constructor = subType;
subType.prototype = prototype; 
}

 function SuperType(name){
this.name = name;
this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
console.trace(this.name);
};
function SubType(name, age){
SuperType.call(this, name);
this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
    console.trace(this.age);
}

var subType= new SubType();
subType.sayAge();


function createFunctions(){
var result = new Array();
for (var i=0; i < 10; i++){
result[i] = function(){
return i;
};
console.trace(result[i]);
}
return result;
}
console.trace(createFunctions());

function createFunctions(){
var result = new Array();
for (var i=0; i < 10; i++){
result[i] = function(num){
return function(){
return num;
};
}(i);
console.trace(result[i]);
}
return result;
}
console.trace(createFunctions().toString());



var name = "The Window";
var object = {
name : "My Object",
getNameFunc : function(){
return function(){
return this.name;
};
}
};
console.trace(object.getNameFunc()());

var name = "The Window";
var object = {
name : "My Object",
getNameFunc : function(){
    var that=this;
return function(){
return that.name;
};
}
};
console.trace(object.getNameFunc()());


var name = "The Window";
var object = {
name : "My Object",
getName: function(){
return console.trace(this.name);
}
};
object.getName(); 
(object.getName)(); 
(object.getName = object.getName)(); 

object.getName=function(){
    return console.trace();
}

var newValue = oldValue;
//error
var newValue = window.oldValue;
console.trace(newValue);
//undefined

//可以这么写 但是不推荐使用 XXX毫秒之后 运行一次 只运行一次
var timeoutId = setTimeout("console.trace('hello world')",1000);


var timeoutId =  setTimeout(function(){
    console.trace("1000毫秒过去了,hello world");
},1000);

//取消延时
clearTimeout(timeoutId);

setTimeout(function(){
    console.trace("500毫秒之后,不想hello world了");
    clearTimeout(timeoutId);
},500);


setTimeout(function(){
    console.trace("1500毫秒之后,不想hello world了,可是已经helloworld了");
    clearTimeout(timeoutId);
},1500);

//可以这么写 但是推荐使用 每隔XXX毫秒运行一次.持续运行
var intervalId = setInterval("console.trace('hello world')",1000);

var num=0;

var intervalId = setInterval(function(){
    num+=1;
    console.trace(`1000毫秒过去了,我第${num}次说hello world`);
},1000);

setTimeout(function(){
    console.trace("泥垢了,别说了");
    clearInterval(intervalId);
},4500);

function incrementNumber() {
    num+=1;
//如果执行次数未达到max 设定的值，则设置另一次超时调用
    if (num <= 10) {
        console.trace(`1000毫秒过去了,我第${num}次说hello world`);
        setTimeout(incrementNumber, 1000);
    } else {
        console.trace("泥垢了!")
    }
};
incrementNumber();