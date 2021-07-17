(function(){
"use strict";
var ownerDoc = document;

var jua = function(){
// ui for this not for user

function slide(elem,type){
var slideIndex = [1];
showSlides(1, 0,type);
function plusSlides(n, no, type) {
  showSlides(slideIndex[no] += n, no, type);
}
elem.select(".Jua-slideshow-next-button").click(function(){plusSlides(1, 0, type)})
elem.select(".Jua-slideshow-prev-button").click(function(){plusSlides(-1, 0, type)})
function showSlides(n, no, type) {
  var i;
  var x = elem.select(".Jua-slideshow-image");
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     Jua(x[i]).class("display","none");
  }
     Jua(x[slideIndex[no]-1]).class("display","block");
     if (type == "normal") {
        Jua(x[slideIndex[no]-1]).class("opacity","0");
        Jua(x[slideIndex[no]-1]).fadeIn(1000);
     }
     if (type == "3d") {
        Jua(x[slideIndex[no]-1]).class("transform","rotate3d(46, 18, 23, 213deg)");
        Jua(x[slideIndex[no]-1]).anim({transform:"rotate3d(1, 1, 1, 0deg)",})
     }
     Jua(x[slideIndex[no]-1]).class("position","static");


}

elem.select(".Jua-slideshow-image").click(function(){window.open(this.src)});
};


   function animation(selector) {
      var elem = Jua(selector);
      var frames = new Array();
      var currentFrameNum = 0;
      var currentFrame = frames[currentFrameNum];
      var dish = this;

      this.addFrame = function(css,ms){
         frames[frames.length] = [css,ms];
         if (currentFrameNum == 0) {currentFrame = frames[currentFrameNum]};
      };
      var nextFrame = function(){
             if (frames.length > currentFrameNum) {
               if (typeof currentFrame[0] != "function") {
                 elem.class("transition",currentFrame[1]+"ms");
           for (let x in currentFrame[0]) {
              if (x != "innerHTML") {
               elem.class(x,currentFrame[0][x]);
              }else{
               elem.html(currentFrame[0][x]);
              }
           }
               }else{
                 currentFrame[0]();
               }

         setTimeout(function(){
           if (frames.length > currentFrameNum) {
             currentFrameNum++;
            currentFrame = frames[currentFrameNum];
           nextFrame();
           }
         },currentFrame[1])


             }
      };

      this.start = function(){setTimeout(function() {nextFrame();}, 10);};

   }


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}


var ssaf = function(elem) {
try{
       const {
       tagName,
       id,
       className,
       parentNode
     } = elem;

  if (tagName === 'HTML') return 'HTML';
  let str = tagName;
  str += (id !== '') ? `#${id}` : '';
  if (className) {
    const classes = className.split(/\s/);
    for (let i = 0; i < classes.length; i++) {
      str += `.${classes[i]}`;
    }
  }
  let childIndex = 1;
  for (let e = elem; e.previousElementSibling; e = e.previousElementSibling) {
    childIndex += 1;
  }
  str += `:nth-child(${childIndex})`;
   
return `${ssaf(parentNode)} > ${str}`;
}catch(err){
  return false;
}
}

var generateQuerySelector = function(elem){
  var i = ssaf(elem);
if (i.toString().search("false") == 0) {return undefined;}else{return i;}
}

// ui for this not for user

this.onload = function(callback){
  window.onload = callback;
} 

this.options = function(){
return Jua();
}
this.isJua = function(node){
  if (node) {if(typeof node == "object"){if (node.Jua) {return true;}}}else{
   throw new Error("This is "+node+" we Don't check it")
  }

  return false;
}
this.doc = function(documen){
if (typeof docum == "object" && documen.doctype) {
  ownerDoc = documen;

}else{
   throw new Error(documen+" is not typeof document !");
}
return this;
};


this.__proto__.about = {
    name:"Jua.js",
    author:"Santhosh.S",
    version: "1.0",
}
this.about = {
    name:"Jua.js",
    author:"Santhosh.S",
    version: "1.0",
}
this.replaceElement = function(  wantToReplaceElement  ,  toReplaceElement  ){
  
  if (Jua().isJua(wantToReplaceElement)) { wantToReplaceElement = wantToReplaceElement.node;}
  if (Jua().isJua(toReplaceElement)) { toReplaceElement = toReplaceElement.node;}

  if (typeof wantToReplaceElement == "object" && typeof toReplaceElement == "object") {
  if (wantToReplaceElement.parentNode) {
    for (var i = 0; i < wantToReplaceElement.children.length; i++) {
      toReplaceElement.appendChild(wantToReplaceElement.children[i])
    }
    wantToReplaceElement.parentNode.replaceChild(toReplaceElement, wantToReplaceElement);
  }else{
   throw new Error("Can't get Parent Node For Given Element !")
  }
  return toReplaceElement;
  }else{
    var Element = "";
    if (typeof wantToReplaceElement != "object") {Element += wantToReplaceElement;}
      if (typeof toReplaceElement != "object") {Element +=  toReplaceElement;}

    
  throw new Error("On Replace "+typeof Element+" "+Element+" Not typeof Node");
     return "You Got An Error Check In Console";
  }
};


this.rgbToHex = function(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

this.hexToRgb = function(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
    throw new Error('Bad Hex');
}

this.type = function(selector,text,speed,type){
 speed = speed || 100;
if (type) {
  if(type.toLowerCase() == "html"){type = "html";}
  if(type.toLowerCase() == "text"){type = "text";}
  if(type.toLowerCase() == "val"){type = "val";}
}else{
 type = "text";
}
  text = Jua.decode(text);
for (var i = 0; i < text.toString().length+1; i++) {
 set(selector,i,text,Number(speed),type);
}
}

function set(selector,i,w,speed,type){
  setTimeout(function() {
    Jua(selector)[type](w.substring(0,i));
},i*speed);
}


this.resizable = function(elmnt,pos,type){
if (pos == undefined || pos.toLowerCase() != "x" && pos.toLowerCase() != "y" ) { pos = undefined;}
if (Jua().isJua(elmnt)) { elmnt = elmnt.node;}
  if(Jua(elmnt).class("position") == "static"){
    Jua(elmnt).class("position","absolute")
  }
    Jua(elmnt).class("user-select","none")

const $elem = elmnt;
type = type;
var lCursor = Jua($elem).class("cursor");
var pas = undefined;
var ctrlKey = false; 

var textNodes = {h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",text:"text",input:"input",ul:"ul",ol:"ol",span:"span",path:"path",polygon:"polygon",};
if (type == "normal") {type = "normal"}else{if (type == "text" || $elem.tagName.toLowerCase() in textNodes) {type = "text"}else{type = "normal";}};

window.addEventListener("keydown",function(e){if (e.ctrlKey) {ctrlKey = true;}});
window.addEventListener("keyup",function(e){if (!e.ctrlKey) {ctrlKey = false;}});

const mutable = function(e) {

  const h = parseFloat(Jua(this).class("height")) * parseFloat(new WebKitCSSMatrix(Jua(this).class("transform"))["d"]);
  const w = parseFloat(Jua(this).class("width")) * parseFloat(new WebKitCSSMatrix(Jua(this).class("transform"))["a"]);

  const t = this.offsetTop - parseFloat(Jua(this).class("margin-top"));
  const l = this.offsetLeft - parseFloat(Jua(this).class("margin-left"));

  const y = t + h - e.pageY;
  const x = l + w - e.pageX;
  
 
  const hasResized = () =>
    !(w === parseFloat(Jua(this).class("width")) * parseFloat(new WebKitCSSMatrix(Jua(this).class("transform"))["a"]) && h === parseFloat(Jua(this).class("height")) * parseFloat(new WebKitCSSMatrix(Jua(this).class("transform"))["d"]));
  
  function gg(e){resize(e,pas)};
  
  const resize = (e,ss) => {
   if (ss == undefined || ss == "") {
if (ctrlKey) {
  var calc = 0;
  if (e.pageX < e.pageY) {calc = e.pageY;}
  if (e.pageX > e.pageY) {calc = e.pageX;}
      this.style.width = `${(calc - l + x)}px`;
    this.style.height = `${(calc - t + y)}px`;
     if (type == "text") {
       var clas = Jua($elem);
       var elemNew = Jua($elem.cloneNode(true));
       var matrix = new WebKitCSSMatrix(clas.class("transform"));
       elemNew.class("width","max-content");
       elemNew.class("height","max-content");
       elemNew.class("position","fixed");
       elemNew.class("top","500000000000000000000000000000000000000000000px");
       elemNew.class("left","500000000000000000000000000000000000000000000px");
       ownerDoc.body.appendChild(elemNew.node)
       this.style.transformOrigin = "0px 0px";
       this.style.transform = "matrix("+(parseFloat(clas.class("width"))/parseFloat(elemNew.class("width")))+","+matrix["b"]+","+matrix["c"]+","+(parseFloat(clas.class("height"))/parseFloat(elemNew.class("height")))+","+matrix["e"]+","+matrix["f"]+")";
       this.style.height = "max-content";
       this.style.width = "max-content";
       ownerDoc.body.removeChild(elemNew.node)
   };
}else{
      this.style.width = `${(e.pageX - l + x)}px`;
    this.style.height = `${(e.pageY - t + y)}px`;
     if (type == "text") {
       var clas = Jua($elem);
       var elemNew = Jua($elem.cloneNode(true));
       var matrix = new WebKitCSSMatrix(clas.class("transform"));
       elemNew.class("width","max-content");
       elemNew.class("height","max-content");
       elemNew.class("position","fixed");
       elemNew.class("top","500000000000000000000000000000000000000000000px");
       elemNew.class("left","500000000000000000000000000000000000000000000px");
       ownerDoc.body.appendChild(elemNew.node)
       this.style.transformOrigin = "0px 0px";
       this.style.transform = "matrix("+(parseFloat(clas.class("width"))/parseFloat(elemNew.class("width")))+","+matrix["b"]+","+matrix["c"]+","+(parseFloat(clas.class("height"))/parseFloat(elemNew.class("height")))+","+matrix["e"]+","+matrix["f"]+")";
       this.style.height = "max-content";
       this.style.width = "max-content";
       ownerDoc.body.removeChild(elemNew.node)
   };
}
   }else{
    if (ss == "x") {this.style.width = `${(e.pageX - l + x)}px`;  
if (type == "text") {
       var clas = Jua($elem);
       var elemNew = Jua($elem.cloneNode(true));
       var matrix = new WebKitCSSMatrix(clas.class("transform"));
       elemNew.class("width","max-content");
       elemNew.class("height","max-content");
       elemNew.class("position","fixed");
       elemNew.class("top","500000000000000000000000000000000000000000000px");
       elemNew.class("left","500000000000000000000000000000000000000000000px");
       ownerDoc.body.appendChild(elemNew.node)
       this.style.transformOrigin = "0px 0px";
       this.style.transform = "matrix("+(parseFloat(clas.class("width"))/parseFloat(elemNew.class("width")))+","+matrix["b"]+","+matrix["c"]+","+matrix["d"]+","+matrix["e"]+","+matrix["f"]+")";
       this.style.height = "max-content";
       this.style.width = "max-content";
       ownerDoc.body.removeChild(elemNew.node)
   };
  }
    if (ss == "y") {this.style.height = `${(e.pageY - t + y)}px`;  
if (type == "text") {
       var clas = Jua($elem);
       var elemNew = Jua($elem.cloneNode(true));
       var matrix = new WebKitCSSMatrix(clas.class("transform"));
       elemNew.class("width","max-content");
       elemNew.class("height","max-content");
       elemNew.class("position","fixed");
       elemNew.class("top","500000000000000000000000000000000000000000000px");
       elemNew.class("left","500000000000000000000000000000000000000000000px");
       ownerDoc.body.appendChild(elemNew.node)
       this.style.transformOrigin = "0px 0px";
       this.style.transform = "matrix("+matrix["a"]+","+matrix["b"]+","+matrix["c"]+","+(parseFloat(clas.class("height"))/parseFloat(elemNew.class("height")))+","+matrix["e"]+","+matrix["f"]+")";
       this.style.height = "max-content";
       this.style.width = "max-content";
       ownerDoc.body.removeChild(elemNew.node)
   };
  }
   }
  

  }
  
  
  const unresize = (e) => {
    ownerDoc.removeEventListener('mousemove', resize);
    ownerDoc.removeEventListener('mousemove', gg);
    ownerDoc.removeEventListener("mouseup", unresize);
    if (hasResized(e)) this.dispatchEvent(new Event('resized'));
    else this.dispatchEvent(new Event('clicked'));
    e.preventDefault();
  }
 

 if(pos == undefined || pos == ""){ 

  if (x < 5 && y < 5) {
    ownerDoc.addEventListener("mousemove", resize);
    ownerDoc.addEventListener("mouseup", unresize);
    e.preventDefault();
  }else{
        if (x < 5) {
          pas = "x";
    ownerDoc.addEventListener("mousemove", gg);
    ownerDoc.addEventListener("mouseup", unresize);
    e.preventDefault();
  }else{
        if (y < 5) {
          pas = "y";
    ownerDoc.addEventListener("mousemove", gg);
    ownerDoc.addEventListener("mouseup", unresize);
    e.preventDefault();
  } 
  }
  }

}else{
    if (pos.toLowerCase() == "x" && x < 5) {
      pas = "x";
    ownerDoc.addEventListener("mousemove", gg);
    ownerDoc.addEventListener("mouseup", unresize);
    e.preventDefault();
  } 

  if (pos.toLowerCase() == "y" && y < 5) {
    pas = "y";
    ownerDoc.addEventListener("mousemove",  gg);
    ownerDoc.addEventListener("mouseup", unresize);
    e.preventDefault();
  }
  }

  

}

$elem.addEventListener("mousedown", mutable);
window.addEventListener("mousemove", function(e){

 const h = parseFloat(Jua($elem).class("height")) * parseFloat(new WebKitCSSMatrix(Jua($elem).class("transform"))["d"]);
  const w = parseFloat(Jua($elem).class("width")) * parseFloat(new WebKitCSSMatrix(Jua($elem).class("transform"))["a"]);


  const t = $elem.offsetTop - parseFloat(Jua($elem).class("margin-top"));
  const l = $elem.offsetLeft - parseFloat(Jua($elem).class("margin-left"));

  const y = t + h - e.pageY;
  const x = l + w - e.pageX;

if (pos == undefined || pos == "") {

if(x < 5 && y < 5){ $elem.style.cursor = "se-resize"; }else{
if(y < 5){ $elem.style.cursor = "s-resize"; }else{if(x < 5){ $elem.style.cursor = "e-resize"; }else{$elem.style.cursor = lCursor;};};
};



}else{

if(pos == "y" && y < 5){ $elem.style.cursor = "s-resize"; }else{if(pos == "x" && x < 5){ $elem.style.cursor = "e-resize"; }else{$elem.style.cursor = lCursor;};};


}

})


}


this.draggable = function(elmnt) {
  const $elem = elmnt;
    Jua(elmnt).class("user-select","none");

  if(Jua(elmnt).class("position") == "static"){
    Jua(elmnt).class("position","absolute")
  }

    Jua(elmnt).class("cursor","move");

const mutable = function(e) {
 const h = parseFloat(Jua($elem).class("height")) * parseFloat(new WebKitCSSMatrix(Jua($elem).class("transform"))["d"]);
  const w = parseFloat(Jua($elem).class("width")) * parseFloat(new WebKitCSSMatrix(Jua($elem).class("transform"))["a"]);

  const t = this.offsetTop - parseFloat(Jua(this).class("margin-top"));
  const l = this.offsetLeft - parseFloat(Jua(this).class("margin-left"));

  const y = t + h - e.pageY;
  const x = l + w - e.pageX;
  
  const hasMoved = () =>
    !(t === this.offsetTop && l === this.offsetLeft);
  
  
  
  const follow = (e) => {
    this.style.top = `${e.pageY + y - h}px`;
    this.style.left = `${e.pageX + x - w}px`;
  }
  
  
  const unfollow = (e) => {
    ownerDoc.removeEventListener('mousemove', follow);
    ownerDoc.removeEventListener("mouseup", unfollow);
    if (hasMoved(e)) this.dispatchEvent(new Event('moved'));
    else this.dispatchEvent(new Event('clicked'));
    e.preventDefault();
  }
  
  if (x > 3 && y > 3) {
    ownerDoc.addEventListener("mousemove", follow);
    ownerDoc.addEventListener("mouseup", unfollow);
    e.preventDefault();
  }

}

$elem.addEventListener("mousedown", mutable);


};


this.timer = function(){
  var starting = "";
  var pause = 0;
  starting = Date.now();
   var now = 0;
return {now:function(){return {ms:Date.now() - starting,s: (Date.now() - starting)/1000,}}};
}


this.animation = function(selector){
  return new animation(selector);
}


this.copy = function(text){
  var aux = ownerDoc.createElement("input");
  var active = "";
  active = generateQuerySelector(ownerDoc.activeElement);
  aux.setAttribute("value", text);
  ownerDoc.body.appendChild(aux);
  aux.select();
  ownerDoc.execCommand("copy");
  ownerDoc.body.removeChild(aux);
  if (active) {Jua.select(active).focus();};
}

   this.getFromUrl = function(value){
                var idx = ownerDoc.URL.indexOf('?');
                var params = new Array();
                if (idx != -1) {
                    var pairs = ownerDoc.URL.substring(idx+1, ownerDoc.URL.length).split('&');
                    for (var i = 0; i < pairs.length; i++){
                        nameVal = pairs[i].split('=');
                        params[nameVal[0]] = nameVal[1];
                    }
             var obj = params[value];
           if(obj){
             returnValue = decodeURIComponent(obj.replace(/\+/g,  " "));
             return returnValue;
           }else{
             return false;
           }
                }
            };

    this.decode = function (html) {
  var txt = ownerDoc.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

  this.encode = function (html) {
  var txt = ownerDoc.createElement('textarea');
  txt.textContent = html;
  return txt.innerHTML;
};



this.toggleFunc = function(){
var funcs = new Array();
var num = 0;
var FuncName = "";
for (var i = 0; i < arguments.length; i++) {
 if (typeof arguments[i] == "function") {
   FuncName += name+arguments[i].name+arguments[i].value;
   funcs[num] = arguments[i];
   num++;
 }
}


if (funcs[window[FuncName]]) {
funcs[window[FuncName]]({length:funcs.length,curent:window[FuncName],name:funcs[window[FuncName]].name});
window[FuncName]++;
}else{
  window[FuncName] = 0;
funcs[window[FuncName]]({length:funcs.length,curent:window[FuncName],name:funcs[window[FuncName]].name});
window[FuncName]++;

}
}


this.ready = function(callback){
  if  (ownerDoc.readyState === "complete" || ownerDoc.readyState === "interactive") {
    setTimeout(callback, 1);
  } else { 
    ownerDoc.addEventListener("DOMContentLoaded", callback);
  }
  };

this.record = function(elem,fps,fileName){
   if (!fileName) {fileName = "untitled";}
elem = Jua(elem)[0].node;
fps = fps || 25;
var recorder = {};
var recordee = new MediaRecorder(elem.captureStream(fps));
recorder.start = function(){recordee.start()};
recorder.pause = function(){recordee.pause()};
recorder.resume = function(){recordee.resume()};
recorder.save = function(){setTimeout(function() {recordee.ondataavailable = e => {console.log(e);Jua.download(fileName,e.data,true)};recordee.stop()}, 1000);}
return recorder;
}


 this.download = function(filename, data, blob) {
  var text = data;
    var element = ownerDoc.createElement('a');
   if (blob) {
     element.setAttribute('href', URL.createObjectURL(text));
   }else{
     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   }
   if (!filename) {fileName = "untitled";}
    element.setAttribute('download', filename);
    element.style.display = 'none';
    ownerDoc.body.appendChild(element);
    element.click();
    ownerDoc.body.removeChild(element);
};

 this.createParent = function(element,parentElement){
if (Jua().isJua(element)) { element = element.node;}

if (Jua().isJua(parentElement)) { parentElement = parentElement.node;}

var parentElement = parentElement.cloneNode(true);
parentElement.appendChild(element.cloneNode(true));
var elem = Jua.replaceElement(element,parentElement);

for (var i = 0; i < elem.childNodes.length; i++) {
  if(elem.childNodes[i].cloneNode(true).isSameNode(element.cloneNode(true))){
    elem = elem.childNodes[i];
  }
}

return Jua(elem);
 }

this.stringToNode = function(text){
  var e = Jua.new("div");
  e.node.innerHTML = text;
  return e.node.children[0];
};

this.nodeToString = function(node){
if (Jua().isJua(node)) { node = node.node;}

var elem = ownerDoc.createElement("div");
  elem.appendChild(node)
  return elem.innerHTML;
}

this.get = function(path,callback){
 const xhttp = new XMLHttpRequest();
 var g = "";
 var status = "sucess";
  xhttp.onload = function(e){g = this.responseText;status = this.status; if(this.status == 200){status = "failed";};if(this.status == 403){status = "failed";};if(this.status == 404){status = "failed";};callback(this.responseText,status,this,e);};
  xhttp.open("GET", path);
  xhttp.send();
  return g;
}

this.random = function(array){
 if (arguments.length == 1) {
   return array[Math.floor(Math.random() * array.length)];
 }else{
   return arguments[Math.floor(Math.random() * arguments.length)];
 }
}


 this.readFile = function( file , callback , type){
  type = type || "dataurl";
    if (typeof callback == "function") {
        var reader = new FileReader();
      reader.onload = function(){
        if (typeof callback == "function") {callback(reader.result);}
      };
      if (type.toLowerCase().search("dataurl") != -1) {  reader.readAsDataURL(file)  };
      if (type.toLowerCase().search("binary") != -1) {  reader.readAsBinaryString(file)  };
      if (type.toLowerCase().search("arraybuffer") != -1) {  reader.readAsArrayBuffer(file)  };
      if (type.toLowerCase().search("text") != -1) {  reader.readAsText(file)  };
       return reader;
    }else{
       throw new Error("Callback Is Not Typeof Function");
     return "You Got An Error Check In Console";
    };
     
 };

 this.new = function(tagName){
  var parent = ownerDoc.createElement("div");
  parent.appendChild(ownerDoc.createElement(tagName));
  return Jua(parent.children[0]);}

this.slideShow = function(selector,type){  
var types = {
  normal:"normal",
  "3d":"3d",
}
if (typeof type == "string" && type.toLowerCase() in types) {type = type;}else{
  type ="normal";
}



var script = `<style>.Jua-slideshow-container {  max-width: 1000px; width: max-content; height: max-content; position: relative;  margin: auto;  border-radius: 25px;   overflow: hidden;}.Jua-slideshow-container .Jua-slideshow-image { vertical-align: middle; cursor: zoom-in;}.Jua-slideshow-container .Jua-slideshow-prev-button, .Jua-slideshow-next-button{  cursor: pointer;  position: absolute;  top: 50%;  width: auto;  padding: 16px;  margin-top: -22px;  color: white;  font-weight: bold;  font-size: 18px;  transition: 0.6s ease;  border-radius: 0 3px 3px 0;  user-select: none;}.Jua-slideshow-container .Jua-slideshow-next-button {  right: 0;  border-radius: 3px 0 0 3px;}.Jua-slideshow-container .Jua-slideshow-prev-button {  left: 0;  border-radius: 3px 0 0 3px;}.Jua-slideshow-container .Jua-slideshow-prev-button:hover, .Jua-slideshow-next-button:hover {  background-color:  black;  color: white;}.Jua-preview-image-fade-container{position: fixed;top: 0px;right: 0px;left: 0px;bottom: 0px;background: #00000096;z-index: 99999999999999999999;}.Jua-preview-image-fade-container .Jua-preview-image-fade{  position: absolute; top:0;  left:0; bottom:0; right:0;  margin: auto;}</style>`;
var elem = Jua(selector).child("img");
var length = elem.length;
var app = Jua.new("div");
elem.forEach(function(g,t){
    g.addClass("Jua-slideshow-image");
    app.append(g);
});
app.addClass("Jua-slideshow-container");
app.node.innerHTML += script; 
app.node.innerHTML += `<a class="Jua-slideshow-next-button">&#10095;</a><a class="Jua-slideshow-prev-button" >&#10094;</a>`;
Jua(selector)[0].empty();
Jua(selector)[0].append(app);
slide(app,type)


}




this.select = function(selectorOrNode){
  var objectt = new JUA();


  function JUA(){
  // process selectorOrNode to this //

if (Jua.isJua(selectorOrNode)) {
var selectorOrNodeThis = this;

selectorOrNode.forEach(function(e,t){ 
   selectorOrNodeThis[t] = e;
})

}else{

if (selectorOrNode) {
  if (typeof selectorOrNode == "object"){
if (selectorOrNode.length == undefined) {
     this[0] = Object.create({});
     this[0].node = selectorOrNode;
     this[0].index = g;


   }else{
if (selectorOrNode.length == 0) {
  throw new Error("No Element To Select !")
}else{
      var g = 0;
   for (var i = 0; i < selectorOrNode.length; i++) {
   if (selectorOrNode[g]) {
     this[g] = Object.create({});
     this[g].node = selectorOrNode[g];
     this[g].index = g;

     g++
   }
   }

   

}

   }
}

 if (typeof selectorOrNode == "string") {
  for (var i = 0; i < ownerDoc.querySelectorAll(selectorOrNode).length; i++) {
       this[i] =  Object.create({});
       this[i].node =  ownerDoc.querySelectorAll(selectorOrNode)[i];
       this[i].index = i;
  }
  }
}
}}


if (selectorOrNode) {
for(let x in objectt){
objectt[x] = new elementForJua(objectt[x]);
};

function elementForJua(JuA){
var JuAJUA =  JuA[0] || JuA;
var object = JuAJUA.node;
var onWork = true;
var index = JuAJUA.index;
JuA.node = object;
var elementArray = new Array();

if (JuA[0]) {
  onWork = false;
for(let x in JuA){
 if (!isNaN(x)) {JuA.length = Number(x)+1;}
}
}
if(JuA.node){
if (!JuA.node.hiddenValue) {JuA.node.hiddenValue = new Array();};
if(!JuA.node.hiddenValue.detail){JuA.node.hiddenValue.detail = {};}
JuA.Jua = true;
JuA.innerHTML = JuA.node.innerHTML;
JuA.textContent = JuA.node.textContent;
JuA.value = JuA.node.value;
JuA.details = JuA.node.hiddenValue.detail;
}
JuA.__proto__.detail = function(name,value){if(!JuA.node.hiddenValue.detail){JuA.node.hiddenValue.detail = {};} if (value) {JuA.node.hiddenValue.detail[name] = value;}else{if (name) {return JuA.node.hiddenValue.detail[name]}else{return JuA.node.hiddenValue.detail;} }; return JuA;};
JuA.__proto__.ready = function(callback){if(!JuA.node.doctype){callback()}else{if (JuA.node.readyState === "complete" || JuA.node.readyState === "interactive") {setTimeout(callback, 1);} else { JuA.node.addEventListener("DOMContentLoaded", callback);}}};
JuA.__proto__.add = function(node,num){onWork = false;if (num) {JuA[JuA.length] = Jua(node)[num];JuA.length++;}else{Jua(node).forEach(function(e){e.index = JuA.length;JuA[JuA.length] = e;JuA.length++;})} return JuA;}
JuA.__proto__.child = function(selector){ if(!onWork){Ifall("child",...arguments)}; if (selector) {return Jua.select(JuA.node.children).filter(selector);}else{return Jua.select(JuA.node.children);}};
JuA.__proto__.parent = function(node){if(!onWork){Ifall("parent",...arguments)};if (JuAJUA.node.parentNode && node) {return nodeChanged(Jua.createParent(JuAJUA.node,node));}else{return Jua(JuAJUA.node.parentNode)}};
JuA.__proto__.prevNode = function(node){if(!onWork){Ifall("prevNode",...arguments)}; if (typeof node == "object") { nodeChanged(Jua.replaceElement(JuAJUA.node.previousElementSibling,node))}; return Jua(this.node.previousElementSibling);};
JuA.__proto__.nextNode = function(node){if(!onWork){Ifall("nextNode",...arguments)}; if (typeof node == "object") { nodeChanged(Jua.replaceElement(JuAJUA.node.nextElementSibling,node))}; return Jua(this.node.nextElementSibling);};
JuA.__proto__.on = function(type , callback){ if(!onWork){Ifall("on",...arguments)}; JuAJUA.node.addEventListener(type,callback,false); return JuA};
JuA.__proto__.attr = function(attrName,attrValue) {if(!onWork){Ifall("attr",...arguments)}; if(attrName != undefined && attrValue != undefined){JuAJUA.node.setAttribute(attrName,attrValue);}return JuAJUA.node.getAttribute(attrName)};
JuA.__proto__.removeAttr = function(attrName) {if(!onWork){Ifall("removeAttr",...arguments)}; JuAJUA.node.removeAttribute(attrName)};
JuA.__proto__.getSelector = function(){if(!onWork){Ifall("getSelector",...arguments)}; return generateQuerySelector(object);}
JuA.__proto__.dragg = function(){if(!onWork){Ifall("dragg",...arguments)}; return Jua.draggable(object);}
JuA.__proto__.resize = function(pos,type){if(!onWork){Ifall("resize",...arguments)}; return Jua.resizable(object,pos,type);}
JuA.__proto__.toggleClass = function(className , classValue){  if(!onWork){Ifall("toggleClass",...arguments)};if (JuAJUA.node.hiddenValue["data-toggle-style-"+className]) {  JuAJUA.class(className , JuAJUA.node.hiddenValue["data-toggle-style-"+className]);JuAJUA.node.hiddenValue["data-toggle-style-"+className] = null;  }else{JuAJUA.node.hiddenValue["data-toggle-style-"+className] = JuAJUA.class(className);  JuAJUA.class(className , classValue); }}
JuA.__proto__.anim = function( css , ms , ease){ if(!onWork){Ifall("anim",...arguments)}; var transition = ms || 2000;  var ltrans = "";var lFs = "";var allcss = new Array();var Pendingcss = new Array();var status = "Playing";var element = JuAJUA.node;var retunAll = {status:status,pause:function(){pauseNow()},play:function(){playNow()},onFinish:null,reAnim:function(){Animre()},};var reCaller = {status:status,reAnim:function(){Animre()},};function Animre(){ element.style.transition = "";  for (let name in allcss) {    if ("transform".search(name) != -1) {    if (allcss[name] == "matrix(1, 0, 0, 1, 0, 0)" || allcss[name] == "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)") {       element.style[name] = "";    }    }else{      element.style[name] = allcss[name];    }}setTimeout(function() {  var reCalling =  JuAJUA.anim(css,ms,ease); reCalling.onFinish = retunAll.onFinish;retunAll = reCalling;status = "Playing";}, 10);}ltrans = JuA.class("transition-duration");lFs = JuA.class("transition-timing-function");element.style.transitionDuration = transition+"ms";  if (ease) {element.style.transitionTimingFunction = ease;}var timing = setTimeout(AnimtionFinish, transition);setTimeout(function() {  for (let name in css) { element.style[name] = css[name]; allcss[name] = JuAJUA.class(name); }}, 1);function AnimtionFinish(){element.style.transitionDuration = ltrans;element.style.transitionTimingFunction = lFs;   status = "Finished";if (typeof retunAll.onFinish == "function") {retunAll.onFinish(reCaller)}}function playNow(){  if (status == "Playing") {  console.log("Animation Is Now Running ! No Need To Start ! ");}if (status == "Paused") {  element.style.transition = transition+"ms";  if (ease) {element.style.transitionTimingFunction = ease;}  status = "Playing";  for (let name in css) { element.style[name] = css[name];}timing = setTimeout(AnimtionFinish, transition);}if (status == "Finished") {  console.log("Animation Is Finished ! use reAnim function ! ");}}function pauseNow(){ if (status == "Playing") { for (let name in css) { Pendingcss[name] = JuAJUA.class(name); JuAJUA.class(name,JuAJUA.class(name))}element.style.transition = "";clearTimeout(timing)}if (status == "Paused") {  console.log("Animation Is Paused ! No Need To Pause ! ");}if (status == "Finished") {  console.log("Animation Is Finished ! use reAnim function ! ")}status = "Paused";}   return retunAll;}
JuA.__proto__.toggleAttr = function(attrName , attrValue){if(!onWork){Ifall("toggleAttr",...arguments)}; if (JuAJUA.node.hiddenValue["data-toggle-"+attrName] == undefined || JuAJUA.node.hiddenValue["data-toggle-"+attrName] == "undefined") { JuAJUA.node.hiddenValue["data-toggle-"+attrName] = JuAJUA.attr(attrName);JuAJUA.attr(attrName , attrValue); }else{JuAJUA.attr(attrName , JuAJUA.node.hiddenValue["data-toggle-"+attrName]);JuAJUA.node.hiddenValue["data-toggle-"+attrName] = "undefined";} }
JuA.__proto__.class = function(styleName,styleValue) { if(!onWork){Ifall("class",...arguments)};  var styles = window.getComputedStyle(object);  styles.extract = function() {    var ReturningArray = new Array();    var defaultStyle = "";    var element = ownerDoc.createElement(JuAJUA.node.tagName);    ownerDoc.body.appendChild(element);    defaultStyle = window.getComputedStyle(element);    var style = window.getComputedStyle(object);    var currentNum = 0;    for (var i = 0; i < style.length; i++) {        if (style[i] in defaultStyle){          if (defaultStyle[style[i]] !=  style[style[i]] ){                ReturningArray[currentNum++] = style[i];                      ReturningArray[style[i]] = style[style[i]];}    }else{                 ReturningArray[currentNum++] = style[i];                      ReturningArray[style[i]] = style[style[i]];                  }};              ReturningArray.Jua = true; ReturningArray.background = style.background;              ReturningArray.color = style.color;              ReturningArray.height = style.height;              ReturningArray.width = style.width;                  ownerDoc.body.removeChild(element);              return ReturningArray;};              if (styleValue) {                   JuAJUA.node.style[styleName] = styleValue;                     }else{                       if (styleName) {                    if (typeof styleName == "object") {                       for (let name in styleName){                        JuAJUA.node.style[name] = styleName[name];                       }                    }else{                       return styles[styleName];                      }                 }else{                   return styles;                   }                }              };
JuA.__proto__.replaceWith = function(node) {if(!onWork){Ifall("replaceWith",...arguments)}; if (Jua.isJua(node)) {var element = node.node;}; Jua.replaceElement(object,element); nodeChanged(element); return JuA;}
JuA.__proto__.select = function(selector){ if(!onWork){Ifall("select",...arguments)};  return Jua.select(JuA.node.querySelectorAll(selector));};
JuA.__proto__.pick = function(num) {if (typeof num == "string") {if(num.toLowerCase() == "all"){return objectt}else{return JuA.select(num);}} return objectt[num];};
JuA.__proto__.tagName = function(tagName){if (tagName) {if(!onWork){Ifall("tagName",...arguments)}; var wns = object;var lmn = ownerDoc.createElement(tagName);var index;while (wns.firstChild) {    lmn.appendChild(wns.firstChild);}for (index = wns.attributes.length - 1; index >= 0; --index) {    lmn.attributes.setNamedItem(wns.attributes[index].cloneNode());}JuAJUA.replaceWith(lmn); return Jua.select(lmn);}else{return JuAJUA.node.tagName} };
JuA.__proto__.fadeOut = function(ms){ if(!onWork){Ifall("fadeOut",...arguments)};   return JuAJUA.anim({opacity:"0"},ms);return JuAJUA;}
JuA.__proto__.fadeIn = function(ms){if(!onWork){Ifall("fadeIn",...arguments)}; return JuAJUA.anim({opacity:"1"},ms);return JuAJUA;}
JuA.__proto__.blurOut = function(ms){ if(!onWork){Ifall("blurOut",...arguments)}; return JuAJUA.anim({filter:"blur(0px)"},ms);return JuAJUA;}
JuA.__proto__.blurIn = function(ms,blurRate){if(!onWork){Ifall("blurIn",...arguments)}; blurRate = Number(blurRate) || 50; return JuAJUA.anim({filter:"blur("+blurRate+"px"},ms);;return JuAJUA;}
JuA.__proto__.slideUp = function(ms,ease,callback){ if(!onWork){Ifall("slideUp",...arguments)}; if (JuAJUA.node.hiddenValue["data-height-slideDown"] == undefined || JuAJUA.node.hiddenValue["data-height-slideDown"] == "undefined") {JuAJUA.node.hiddenValue["data-height-slideDown"] = JuAJUA.class("height");};JuAJUA.class({"overflow":"hidden","transition-duration":"0s","transition-timing-function":"ease"}); var ret = JuAJUA.anim({height:"0px"},ms,ease);ret.onFinish = function(e){JuAJUA.class("display","none");if (typeof callback == "function") {callback(e)}};return ret;}
JuA.__proto__.slideDown = function(ms,ease,callback){ if(!onWork){Ifall("slideDown",...arguments)}; if (JuAJUA.node.hiddenValue["data-height-slideDown"] != undefined || JuAJUA.node.hiddenValue["data-height-slideDown"] != "undefined") {var ret = JuAJUA.anim({overflow:"hidden",display:"block",height:JuAJUA.node.hiddenValue["data-height-slideDown"]},ms,ease);ret.onFinish = function(e){if (typeof callback == "function") {callback(e)}};JuAJUA.node.hiddenValue["data-height-slideDown"]  = "undefined";return ret}else{return JuAJUA;}}
JuA.__proto__.hide = function(){if(!onWork){Ifall("hide",...arguments)};     JuAJUA.class("display","none");return JuAJUA;}
JuA.__proto__.show = function(){if(!onWork){Ifall("show",...arguments)};     JuAJUA.class("display","block");return JuAJUA;}
JuA.__proto__.click = function(callback){if(!onWork){Ifall("click",...arguments)};     if(callback){JuAJUA.on("click",callback,false)}else{JuAJUA.node.click()}; return JuA;};
JuA.__proto__.focus = function(callback){if(!onWork){Ifall("focus",...arguments)};     if(callback){JuAJUA.on("focus",callback,false)}else{JuAJUA.node.focus()}; return JuA;};
JuA.__proto__.dblClick = function(callback){if(!onWork){Ifall("dblclick",...arguments)};      if(callback){JuAJUA.on("dblclick",callback,false)}else{var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('dblclick', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseOver = function(callback){if(!onWork){Ifall("mouseover",...arguments)};     if(callback){JuAJUA.on("mouseover",callback,false)}else{var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mouseover', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseLeave = function(callback){  if(!onWork){Ifall("mouseleave",...arguments)};        if(callback){JuAJUA.on("mouseleave",callback,false)}else{   var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mouseleave', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseDown = function(callback){ if(!onWork){Ifall("mousedown",...arguments)};       if(callback){JuAJUA.on("mousedown",callback,false)}else{    var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mousedown', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseMove = function(callback){ if(!onWork){Ifall("mousemove",...arguments)};       if(callback){JuAJUA.on("mousemove",callback,false)}else{    var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mousemove', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseOut = function(callback){ if(!onWork){Ifall("mouseout",...arguments)};       if(callback){JuAJUA.on("mouseout",callback,false)}else{    var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mouseout', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseEnter = function(callback){ if(!onWork){Ifall("mouseenter",...arguments)};       if(callback){JuAJUA.on("mouseenter",callback,false)}else{    var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mouseenter', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseUp = function(callback){ if(!onWork){Ifall("mouseup",...arguments)};       if(callback){JuAJUA.on("mouseup",callback,false)}else{    var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mouseup', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.mouseWheel = function(callback){ if(!onWork){Ifall("mousewheel",...arguments)};       if(callback){JuAJUA.on("mousewheel",callback,false)}else{    var clickEvent  = document.createEvent ('MouseEvents');clickEvent.initEvent ('mousewheel', true, true);JuA.node.dispatchEvent (clickEvent);}; return JuA; };
JuA.__proto__.keyDown = function(callback){   if(!onWork){Ifall("keydown",...arguments)};         if(callback){JuAJUA.on("keydown",callback,false)}else{            var clickEvent  = document.createEvent ('KeyboardEvents');        clickEvent.initEvent ('keydown', true, true);    JuA.node.dispatchEvent (clickEvent);}; return JuA;   };
JuA.__proto__.keyUp = function(callback){   if(!onWork){Ifall("keyup",...arguments)};         if(callback){JuAJUA.on("keyup",callback,false)}else{            var clickEvent  = document.createEvent ('KeyboardEvents');        clickEvent.initEvent ('keyup', true, true);    JuA.node.dispatchEvent (clickEvent);}; return JuA;   };
JuA.__proto__.keyPress = function(callback){   if(!onWork){Ifall("keypress",...arguments)};         if(callback){JuAJUA.on("keypress",callback,false)}else{            var clickEvent  = document.createEvent ('KeyboardEvents');        clickEvent.initEvent ('keypress', true, true);    JuA.node.dispatchEvent (clickEvent);}; return JuA;   };
JuA.__proto__.remove = function(child){if(!onWork){Ifall("remove",...arguments)}; if (child) {Jua(child).remove();}else{JuAJUA.node.remove();}};
JuA.__proto__.append = function(nodeORText){if(!onWork){Ifall("append",...arguments)};if (typeof nodeORText == "string") {var node = Jua.stringToNode(nodeORText);}else{var node = nodeORText} Jua.select(node).forEach(function(e){JuA.node.appendChild(e.node)});return JuA;};
JuA.__proto__.html = function(html,add){var after = "";var before = ""; if (add) {if(add.toLowerCase() == "+"){add = "after";} if (add.toLowerCase() == "before") {after = JuAJUA.node.innerHTML;}; if(add.toLowerCase() == "after"){before = JuAJUA.node.innerHTML;}} if (typeof html == "function") {JuA.node.innerHTML = html(index,JuA.node.innerHTML);}else{if (html) {JuA.node.innerHTML = before+html+after;}else{return JuA.node.innerHTML;}};  if(!onWork){Ifall("html",...arguments)};};
JuA.__proto__.text = function(text,add){var after = "";var before = ""; if(add){if(add.toLowerCase() == "+"){add = "after";} if (add.toLowerCase() == "before") {after = JuAJUA.node.textContent;}; if(add.toLowerCase() == "after"){before = JuAJUA.node.textContent;}} if (typeof text == "function") {JuA.node.textContent = text(index,JuA.node.textContent);}else{if (text) {JuA.node.textContent = before+text+after;}else{return JuA.node.textContent;}};  if(!onWork){Ifall("text",...arguments)};};
JuA.__proto__.val = function(value,add){var after = "";var before = ""; if(add){if(add.toLowerCase() == "+"){add = "after";} if (add.toLowerCase() == "before") {after = JuAJUA.node.value;}; if(add.toLowerCase() == "after"){before = JuAJUA.node.value;}} if (typeof value == "function") {JuA.node.valueContent = value(index,JuA.node.valueContent);}else{if (value) {JuA.node.value = before+value+after;}else{return JuA.node.value;}}; if(!onWork){Ifall("val",...arguments)};  };
JuA.__proto__.empty = function(){var g = new Array();for (var i = 0; i < object.children.length; i++) {g[i] = object.children[i];}g.forEach(function(e){e.remove();});if(!onWork){Ifall("empty",...arguments)};}
JuA.__proto__.toggle = function(type){if (type) {if (type == "hide") {JuAJUA.hide()}if(type == "show"){JuAJUA.show()}}else{Jua.toggleFunc(function(){JuAJUA.hide();type = "hide";},function(){JuAJUA.show();type = "show";});} if(!onWork){Ifall("toggle",type)};};
JuA.__proto__.toggleFade = function(type){if (type) {if (type == "hide") {JuAJUA.fadeOut()}if(type == "show"){JuAJUA.fadeIn()}}else{Jua.toggleFunc(function(){JuAJUA.fadeOut();type = "hide";},function(){JuAJUA.fadeIn();type = "show";});} if(!onWork){Ifall("toggleFade",type)};};
JuA.__proto__.forEach = function(callback){if (typeof callback == "function") {if (JuA.length) { for(let i = 0;i < JuA.length;i++){callback(JuA[i],i)} }else{callback(JuA,0);}}};
JuA.__proto__.random = function(){return Jua.random(JuA);};
JuA.__proto__.hasClass = function(className){if (JuA.node.className.search(className) != -1) {return true;}; return false;}
JuA.__proto__.toggleClass = function(className){JuA.toggleAttr("class",className);if(!onWork){Ifall("remove",...arguments)};return JuA;}
JuA.__proto__.addClass = function(className){if(JuA.node.className.lastIndexOf(" ") == (JuA.node.className.toString().length-1)){JuA.node.className += " "+className;}else{JuA.node.className += className;}if(!onWork){Ifall("addClass",...arguments)};return JuA;};
JuA.__proto__.removeClass = function(className){JuA.node.className = JuA.node.className.replaceAll(className,"");if(!onWork){Ifall("removeClass",...arguments)};return JuA;};
JuA.__proto__.filter = function(selector){var newi = Jua.new("div"); JuA.forEach(function(e){var g = e.clone(); g.detail("node",e.node); newi.append(g);}); newi = newi.select(selector); var snewi = new Array(); var c = 0;  newi.forEach(function(e,g){if (e.detail("node")) {snewi[c] = e.detail("node"); c++} });  return Jua(snewi);};
JuA.__proto__.clone = function(){return Jua(JuA.node.cloneNode(true));};
JuA.__proto__.type = function(text,speed,type){Jua.type(JuA.node,text,speed,type);if(!onWork){Ifall("type",...arguments)};return JuA;};
JuA.__proto__.record = function(fps,fileName){if(!onWork){Ifall("record",...arguments)};return Jua.record(JuA.node,fps,fileName);};

if (!JuA.index) {JuA.index = 0};

function nodeChanged(node){
if (Jua.isJua(node)) {node = node.node;}
object = node;
JuAJUA.node = node;
JuA.node = node;
return Jua(node);
}

function Ifall(name,...argument){
   if(name) {
if (!onWork) {
       onWork = true;
     JuA.forEach(function(e,t){
      if (!object.isSameNode(e.node)) {    
      e[name](...argument);
     }
     })
    onWork = false;
}
   }
}


return JuA;
}
objectt = new elementForJua(objectt);
return objectt;
  }}

// important!
};

var Jua = function(selector){if (selector) {if (typeof selector == "function") {return new jua().select(ownerDoc).ready(selector)}else{return new jua().select(selector)}}else{return new jua();}};
for(let x in new jua()){
Jua[x] = new jua()[x];
}
Jua.ready(function(){Jua["body"] = Jua("body");})

window.Jua = Jua;
Window.Jua = Jua;
})()