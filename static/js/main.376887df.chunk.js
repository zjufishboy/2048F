(this.webpackJsonp2048F=this.webpackJsonp2048F||[]).push([[0],{136:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(10),l=a.n(r),i=(a(82),a(50),a(83),a(84),a(72)),c=(a(86),a(73)),s=a(66),m=a(67),u=a(74),d=a(68),f=a(75),h=(a(88),{divInfo:[{level:0,color:"white",bgColor:"black"},{level:1,color:"white",bgColor:"#2e8a73"},{level:2,color:"white",bgColor:"#3db497"},{level:3,color:"white",bgColor:"#37a58a"},{level:4,color:"white",bgColor:"#2e8a73"},{level:5,color:"white",bgColor:"#27725f"},{level:6,color:"white",bgColor:"#1f5e4e"},{level:7,color:"white",bgColor:"#216151"},{level:8,color:"white",bgColor:"#163f35"},{level:9,color:"white",bgColor:"#0b1f1a"},{level:10,color:"white",bgColor:"#030807"}]}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this))).randomPutNum=function(e){var t;if(0!==(t=a.getSpace()).length){var o=t[(new Date).getTime()%t.length],n=parseInt(o/4),r=o%4,l=a.state.max>16?4:2;0===a.state.map[n][r]?a.setItem(n,r,l):a.randomPutNum(!1)}else c.a.info("\u6e38\u620f\u7ed3\u675f!:"+Math.pow(2,a.state.max))},a.getSpace=function(){for(var e=[],t=0;t<4;t++)for(var o=0;o<4;o++)0===a.state.map[t][o]&&e.push(4*t+o);return e},a.restart=function(){a.setState({map:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],max:1}),setTimeout((function(){a.randomPutNum(!0)}),50),setTimeout((function(){a.saveState()}),100)},a.saveState=function(){localStorage.setItem("2048data",JSON.stringify(a.state.map)),localStorage.setItem("2048dataMax",a.state.max.toString())},a.getState=function(){a.setState({map:JSON.parse(localStorage.getItem("2048data"))}),a.setState({max:parseInt(localStorage.getItem("2048dataMax"))})},a.handleMapRight=function(){for(var e=a.state,t=e.map,o=e.max,n=0;n<4;n++){for(var r=[t[n][0],t[n][1],t[n][2],t[n][3]],l=3,i=-1,c=0;c<4;c++){var s=3-c;0!==r[s]&&(-1!==i&&r[s]===r[i]&&(r[i]+=1,r[i]>o&&(o=r[i]),r[s]=0),r[l]=r[s],i=l,l-=1)}for(var m=l;m>=0;m--)r[m]=0;t[n][0]=r[0],t[n][1]=r[1],t[n][2]=r[2],t[n][3]=r[3]}a.setState({map:t,max:o})},a.handleMapLeft=function(){for(var e=a.state,t=e.map,o=e.max,n=0;n<4;n++){for(var r=[t[n][0],t[n][1],t[n][2],t[n][3]],l=0,i=-1,c=0;c<4;c++){var s=c;0!==r[s]&&(-1!==i&&r[s]===r[i]&&(r[i]+=1,r[i]>o&&(o=r[i]),r[s]=0),r[l]=r[s],i=l,l+=1)}for(var m=l;m<4;m++)r[m]=0;t[n][0]=r[0],t[n][1]=r[1],t[n][2]=r[2],t[n][3]=r[3]}a.setState({map:t,max:o})},a.handleMapUp=function(){for(var e=a.state,t=e.map,o=e.max,n=0;n<4;n++){for(var r=[t[0][n],t[1][n],t[2][n],t[3][n]],l=0,i=-1,c=0;c<4;c++){var s=c;0!==r[s]&&(-1!==i&&r[s]===r[i]&&(r[i]+=1,r[i]>o&&(o=r[i]),r[s]=0),r[l]=r[s],i=l,l+=1)}for(var m=l;m<4;m++)r[m]=0;t[0][n]=r[0],t[1][n]=r[1],t[2][n]=r[2],t[3][n]=r[3]}a.setState({map:t,max:o})},a.handleMapDown=function(){for(var e=a.state,t=e.map,o=e.max,n=0;n<4;n++){for(var r=[t[0][n],t[1][n],t[2][n],t[3][n]],l=3,i=-1,c=0;c<4;c++){var s=3-c;0!==r[s]&&(-1!==i&&r[s]===r[i]&&(r[i]+=1,r[i]>o&&(o=r[i]),r[s]=0),r[l]=r[s],i=l,l-=1)}for(var m=l;m>=0;m--)r[m]=0;t[0][n]=r[0],t[1][n]=r[1],t[2][n]=r[2],t[3][n]=r[3]}a.setState({map:t,max:o})},a.itemToDiv=function(e,t){return n.a.createElement("div",{className:"ccFlexColumn",style:{width:56,height:56,background:h.divInfo[e].bgColor,color:h.divInfo[e].color,borderRadius:12,fontSize:30,fontWeight:"bold"}},0===e?null:Math.pow(2,e-1))},a.lineToDiv=function(e,t){return n.a.createElement("div",{className:"bcFlexRow",style:{width:240,height:56},key:"line_"+t},e.map(a.itemToDiv))},a.state={map:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],max:1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("2048dataMax")?this.getState():this.randomPutNum(!0),window.addEventListener("keydown",(function(t){switch(t.key){case"ArrowDown":e.handleMapDown();break;case"ArrowUp":e.handleMapUp();break;case"ArrowLeft":e.handleMapLeft();break;case"ArrowRight":e.handleMapRight();break;default:console.log(t.key)}e.randomPutNum(!0),setTimeout((function(){e.saveState()}),50)}))}},{key:"setItem",value:function(e,t,a){var o=this.state.map;o[e][t]=a,this.setState({map:o})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"OutSide ccFlexColumn",style:{background:"#efefef"}},n.a.createElement("div",{className:"bcFlexColumn",style:{width:240,height:240,background:"#bbada0",borderTopLeftRadius:20,borderTopRightRadius:20,padding:16/3}},this.state.map.map(this.lineToDiv)),n.a.createElement("div",{className:"ccFlexRow",style:{width:240,height:40,background:"#ffffff",borderBottomLeftRadius:20,borderBottomRightRadius:20,padding:16/3}},n.a.createElement("div",{className:"ccFlexRow",style:{width:120}},"\u6700\u5927\u503c\uff1a",Math.pow(2,this.state.max)),n.a.createElement("div",{className:"ccFlexRow",style:{width:40}},n.a.createElement(i.a,{type:"link",onClick:function(){e.restart()}},"\u91cd\u7f6e"))))}}]),t}(n.a.Component);var p=function(){return n.a.createElement("div",{className:"ccFlexColumn"},n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){},77:function(e,t,a){e.exports=a(136)},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.376887df.chunk.js.map