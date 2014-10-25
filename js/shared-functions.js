//var fakeDataUrl = "../data.json?callback=?";
var fakeDataUrl = "https://test-sesame-content.s3.amazonaws.com/global_images/product_tiles/data.json?callback=?";
//var fakeDataUrl = "https://s3-us-west-2.amazonaws.com/demo-sesame-content-engineering-environment/global_images/product_tiles/data.json";

// capitalize first letter
function capitalizeFirstLetter(data){
	var temp = [];
	
	try {
		if (typeof data == "string" || data instanceof String){
			return data.charAt(0).toUpperCase() + data.slice(1);
		}else if (Array.isArray(data) || data instanceof Array){
			for (var i=0; i<data.length; i++){
				temp.push(data[i].charAt(0).toUpperCase() + data[i].slice(1));
				//console.log(temp);
			}
			return temp;
		}
	}catch(e){
		console.log(e);
	}	
}

function capitalizeAllWordsOfAr(strAr){
	var result = [];
	
	$.each(strAr, function(i, v){	
		var arr = v.replace(/^\s+|\s+$|\s+(?=\s)/g, "").split(/\s/);
		
		//console.log(arr);
		for(var j=0; j<arr.length; j++) {
			//console.log(arr[i].substr(0,1).toUpperCase());
			arr[j] = arr[j].substr(0,1).toUpperCase() + 
					 (arr[j].length > 1 ? arr[j].substr(1).toLowerCase() : "");
		}
		result.push(arr.join(" "));
	});
	
	return result;
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
	var urlParams;
	
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);
    
	urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
	
	//if (urlParams.demoMode=="y") { urlParams = defaultData.ortho; } 
	//urlParams = defaultData.ortho;
	return urlParams;
}

function navigateTo(e){
	var destination = e.data.destination;
	var url = window.parent.location.host;
	//alert(url+destination);
	window.parent.location.href = url+destination;
}

// Accept a string that is formatted as an array. Convert the
// given string to a real array
function parseArray(rawData){
	if (rawData.trim()=="[]"){
		return [];
	}else{
		//take everything except first and last character
		return rawData.substring(1, rawData.length-1).split(",");
	}
}

// convert all "string" values of an array to number
function parseNumAr(data){
	var result = [];
	for (var i=0; i < data.length; i++){
		//console.log(data[i]);
		result.push(parseFloat(data[i]));
	}
	return result;
}

// accept a jQuery object and chart title. Display "data unavailable message"
// within that jQuery object
function dataUnavailable(chartFrame, chartTitle){
	chartTitle = typeof chartTitle !== 'undefined' ? chartTitle : ''; 
	chartFrame.html('<div class="data-unavailable-header" style="color:#ccc;">'
			+chartTitle
		+'</div>'
		+'<div class="error-msg">'
			+'<div>Data is currently unavailable at this time.</div>'
			+'<div>Please check back later</div>'
		+'</div>');
}

function newMemberMsg(chartFrame, chartTitle, product){
	chartTitle = typeof chartTitle !== 'undefined' ? chartTitle : ''; 
	chartFrame.html('<div class="data-unavailable-header" style="color:#ccc;">'
			+chartTitle
		+'</div>'
		+'<div class="error-msg">'
			+'<div>Thank you for purchasing '+product+'! Initial statistics will be displayed within 1 month of service.</div>'
		+'</div>');
}