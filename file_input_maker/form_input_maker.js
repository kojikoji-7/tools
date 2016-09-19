javascript:(function(){
var form = document.forms[0];
	var str = "";
	var array = [];
	for (var i = 0; i < form.length; i++) {
        var elem = form.elements[i];
        if(elem.type == "button" || elem.type == "submit" || elem.type == "hidden") continue;

        if(elem.type == "radio"){
        	 if(elem.checked){
        	 	str += "\"" + elem.name + "\":\"" + elem.value + "\",";
        	 }
       	} else if(elem.type == "checkbox"){
       		if(elem.checked){
        	 	//str += "\"" + elem.name + "\":\"" + elem.value + "\",";
        	 	if(array[elem.name] == undefined) array[elem.name] = "";
        	 	array[elem.name] += "\"" + elem.value + "\",";
        	}
        }else{
        	 str += "\"" + elem.name + "\":\"" + elem.value + "\",";
        }
	}
	str = str.substr(0, (str.length -1));
	for(key in array){
		str += ",\"" + key + "\":[" + (array[key].substr(0, (array[key].length -1))) + "]";
	}
	var js = "javascript:(function(){var o={__VALUE__};var _form=document.forms[0];for(var i=0;i<_form.length;i++){var _fe=_form[i];var k=_fe.name;var t=_fe.type;if(t==\"radio\"){if(o[k]==_fe.value){_fe.checked=true;}}else if(t==\"select-one\"||t==\"select-multiple\"){for(var j=0;j<_fe.length;j++){if(o[k]==_fe.options[j].value){_fe.options[j].selected=true;}}}else if(t==\"checkbox\"){if((o[k]!=undefined)&&(o[k] instanceof Array)){for(var h=0;h<o[k].length;h++){if(o[k][h]==_fe.value){_fe.checked=true;}}}}else{if(o[k]!=undefined){_fe.value=o[k];}}}})();";
	
	console.log(js.replace("__VALUE__", str));
})();