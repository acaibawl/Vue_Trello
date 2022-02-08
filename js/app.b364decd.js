(function(t){function e(e){for(var s,o,a=e[0],d=e[1],l=e[2],c=0,p=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,a=1;a<i.length;a++){var d=i[a];0!==n[d]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue_trello/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=d;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034b":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("board")],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",[t._v(" my Trello ")]),i("main",[i("p",{staticClass:"info-line"},[t._v("All: "+t._s(t.totalCardCount)+" tasks")]),i("draggable",{staticClass:"list-index",attrs:{list:t.lists},on:{end:t.movingList}},[t._l(t.lists,(function(e,s){return i("list",{key:e.id,attrs:{title:e.title,cards:e.cards,listIndex:s},on:{change:t.movingCard}})})),i("list-add")],2)],1)])},a=[],d=i("5530"),l=i("b76a"),u=i.n(l),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("div",{staticClass:"listheader"},[i("p",{staticClass:"list-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"list-counter"},[t._v("total: "+t._s(t.totalCardInList))]),i("div",{staticClass:"deletelist",on:{click:t.removeList}},[t._v("×")])]),i("draggable",{attrs:{group:"cards",list:t.cards},on:{end:function(e){return t.$emit("change")}}},[t._l(t.cards,(function(e,s){return i("card",{key:e.id,attrs:{body:e.body,cardIndex:s,listIndex:t.listIndex}})})),i("card-add",{attrs:{listIndex:t.listIndex}})],2)],1)},p=[],f=(i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("button",{staticClass:"close-button",on:{click:t.removeCardFromList}},[t._v(" × ")]),i("div",{staticClass:"body"},[t._v(" "+t._s(t.body)+" ")])])}),m=[],h={props:{body:{type:String,required:!0},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},methods:{removeCardFromList:function(){confirm("本当にこのカードを削除しますか？")&&this.$store.dispatch("removeCardFromList",{cardIndex:this.cardIndex,listIndex:this.listIndex})}}},b=h,v=i("2877"),g=Object(v["a"])(b,f,m,!1,null,null,null),y=g.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{class:t.classList,on:{submit:function(e){return e.preventDefault(),t.addCardToList.apply(null,arguments)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Add new card"},domProps:{value:t.body},on:{focusin:t.startEditing,focusout:t.finishEditing,input:function(e){e.target.composing||(t.body=e.target.value)}}}),t.isEditing||t.bodyExists?i("button",{staticClass:"add-button",attrs:{type:"submit"}},[t._v(" Add ")]):t._e()])},C=[],_={props:{listIndex:{type:Number,required:!0}},data:function(){return{body:"",isEditing:!1}},computed:{classList:function(){var t=["addcard"];return this.isEditing&&t.push("active"),this.bodyExists&&t.push("addable"),t},bodyExists:function(){return this.body.length>0}},methods:{startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isEditing=!1},addCardToList:function(){this.$store.dispatch("addCardToList",{body:this.body,listIndex:this.listIndex}),this.body=""}}},E=_,L=Object(v["a"])(E,x,C,!1,null,null,null),I=L.exports,O={components:{CardAdd:I,Card:y,draggable:u.a},props:{title:{type:String,required:!0},cards:{type:Array,required:!0},listIndex:{type:Number,required:!0}},computed:{totalCardInList:function(){return this.cards.length}},methods:{removeList:function(){confirm("本当にこのリストを削除しますか？")&&this.$store.dispatch("removelist",{listIndex:this.listIndex})}}},j=O,w=Object(v["a"])(j,c,p,!1,null,null,null),$=w.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{class:t.classList,on:{submit:function(e){return e.preventDefault(),t.addList.apply(null,arguments)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Add new list"},domProps:{value:t.title},on:{focusin:t.startEditing,focusout:t.finishEditing,input:function(e){e.target.composing||(t.title=e.target.value)}}}),t.isEditing||t.titleExists?i("button",{staticClass:"add-button",attrs:{type:"submit"}},[t._v(" Add ")]):t._e()])},T=[],k={data:function(){return{title:"",isEditing:!1}},computed:{classList:function(){var t=["addlist"];return this.isEditing&&t.push("active"),this.titleExists&&t.push("addable"),t},titleExists:function(){return this.title.length>0}},methods:{addList:function(){this.$store.dispatch("addlist",{title:this.title}),this.title=""},startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isEditing=!1}}},A=k,P=Object(v["a"])(A,S,T,!1,null,null,null),N=P.exports,q=i("2f62"),F={components:{ListAdd:N,List:$,draggable:u.a},computed:Object(d["a"])(Object(d["a"])({},Object(q["b"])(["lists"])),{},{totalCardCount:function(){return this.$store.getters.totalCardCount}}),methods:{movingCard:function(){this.$store.dispatch("updateList",{lists:this.lists})},movingList:function(){this.$store.dispatch("updateList",{lists:this.lists})}}},M=F,J=Object(v["a"])(M,o,a,!1,null,null,null),D=J.exports,B={name:"App",components:{Board:D}},z=B,G=Object(v["a"])(z,n,r,!1,null,null,null),H=G.exports;i("a434"),i("d81d"),i("e9c4");s["a"].use(q["a"]);var K=localStorage.getItem("trello-lists"),Q=new q["a"].Store({state:{lists:K?JSON.parse(K):[{title:"Backlog",cards:[{body:"English"},{body:"Mathematics"}]},{title:"Todo",cards:[{body:"Science"}]},{title:"Doing",cards:[]}]},mutations:{addlist:function(t,e){t.lists.push({title:e.title,cards:[]})},removelist:function(t,e){t.lists.splice(e.listIndex,1)},addCardToList:function(t,e){t.lists[e.listIndex].cards.push({body:e.body})},removeCardFromList:function(t,e){t.lists[e.listIndex].cards.splice(e.cardIndex,1)},updateList:function(t,e){t.lists=e.lists}},actions:{addlist:function(t,e){t.commit("addlist",e)},removelist:function(t,e){t.commit("removelist",e)},addCardToList:function(t,e){t.commit("addCardToList",e)},removeCardFromList:function(t,e){t.commit("removeCardFromList",e)},updateList:function(t,e){t.commit("updateList",e)}},getters:{totalCardCount:function(t){var e=0;return t.lists.map((function(t){return e+=t.cards.length})),e}}});Q.subscribe((function(t,e){localStorage.setItem("trello-lists",JSON.stringify(e.lists))}));var R=Q;i("034b");s["a"].config.productionTip=!1,new s["a"]({store:R,render:function(t){return t(H)}}).$mount("#app")}});
//# sourceMappingURL=app.b364decd.js.map