"use strict";

$(document).ready(function(){	
	// syntax for using ajax request for jsonp
	$.ajax({
		type: "GET",
		url:  window.fakeLandingDataUrl,
		dataType: 'jsonp',
		jsonpCallback: 'jsoncallback',
		success: function(result){
			injectPractiseTbl(result.data.healthgrades.practiceTbl);
			injectDentistTbl(result.data.healthgrades.dentistTbl);
			injectPatientTbl(result.data.healthgrades.patientTbl);
			injectCallTracking(result.data.healthgrades.callTracking);
			injectTrafficData(result.data.healthgrades.trafficData);
			injectCallsByStatus(result.data.healthgrades.callsByStatus);
		},
		error : function(httpReq,status,exception){
			console.log(status+" "+exception);
		}
	});
});

function injectPractiseTbl(data){
	
	$(".practice table .name").text(data.name);
	var ratingPercentage = data.rating*100/5;
	//console.log(ratingPercentage);
	$(".practice table .rating .back").css('width', ratingPercentage+"%");
}

function injectDentistTbl(data){
	$.each(data, function(i, v) {
		var ratingPercentage = v.rating*100/5;
		// console.log(v.name);
		// console.log(ratingPercentage);
		$('.dentists .table-wrapper table').append('<tr>'
			+'<td>'+v.name+'</td>'
				+'<td>'
					+'<div class="sm-rating-wrapper">'
						+'<div class="sm-rating">'
							+'<div class="sm-stars"></div>'
							+'<div class="back" style="width:'+ratingPercentage+'%;"></div>'
						+'</div>'
					+'</div>'
				+'</td>'
		+'</tr>');  
	});
}

function injectPatientTbl(data){
	$.each(data, function(i, v){
		var ratingPercentage = v.rating*100/5;
		// console.log(v.name);
		// console.log(ratingPercentage);
		// console.log(v.date);
		 
		$('.patients .table-wrapper table').append('<tr>'
			+'<td>'+v.lName+', '+v.fName+'</td>'
				+'<td>'+v.date+'</td>'
				+'<td>'
					+'<div class="sm-rating-wrapper">'
						+'<div class="sm-rating">'
							+'<div class="sm-stars"></div>'
							+'<div class="back" style="width:'+ratingPercentage+'%;"></div>'
						+'</div>'
					+'</div>'
				+'</td>'
			+'</tr>');  
	});
}