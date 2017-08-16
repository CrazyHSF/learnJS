/**
 * Created by wanggg on 2017-08-14.
 */

function Set(){
    this.elements = new Array(); //以一个Array 模拟一个Set
    for(var i=0;i<arguments;i++ ){
        elements.put(arguments[i]);
    }
    //返回set中的元素数量
    this.size = function(){
        return this.elements.length;
    }

    //add方法 不存在即不做操作
    this.add = function (element){
        try {
            if (this.elements.indexOf(element) < 0) {
                this.elements.push(element);
            }
        }catch (e){
            return false
        }
        return true
    }


    //移除已存在的指定数据 存在 返回true 不存在返回 false
    this.delete = function (element){
        var pos = this.elements.indexOf(element);
        if (pos > -1) {
            this.elements.splice(pos,1);
            return true;
        }
        else {
            return false;
        }
    }


    //复制一个一样的Set
    this.clone = function (){
        var ret = new Array();
        for (var i = 0; i < this.elements.length; i++) {
               ret.push(elements[i]);
        }
        return ret;
    }

    //清空集合中的元素
    this.clear = function (){
        this.elements = new Array();
    }

    //打印所有元素
    this.show = function () {
        return "[" + this.elements + "]";
    }

    //在元素中间插入指定的字符串  1,2,3 格式化为  "1","2","3"
    this.showJoinWith = function (character) {
        return character + this.elements.join(character) + character;
    }

    //是否存在当前元素
    this.contains = function (element) {
        if (this.elements.indexOf(element) > -1) {
            return true;
        }
        else {
            return false;
        }
    }

}