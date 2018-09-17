function getArXivId() { 
   var metas = document.getElementsByTagName('meta'); 

   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("name") == "citation_arxiv_id") { 
         return metas[i].getAttribute("content"); 
      } 
   } 

    return "";
}

function UserAction() {
	    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://arxiv2bibtex.org/?q="+getArXivId()+"&format=bibtex&outputformat=raw", false ); // false for synchronous request
    xmlHttp.send( null );
	var div = document.createElement("div");
div.style.width = "520px";
div.style.height = "92px";
	div.style.position = "absolute";
	div.style.top = "93%";
	div.style.right = "0%";
div.innerHTML = "<textarea cols=\"70\" rows=\"6\">"+xmlHttp.responseText+"</textarea>";
	document.body.appendChild(div);
	return;
}

UserAction()
