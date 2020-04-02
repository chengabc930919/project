  function getContextPath() {
	    var ctxPath = "";
        $A(document.getElementsByTagName("script")).findAll( function(s) {
          return (s.src && s.src.match(/dialogbox\.js(\?.*)?$/))
        }).each( function(s) {
          var path = s.src.replace(/components\/dialogbox\/dialogbox\.js(\?.*)?$/,'');
	      ctxPath = path;
        });
        if(ctxPath=="/")
        	ctxPath = "";
	    return ctxPath;
    }

    function showDialogBox(messages,title,state,model){
        var rootPath = getContextPath();
    	var msg = new Array(messages,title,state,model);
    	return window.showModalDialog(rootPath + '/components/dialogbox/dialogbox.jsp',msg,"status:no;scroll:no;help:no");
    }
    
     