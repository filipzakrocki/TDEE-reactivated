(this["webpackJsonptdee-reactivated"]=this["webpackJsonptdee-reactivated"]||[]).push([[0],{27:function(e,t,a){e.exports=a(71)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(32),a(33),a(1)),u=(a(39),a(40),a(41),function(e){var t=e.children;return r.a.createElement("div",{className:"inputRowTitle"},r.a.createElement("h1",null,t))}),o=(a(42),function(e){var t=e.disabled,a=e.value,n=e.step,l=e.readOnly,c=e.changeHandler,i=e.type,u=e.label,o=e.isMetricSystem,s=e.units,g=e.isWeightLoss;return r.a.createElement("tr",{className:"inputRow"},r.a.createElement("td",{className:"inputRow-label"},u),r.a.createElement("td",{className:"inputRow-input"},r.a.createElement("input",{onChange:function(e){(g&&e.target.value>0||!g&&e.target.value<0)&&(e.target.value=0),c(e.target.value,o)},disabled:t,value:a,min:g?null:0,max:g?0:null,step:n,readOnly:l,required:!0,type:i})),r.a.createElement("td",{className:"inputRow-units"},s))}),s=(a(43),function(e){var t=e.children;return r.a.createElement("table",{className:"inputTable"},r.a.createElement("tbody",null,t))}),g=Object(i.b)((function(e){return{avgWeightOverTime:e.calculator.avgWeightOverTime,startWeight:e.calculator.startWeight,avgTdeeOverTime:e.calculator.avgTdeeOverTime,dailyKcalChange:e.calculator.dailyKcalChange,startDate:e.calculator.startDate,weeksForAvg:e.calculator.weeksForAvg,weeklyChange:e.calculator.weeklyChange,goalWeight:e.calculator.goalWeight,isMetricSystem:e.calculator.isMetricSystem,tdee:e.calculator.tdee,weekData:e.calculator.weekData,avgWeight:e.calculator.avgWeight}}))((function(e){var t=e.avgWeightOverTime,a=e.startWeight,n=e.avgTdeeOverTime,l=e.dailyKcalChange,c=e.avgWeight,i=e.isMetricSystem,g=e.weeksForAvg,d=e.weeklyChange,k=e.goalWeight,m=a-c,h=function(e,t){var a,n,r;return 1===e.length?e[0]:(a=(n=(r=e.filter((function(e){return e}))).slice(r.length-t,r.length)).reduce((function(e,t){return e+t}),0)/n.length,Math.ceil(a))};return r.a.createElement("div",{className:"currentStats"},r.a.createElement(u,{children:"Current Stats"}),r.a.createElement(s,null,r.a.createElement(o,{value:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(n,"-").concat(a<10?"0"+a:a,"-").concat(t<10?"0"+t:t)}(),readOnly:!0,type:"date",label:"Today's Date"}),r.a.createElement(o,{value:c||a,readOnly:!0,type:"number",label:"Your average weight",units:i?"kg":"lbs"}),r.a.createElement(o,{value:Math.abs(m.toFixed(2)),readOnly:!0,type:"number",label:"You have ".concat(c<a?"lost":"gained"),units:i?"kg":"lbs"}),r.a.createElement(o,{value:"".concat(h(n,g)),readOnly:!0,type:"number",label:"Your average TDEE",units:"kcal"}),r.a.createElement(o,{value:function(){var e=Math.round(((t[t.length-1]||a)-k)/d);return Math.abs(e)}(),readOnly:!0,type:"number",label:"Weeks to goal"}),r.a.createElement(o,{value:"".concat(h(n,g)+l),onChange:null,type:"number",label:"Recommended daily intake",units:"kcal"})))})),d=(a(44),Object(i.b)((function(e){return{startWeight:e.calculator.startWeight,dailyKcalChange:e.calculator.dailyKcalChange,startDate:e.calculator.startDate,weeklyChange:e.calculator.weeklyChange,goalWeight:e.calculator.goalWeight,initialInputsLocked:e.calculator.initialInputsLocked,isWeightLoss:e.calculator.isWeightLoss,isMetricSystem:e.calculator.isMetricSystem,weeksForAvg:e.calculator.weeksForAvg}}),(function(e){return{setStartWeight:function(t,a){return e(function(e,t){var a=(t?33:15)*e;return{type:"SET_START_WEIGHT",enteredWeight:Number(e),startingTdee:Math.ceil(a)}}(t,a))},setGoalWeight:function(t){return e(function(e){return{type:"SET_GOAL_WEIGHT",enteredGoal:Number(e)}}(t))},setDailyKcalChange:function(t){return e(function(e){var t=e/1100;return{type:"SET_DAILY_KCAL_CHANGE",dailyKcalChange:parseInt(e),weeklyChange:t.toFixed(2)}}(t))},setWeeklyChange:function(t){return e(function(e){var t=1100*e;return{type:"SET_WEEKLY_CHANGE",weeklyChange:Number(e),dailyKcalChange:Math.ceil(t)}}(t))},setStartDate:function(t){return e(function(e){var t=e;if(!e){var a=new Date,n=a.getDate(),r=a.getMonth()+1,l=a.getFullYear();t="".concat(l,"-").concat(r<10?"0"+r:r,"-").concat(n<10?"0"+n:n)}return{type:"SET_START_DATE",startDate:t}}(t))},setWeeksForAverage:function(t){return e(function(e){return e>4?e=4:e<1&&(e=1),{type:"SET_WEEKS_FOR_AVG",numberOfWeeks:Math.floor(e)}}(t))}}}))((function(e){var t=e.initialInputsLocked,a=e.startDate,n=e.startWeight,l=e.dailyKcalChange,c=e.weeklyChange,i=e.goalWeight,g=e.weeksForAvg,d=e.isMetricSystem,k=e.isWeightLoss,m=e.setStartWeight,h=e.setGoalWeight,E=e.setDailyKcalChange,f=e.setWeeklyChange,v=e.setStartDate,w=e.setWeeksForAverage;return r.a.createElement("div",{className:"initialInput"},r.a.createElement(u,null,"Initial Input"),r.a.createElement(s,null,r.a.createElement(o,{changeHandler:v,value:a,readOnly:t,type:"date",label:"Start Date"}),r.a.createElement(o,{changeHandler:m,value:n,readOnly:t,step:.1,minValue:1,type:"number",label:"Starting Weight",isMetricSystem:d,units:d?"kg":"lbs"}),r.a.createElement(o,{changeHandler:h,value:i,type:"number",step:.5,minValue:1,label:"Goal Weight",units:d?"kg":"lbs"}),r.a.createElement(o,{changeHandler:f,step:.05,value:c,isWeightLoss:k,type:"number",label:"Weekly Weight Change",units:d?"kg":"lbs"}),r.a.createElement(o,{changeHandler:E,value:l,isWeightLoss:k,type:"number",step:10,label:"Rquired Daily Kcal change",units:"kcal"}),r.a.createElement(o,{changeHandler:w,value:g,type:"number",step:1,min:1,max:4,label:"Calculate last # weeks",units:"weeks"})))}))),k=(a(45),function(e){var t=e.children;return r.a.createElement("div",{className:"inputColumn"},t)}),m=(a(46),Object(i.b)((function(e){return{startDate:e.calculator.startDate}}))((function(e){var t=e.startDate,a=new Date(t).getDay(),n=t?["Sun.","Mon.","Tues.","Wed.","Thurs.","Fri.","Sat.","Sun.","Mon.","Tues.","Wed.","Thurs.","Fri.","Sat."].slice(a,a+7):["","","","","","",""];return r.a.createElement("div",{className:"weekLabel"},r.a.createElement("div",{className:"weekLabel-wrapper"},r.a.createElement("div",{className:"weekLabel-label"}," Week"),r.a.createElement("div",{className:"weekLabel-label noMobile"}," Stats"),n.map((function(e,t){return r.a.createElement("div",{key:t,className:"weekLabel-dayLabel"}," "+e)})),r.a.createElement("div",{className:"weekLabel-label noMobile"}," Avg."),r.a.createElement("div",{className:"weekLabel-label noMobile"}," \u2206"),r.a.createElement("div",{className:"weekLabel-label"}," TDEE")))}))),h=(a(47),function(e){var t=e.children;return r.a.createElement("div",{className:"inputColumnWrapper"},t)}),E=a(25),f=a(11),v=a.n(f),w=Object(i.b)((function(e){return{state:e.calculator}}),null)((function(e){var t=e.state,a=Object(n.useState)(""),l=Object(E.a)(a,2),c=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){return localStorage.clear()}},"CLEAR THE STORAGE"),r.a.createElement("button",{onClick:function(){return console.log(t)}},"CONSOLE.LOG THE STATE"),r.a.createElement("button",{onClick:function(){return function(e,t){var a="https://tdee-fit.firebaseio.com/states/".concat(t,".json");v.a.put(a,e).then((function(e){return console.log("SUCCESS")}))}(t,c)}},"SAVE STATE TO FIREBASE"),r.a.createElement("button",{onClick:function(){return function(e){var t="https://tdee-fit.firebaseio.com/states/".concat(e,".json");v.a.get(t).then((function(e){return localStorage.setItem("state",JSON.stringify(e.data))})).then((function(e){return window.location.reload()}))}(c)}},"LOAD STATE FROM FIREBASE"))})),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"input"},r.a.createElement(w,null),r.a.createElement(h,null,r.a.createElement(k,null,r.a.createElement(d,null)),r.a.createElement(k,null,r.a.createElement(g,null))),r.a.createElement(m,null)))},b=(a(64),a(65),a(66),function(e){var t=e.children;return r.a.createElement("div",{className:"weekRow"},r.a.createElement("div",{className:"weekRow-wrapper"},t))}),W=(a(67),function(e){var t=e.top,a=e.bottom,n=e.children,l=e.hiddenInMobileView;return r.a.createElement("div",{className:"LabelCell ".concat(l?"mobileViewHide":"")},r.a.createElement("p",null,t),n,r.a.createElement("p",null,a))}),p=(a(68),function(e){var t=e.weekIndex,a=e.dayIndex,n=e.dayWeight,l=e.dayKcal,c=e.locked,i=e.changeHandler;return r.a.createElement("div",{className:"weekRow-entry"},r.a.createElement("input",{type:"number",onChange:function(e){i(l,e.target.value,t,a)},value:n,readOnly:c}),r.a.createElement("input",{type:"number",onChange:function(e){i(e.target.value,n,t,a)},value:l,readOnly:c}))}),T=(a(69),function(e){var t=e.locked,a=e.clickHandler;return r.a.createElement("button",{style:{border:"none",background:"white"},onClick:a},t?"\ud83d\udd12":"\u2714\ufe0f")}),D=Object(i.b)((function(e){return{weekData:e.calculator.weekData,startWeight:e.calculator.startWeight,avgTdeeArray:e.calculator.avgTdeeArray}}),(function(e){return{setWeeklyKcalAndKg:function(t,a){return e(function(e,t){var a,n=function(e,t){var a=e.filter((function(e){return e[t]}));return 0===a.length?0:a.reduce((function(e,a){return e+a[t]}),0)/a.length};return a=n(e,"kg").toFixed(2),{type:"SET_WEEKLY_KCAL_AND_KG",weekIndex:t,weeklyKcal:Math.ceil(n(e,"kcal")),weeklyWeight:Number(a)}}(t,a))},setWeeklyTdee:function(t,a){return e(function(e,t){return{type:"SET_WEEKLY_TDEE",weekIndex:t,tdee:Math.ceil(e)}}(t,a))},setKcalAndKg:function(t,a,n,r){return e({type:"SET_KCAL_AND_KG",kcal:t,kg:a,week:n,day:r})},lockWeek:function(t){return e(function(e){return{type:"LOCK_WEEK",weekIndex:e}}(t))}}}))((function(e){var t=e.weekNo,a=e.startDate,l=e.startWeight,c=e.weekData,i=e.weekIndex,u=e.weekDays,o=e.locked,s=e.setWeeklyKcalAndKg,g=e.setWeeklyTdee,d=e.setKcalAndKg,k=e.lockWeek;Object(n.useEffect)((function(){s(u,i)})),Object(n.useEffect)((function(){g(w,i)}));var m=a&&function(e,t){var a,n,r,l;return n=(a=new Date(e)).getDate(),r=a.getMonth(),l=a.getYear()+1900,new Date(l,r,n+(7*t-7)).toDateString().slice(3)}(a,t),h=c[i].avgKcal,E=c[i].avgWeight,f=i>0?function(e,t){for(var a=t.slice(0,e),n=a.length-1;n>=0;n--)if(a[n].avgWeight)return a[n].avgWeight}(i,c):l,v=E?E-f:0,w=h-1100*v,y=c[i].days.map((function(e,t){return r.a.createElement(p,{key:i+t,dayIndex:t,weekIndex:i,dayWeight:e.kg,dayKcal:e.kcal,changeHandler:d,locked:o})}));return r.a.createElement(b,null,r.a.createElement(W,{top:"Week ".concat(t),bottom:m}),r.a.createElement(W,{top:"kg",bottom:"kcal",hiddenInMobileView:!0},r.a.createElement(T,{locked:o,clickHandler:function(){return k(i)}})),c&&y,r.a.createElement(W,{top:"".concat(E.toFixed(2)," kg"),bottom:"".concat(Math.ceil(h)," kcal"),hiddenInMobileView:!0}),r.a.createElement(W,{top:"".concat(v.toFixed(2)," kg")}),r.a.createElement(W,{top:Math.ceil(w)+" KCAL"}))})),O=(a(70),Object(i.b)((function(e){return{weekNo:e.calculator.weekNo}}),(function(e){return{addAnotherWeek:function(t){return e(function(e){return{type:"ADD_ANOTHER_WEEK",weekEntry:{week:e,days:[{kg:"",kcal:""},{kg:"",kcal:""},{kg:"",kcal:""},{kg:"",kcal:""},{kg:"",kcal:""},{kg:"",kcal:""},{kg:"",kcal:""}],avgKcal:0,avgWeight:0,locked:!1},updatedWeekNo:e+1}}(t))}}}))((function(e){var t=e.weekNo,a=e.addAnotherWeek;return r.a.createElement("button",{onClick:function(){return a(t)},className:"addWeekBtn"},"Start another week")}))),S=Object(i.b)((function(e){return{weekData:e.calculator.weekData,startDate:e.calculator.startDate}}))((function(e){var t=e.weekData,a=e.startDate;return r.a.createElement("section",{className:"result"},t.map((function(e,t){return r.a.createElement(D,{key:t,weekNo:e.week,startDate:a,weekIndex:t,weekDays:e.days,locked:e.locked})})),r.a.createElement(O,null))}));var C=Object(i.b)((function(e){return{state:e.calculator}}))((function(e){return Object(n.useEffect)((function(){window.localStorage.setItem("state",JSON.stringify(e.state))}),[e.state]),document.title="TDEE.fit",r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(S,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A,_=a(24),N=a(26),K=function(e,t){return Object(N.a)({},e,{},t)},L=a(6),I={startDate:"",startWeight:0,goalWeight:0,isWeightLoss:null,dailyKcalChange:0,weeklyChange:0,weeksForAvg:2,avgTdeeOverTime:[],avgWeightOverTime:[],weeksToGoal:0,avgWeight:0,weekNo:1,isMetricSystem:!0,initialInputsLocked:!1,tdee:0,weekData:[]},M=function(e,t){return K(e,{startWeight:t.enteredWeight,avgWeightOverTime:[t.enteredWeight],avgTdeeOverTime:[t.startingTdee],isWeightLoss:t.enteredWeight>e.goalWeight})},j=function(e,t){return K(e,{goalWeight:t.enteredGoal,isWeightLoss:e.startWeight>t.enteredGoal})},F=function(e,t){return K(e,{dailyKcalChange:t.dailyKcalChange,weeklyChange:t.weeklyChange})},G=function(e,t){return K(e,{weeklyChange:t.weeklyChange,dailyKcalChange:t.dailyKcalChange})},x=function(e,t){return Object(L.a)(e,(function(e){e.weeksForAvg=t.numberOfWeeks}))},H=function(e,t){return K(e,{startDate:t.startDate})},R=function(e,t){return Object(L.a)(e,(function(e){e.weekData[t.week].days[t.day]={kg:Number(t.kg),kcal:Number(t.kcal)}}))},Y=function(e,t){return Object(L.a)(e,(function(e){e.avgWeightOverTime[t.weekIndex+1]=t.weeklyWeight,e.weekData[t.weekIndex].avgWeight=t.weeklyWeight,e.weekData[t.weekIndex].avgKcal=t.weeklyKcal,t.weeklyWeight&&(e.avgWeight=t.weeklyWeight)}))},V=function(e,t){return Object(L.a)(e,(function(e){e.avgTdeeOverTime[t.weekIndex+1]=t.tdee}))},B=function(e,t){return Object(L.a)(e,(function(a){a.weekData=[].concat(Object(_.a)(e.weekData),[t.weekEntry]),a.weekNo=t.updatedWeekNo,a.initialInputsLocked=!0}))},J=function(e,t){return Object(L.a)(e,(function(a){a.weekData[t.weekIndex].locked=!e.weekData[t.weekIndex].locked}))};A=JSON.parse(window.localStorage.getItem("state"));var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A||I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_START_WEIGHT":return M(e,t);case"SET_GOAL_WEIGHT":return j(e,t);case"SET_DAILY_KCAL_CHANGE":return F(e,t);case"SET_WEEKLY_CHANGE":return G(e,t);case"SET_START_DATE":return H(e,t);case"SET_WEEKS_FOR_AVG":return x(e,t);case"ADD_ANOTHER_WEEK":return B(e,t);case"LOCK_WEEK":return J(e,t);case"SET_KCAL_AND_KG":return R(e,t);case"SET_WEEKLY_KCAL_AND_KG":return Y(e,t);case"SET_WEEKLY_TDEE":return V(e,t);default:return e}},U=a(4),X=a(23),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,$=Object(U.c)({calculator:q}),z=Object(U.e)($,P(Object(U.a)(X.a))),Q=r.a.createElement(i.a,{store:z},r.a.createElement(C,null));c.a.render(Q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.530e1ad8.chunk.js.map