/*  inputvalidate JavaScript, version 1.0.0
 *  来自于struts
 *  @author pengminghua
 */
/*--------------------------------------------------------------------------*/
    var bCancel = false; 

    function validateJsTypeForm(form) {                                                                   
      if (bCancel) 
          return true; 
      else 
          return validateAll(form);
    }

    function validateAll(form) {
        var eles = form.elements;
        var isValid = true;
        
        for(i=0;i<eles.length;i++)
        {
            var type = eles[i].type;
            if (type == 'text' ||  type == 'textarea') 
            {
                eles[i].value = trim(eles[i].value);
            }
        }
        for(i=0;i<eles.length;i++)
        {    
            var type = eles[i].type;
            if (type == 'text' || type == 'textarea' || type == 'file' ||
                type == 'select-one' || type == 'radio' || type == 'password') 
            {
                if(eles[i].required == 'true'){
                    isValid = validateRequired(eles[i]);
                    if(!isValid) break;
                }
            }
            if (type == 'text' || type == 'textarea' || type == 'password')
            {
                if(eles[i].maxLength != null || eles[i].maxlength != null){
                    isValid = validateMaxLength(eles[i]);
                    if(!isValid) break;
                }
            }
            if (type == 'text' || type == 'textarea' || type == 'password')
            {
                if(eles[i].minlength != null){
                    isValid = validateMinLength(eles[i]);
                    if(!isValid) break;
                }
            }
            if ((type == 'text' || type == 'textarea' ||type == 'select-one' || type == 'radio') && (eles[i].value.length > 0))
            {
                if(eles[i].fieldtype=='integer'){
                    isValid = validateInteger(eles[i]) && validateIntRange(eles[i]);
                    if(!isValid) break;
                }
            }
            if ((type == 'text' || type == 'textarea') && (eles[i].value.length > 0)) 
            {
                if(eles[i].fieldtype=='date'){
                    isValid = validateDate(eles[i]);
                    if(!isValid) break;
                }
            }
            if ((type == 'text' || type == 'textarea') && (eles[i].value.length > 0)) 
            {
                if(eles[i].fieldtype=='creditcard'){
                    isValid = validateCreditCard(eles[i]);
                    if(!isValid) break;
                }
            }
            if (type == 'text' || type == 'textarea' || type == 'select-one' ||  type == 'radio') 
            {
                if(eles[i].fieldtype=='byte'){
                    isValid = validateByte(eles[i]);
                    if(!isValid) break;
                }
            }
            if ((type == 'text' || type == 'textarea' || type == 'select-one' || type == 'radio') &&(eles[i].value.length > 0))
            {
                 if(eles[i].fieldtype=='short'){
                    isValid = validateShort(eles[i]) && validateIntRange(eles[i]);
                    if(!isValid) break;
                 }
            }
            if ((type == 'text' || type == 'textarea' || type == 'select-one' || type == 'radio') && (eles[i].value.length > 0))
            {
                if(eles[i].fieldtype=='float'){
                    isValid = validateFloat(eles[i]) && validateFloatRange(eles[i]) && validateDecimalDigits(eles[i]);
                    if(!isValid) break;
                }
            }
            if ((type == 'text' || type == 'textarea') && (eles[i].value.length > 0)) 
            {
                 if(eles[i].fieldtype == 'email'){
                    isValid = validateEmail(eles[i]);
                    if(!isValid) break;
                 }
            }
            if ((type == 'text' || type == 'textarea') && (eles[i].value.length > 0)) 
            {
                if(eles[i].mask != null){
                    isValid = validateMask(eles[i]);
                    if(!isValid) break;
                }
            }
            
        }
        return isValid;
    }

     function getLabel(element){
         var arr2 = "";
         if(element.label != null)
             arr2 = element.label;
         else if(element.name != null)
             arr2 = element.name;
         else if(eles[i].id != null)
             arr2 = element.id;
         return "'" + arr2 + "'";
     }

     function getMsg(element,min,max){
         var msg="";
         if(min != null && max != null)
             msg = getLabel(element)+ "必须介于 " + min + " ~ " + max + " !";
         else if(min!= null)
             msg = getLabel(element)+ "不能小于 " + min + " !";
         else if(max != null)
             msg = getLabel(element)+ "不能大于 " + max + " !";
         return msg;
     }

    function validateMaxLength(field) {
        var value = field.value;
        var msg = '' ;
        var isValid = true;
	    var iMax = field.maxlength;
	    if(field.maxLength!=null) iMax = field.maxLength;
	    if (field.value.length > iMax || realLength(field.value) > iMax) {
            msg = getLabel(field) + "输入长度不能超过" + iMax + "个字节!";
	        isValid = false;
	    }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return isValid;
    }

    function validateRequired(field){
        var isValid = true;
        var value = '';
        var msg = '';
   	    // get field's value
 	    if (field.type == "select-one") {
 	        var si = field.selectedIndex;
	        if (si >= 0) {
	            value = field.options[si].value;
	        }
	    } else {
	        value = field.value;
	    }
	    if (value.length == 0) {
            msg = getLabel(field) + "不能为空！";
            isValid = false;
        }
        
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return isValid;
    }

    function trim(s) {
        return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
    }

    function validateInteger(field) {
        var bValid = true;
        var msg = '';
        var value = '';
	    // get field's value
	    if (field.type == "select-one") {
	        var si = field.selectedIndex;
	        if (si >= 0) {
                value = field.options[si].value;
	        }
	    } else {
	        value = field.value;
	    }
        if (!isAllDigits(value)) {
	    bValid = false;
	    msg = "请在" + getLabel(field) + "输入整数！";
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return bValid;
    }

    function isAllDigits(argvalue) {
        argvalue = argvalue.toString();
        var validChars = "0123456789";
        var startFrom = 0;
        if (argvalue.substring(0, 2) == "0x") {
            validChars = "0123456789abcdefABCDEF";
            startFrom = 2;
        } else if (argvalue.charAt(0) == "0") {
            validChars = "0123456789";
            startFrom = 1;
        } else if (argvalue.charAt(0) == "-") {
            startFrom = 1;
        }
        for (var n = startFrom; n < argvalue.length; n++) {
            if (validChars.indexOf(argvalue.substring(n, n+1)) == -1) return false;
        }
        return true;
    }

    function validateDate(field) {
        var value = field.value;
        var msg = '' ;
        var datePattern;
        var bValid = true;
        if(field.datepatternstrict != null){
            datePattern = field.datepatternstrict;
        }else{
            datePattern = "yyyy-MM-dd";
        }
        if (datePattern.length > 0) {
            var MONTH = "MM";
            var DAY = "dd";
            var YEAR = "yyyy";
            var orderMonth = datePattern.indexOf(MONTH);
            var orderDay = datePattern.indexOf(DAY);
            var orderYear = datePattern.indexOf(YEAR);
            if (orderDay==-1 && orderMonth==-1){
            	dateRegexp = new RegExp("^(\\d{4})$");
            	var matched = dateRegexp.exec(value);
                if(matched == null){
                    msg = "请在" + getLabel(field) + "输入年(" + datePattern + ")！";
                    bValid =  false;
                }
            }else if (orderDay==-1){
            	if(orderMonth < orderYear){
            	    var iDelim1 = orderMonth + MONTH.length;
            	    var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
           	    if (iDelim1 == orderYear) {
            	    	dateRegexp = new RegExp("^(\\d{2})(\\d{4})$");
            	    }else{
            	        dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{4})$");
            	    }
                    var matched = dateRegexp.exec(value);
                    if(matched != null) {
                        if (!isValidDate2(matched[1])) {
                    	    msg = "请在" + getLabel(field) + "输入年月(" + datePattern + ")！";
                            bValid =  false;
                        }
                    } else {
                        msg = "请在" + getLabel(field) + "输入年月(" + datePattern + ")！";
                        bValid =  false;
                    }
            	}else{
            	    var iDelim1 = orderYear + YEAR.length;
            	    var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
            	    if (iDelim1 == orderMonth) {
            	    	dateRegexp = new RegExp("^(\\d{4})(\\d{2})$");
            	    }else{
            	        dateRegexp = new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})$");
            	    }
                    var matched = dateRegexp.exec(value);
                    if(matched != null) {
                        if (!isValidDate2(matched[2])) {
                    	    msg = "请在" + getLabel(field) + "输入年月(" + datePattern + ")！";
                            bValid =  false;
                        }
                    } else {
                        msg = "请在" + getLabel(field) + "输入年月(" + datePattern + ")！";
                        bValid =  false;
                    }
                }
            }else if (orderDay < orderYear && orderDay > orderMonth) {
                var iDelim1 = orderMonth + MONTH.length;
                var iDelim2 = orderDay + DAY.length;
                var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
                var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
                if (iDelim1 == orderDay && iDelim2 == orderYear) {
                    dateRegexp = new RegExp("^(\\d{2})(\\d{2})(\\d{4})$");
                } else if (iDelim1 == orderDay) {
                    dateRegexp = new RegExp("^(\\d{2})(\\d{2})[" + delim2 + "](\\d{4})$");
                } else if (iDelim2 == orderYear) {
                    dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})(\\d{4})$");
                } else {
                    dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{4})$");
                }
                var matched = dateRegexp.exec(value);
                if(matched != null) {
                    if (!isValidDate(matched[2], matched[1], matched[3])) {
                    	msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                        bValid =  false;
                    }
                } else {
                    msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                    bValid =  false;
                }
            } else if (orderMonth < orderYear && orderMonth > orderDay) {
                var iDelim1 = orderDay + DAY.length;
                var iDelim2 = orderMonth + MONTH.length;
                var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
                var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
                if (iDelim1 == orderMonth && iDelim2 == orderYea) {
                    dateRegexp = new RegExp("^(\\d{2})(\\d{2})(\\d{4})$");
                } else if (iDelim1 == orderMonth) {
                    dateRegexp = new RegExp("^(\\d{2})(\\d{2})[" + delim2 + "](\\d{4})$");
                } else if (iDelim2 == orderYear) {
                    dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})(\\d{4})$");
                } else {
                    dateRegexp = new RegExp("^(\\d{2})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{4})$");
                }
                var matched = dateRegexp.exec(value);
                if(matched != null) {
                    if (!isValidDate(matched[1], matched[2], matched[3])) {
                    	msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                        bValid =  false;
                    }
                } else {
                    msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                    bValid =  false;
                }
            } else if ((orderMonth > orderYear && orderMonth < orderDay)) {
                var iDelim1 = orderYear + YEAR.length;
                var iDelim2 = orderMonth + MONTH.length;
                var delim1 = datePattern.substring(iDelim1, iDelim1 + 1);
                var delim2 = datePattern.substring(iDelim2, iDelim2 + 1);
                if (iDelim1 == orderMonth && iDelim2 == orderDay) {
                    dateRegexp = new RegExp("^(\\d{4})(\\d{2})(\\d{2})$");
                } else if (iDelim1 == orderMonth) {
                    dateRegexp = new RegExp("^(\\d{4})(\\d{2})[" + delim2 + "](\\d{2})$");
                } else if (iDelim2 == orderDay) {
                    dateRegexp = new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})(\\d{2})$");
                } else {
                    dateRegexp = new RegExp("^(\\d{4})[" + delim1 + "](\\d{2})[" + delim2 + "](\\d{2})$");
                }
                var matched = dateRegexp.exec(value);
                if(matched != null) {
                    if (!isValidDate(matched[3], matched[2], matched[1])) {
                    	msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                        bValid =  false;
                    }
                } else {
                    msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                    bValid =  false;
                }
            } else {
                msg = "请在" + getLabel(field) + "输入日期(" + datePattern + ")！";
                bValid =  false;
            }
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return bValid;
    }

    function isValidDate2(month) {
	        if (month < 1 || month > 12) {
                    return false;
                }
                return true;
    }

    function isValidDate(day, month, year) {
	        if (month < 1 || month > 12) {
                    return false;
                }
                if (day < 1 || day > 31) {
                    return false;
                }
                if ((month == 4 || month == 6 || month == 9 || month == 11) &&
                    (day == 31)) {
                    return false;
                }
                if (month == 2) {
                    var leap = (year % 4 == 0 &&
                               (year % 100 != 0 || year % 400 == 0));
                    if (day>29 || (day == 29 && !leap)) {
                        return false;
                    }
                }
                return true;
    }
     
    
    function validateIntRange(field) {

        var value = field.value;
        var msg = '' ;
        var isValid = true;
        
	    var iMin = field.min==null?null:parseInt(field.min);
	    var iMax = field.max==null?null:parseInt(field.max);;
	    if(field.fieldtype=='short'){
	        iMin = (iMin==null || iMin<-32768)?-32768:iMin;
	        iMax = (iMax==null || iMax>32767)?32767:iMax;
	    }else if(field.fieldtype=='integer'){
	        iMin = (iMin==null || iMin<-2147483648)?-2147483648:iMin;
	        iMax = (iMax==null || iMax>2147483647)?2147483647:iMax;
	    }
        var iValue = parseInt(field.value);
        if ((iMin!=null && iValue < iMin) || (iMax!=null && iValue > iMax)) {
            isValid = false;
            msg = getMsg(field,iMin,iMax);
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return isValid;
    }

    function validateFloatRange(field) {
        var value = field.value;
        var msg = '' ;
        var isValid = true;

	    var fMin = field.min==null?null:parseFloat(field.min);
	    var fMax = field.max==null?null:parseFloat(field.max);
        var fValue = parseFloat(field.value);
        if (((fMin!=null && fValue < fMin) || (fMax!=null && fValue > fMax))) {
            isValid = false;
            msg = getMsg(field,fMin,fMax);
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return isValid;
    }

    function validateDecimalDigits(field) {
        var value = trim(field.value);
        var msg = '' ;
        var isValid = true;
        
    	var decimalDigits = field.decimaldigits;
        if (decimalDigits!=null && value.indexOf(".")>=0) {
            if(decimalDigits<value.length-value.indexOf(".")-1){
                isValid = false;
                msg = getLabel(field)+ "小数位数不能大于 " + decimalDigits + " !";
            }
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return isValid;
    }
    
    

    function validateFloat(field) {
    
        var msg = '' ;
        var bValid = true;
        
    	var value = '';
	    // get field's value
	    if (field.type == "select-one") {
	        var si = field.selectedIndex;
	        if (si >= 0) {
		    value = field.options[si].value;
                }
	    } else {
	        value = field.value;
	    }
        
	    // remove '.' before checking digits
	    var valueBak = value;
	    value = replaceStr(value,",","");
	    var tempArray = value.split('.');
	    var joinedString= tempArray.join('');
	    if (!isAllDigits(joinedString)) {
	        bValid = false;
	        msg = "请在" + getLabel(field) + "输入实数！";
	    } else {
	        var iValue = parseFloat(value);
	        if (isNaN(iValue)) {
	            msg = "请在" + getLabel(field) + "输入实数！";
	            bValid = false;
	        }
	    }
        if(!checkComma(valueBak)){
	        msg = "请在" + getLabel(field) + "输入实数！";
	        bValid = false;
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return bValid;
    }
    

    function checkComma(number){
        if(number!=''){
            var point = number.length;
            if(number.indexOf('.')>=0){
                point = number.indexOf('.');
            }
            if(point>0){
                var leftStr = number.substring(0,point);
                if(leftStr.indexOf(',')>=0){
                    var value = replaceStr(leftStr,",","");

                    //校验,号的数量是否合法
                    var commaNum=parseInt((value.length-1)/3);
                    var realArrComma = getComma(leftStr);
                    if(realArrComma.length!=commaNum) return false;
                    var arrComma = new Array(commaNum);
                    for(var i = 0;i<commaNum;i++){
                    	arrComma[i] = (commaNum + value.length) - (i+1)*4;
                    }
                    for(var i = 0;i<commaNum;i++){
                    	if(arrComma[commaNum-i-1]!=realArrComma[i]) return false;
                    }
                }
            }
            if(number.length-point>1){
                var rightStr = number.substring(point+1,number.length);
                if(rightStr.indexOf(',')>=0) return false;
            }
        }
        return true;
    }

    function getComma(str){
    	var rtn = new Array();
    	rtn[rtn.length] = str.indexOf(',');
    	var str = str.substring(rtn[rtn.length-1]+1,str.length);
    	while(str.indexOf(',')>=0){
    	    rtn[rtn.length] = rtn[rtn.length-1] + 1 + str.indexOf(',');
    	    str = str.substring(str.indexOf(',') + 1,str.length);
    	}
    	return rtn;
    }

    function replaceStr(sourceStr,str1,str2){
    	var rtn = sourceStr;
    	var leftStr = "";
    	var rightStr = "";
    	if(sourceStr.indexOf(str1)>=0){
    	   leftStr = sourceStr.substring(0,sourceStr.indexOf(str1)+str1.length);
    	   rightStr = sourceStr.substring(sourceStr.indexOf(str1)+str1.length);
    	   rtn = leftStr.replace(str1,str2);
           if(rightStr!="")
               rtn = rtn + replaceStr(rightStr,str1,str2);
    	}
    	return rtn;
    }
    function validateMinLength(field){
        var value = field.value;
        var msg = '' ;
        var isValid = true;
        
        var iMin = field.minlength;
        if ((trim(field.value).length > 0) && realLength(field.value) < iMin) {
            msg = getLabel(field) + "输入长度不能小于" + field.minlength + "个字节!" ;
            isValid = false;
        }
        if (msg != '') {
            field.focus();
            showMsg(msg);
        }
        return isValid;
    }

     function realLength(value)
     { 
         var vlen=0;
         for (var i=0; i<value.length; i++){
             vlen++;
             if (escape(value.charAt(i)).indexOf("%u") != -1) vlen++;
         }
         return vlen;
      }
      

     function trim(str)
     {
        var i=0;
        var i2=-1;
        var chr;
    
        if(typeof(str)!='undefined')
        {
            if(typeof(str)!='string')
                str=str.toString();
        
            for(i=0;i<str.length-1;i++)
            {
                chr=str.charAt(i);
                if(chr!=' ')
                    break;
            }
            for(i2=str.length-1;i2>=0;i2--)
            {
                chr=str.charAt(i2);
                if(chr!=' ')
                    break;
            }
        }
    
        if(i<=i2)
        {
            return str.substring(i,i2+1);
        }
        else
        {
            return "";
        }
    }
    
     function showMsg(messages){
         var rootPath = getContextPath();
	     var msg = new Array(messages,'数据校验错误',2);
         return window.showModalDialog(rootPath + '/components/dialogbox/dialogbox.html',msg,"status:no;scroll:no;help:no");
     }
     function getContextPath() {
	    var ctxPath = "";
        $A(document.getElementsByTagName("script")).findAll( function(s) {
          return (s.src && s.src.match(/validate\.js(\?.*)?$/))
        }).each( function(s) {
          var path = s.src.replace(/components\/validate\/validate\.js(\?.*)?$/,'');
	      ctxPath = path;
        });
        if(ctxPath=="/")
        	ctxPath = "";
	    return ctxPath;
     }

    