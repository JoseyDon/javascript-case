function displayAbbreviations(){
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {return false;}
		//获取所有abbr
	var abbrs = document.getElementsByTagName('abbr');
	if (abbrs.length<1) {return false;}
	var defs = new Array();
	//遍历abbr
	for(var i = 0;i<abbrs.length;i++){
		var current_abbr = abbrs[i];
		if (current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	//遍历定义
	for(key in defs){
	var definition = defs[key];
	//创建定义标题
	var dtitle = document.createElement('dt');
	var dtitle_text = document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	//创建定义描述
	var ddesc = document.createElement("dd");
	var ddesc_text = document.createTextNode(definition);
	ddesc.appendChild(ddesc_text);
	//把它们添加到定义列表
	dlist.appendChild(dtitle);
	dlist.appendChild(ddesc);
		}
		if (dlist.childNodes.length < 1) return false;
		//创建标题
		var header = document.createElement("h2");
		var header_text = document.createTextNode("Abbreviations");
		header.appendChild(header_text);
		//把标题和列表添加到页面主题
		document.body.appendChild(header);
		document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);

/* 
function displayAbbreviations(){
	if (!document.getElementsByTagName || !document.creatElement || !document.createTextNode) {return false;}
		//获取所有abbr
	var abbrs = document.getElementsByTagName('abbr');
	if (abbrs.length<1) {return false;}
	var defs = new Array();
	//遍历abbr
	for(var i = 0;i<abbrs.length;i++){
		var current_abbr = abbrs[i];
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	//遍历定义
	for(key in defs){
	var definition = defs[key];
	//创建定义标题
	var dtitle = document.createElement('dt');
	var dtitle_text = document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	//创建定义描述
	var ddesc = document.createElement('dd');
	var ddesc_text = document.createTextNode(definition);
	ddesc.appendChild(ddesc_text);
	//把它们添加到定义列表
	dlist.appendChild(dtitle);
	alist.appendChild(ddesc);
		}
		//创建标题
		var header = document.createElement("h2");
		var header_text = document.createTextNode("Abbreviations");
		header.appendChild(header_text);
		//把标题和列表添加到页面主题
		document.body.appendChild(header);
		document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
*/