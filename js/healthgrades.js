


function displayAvgRating(data){
	if (!(data.numRes) || !(data.avgRating)){ 
		dataUnavailable($(".healthgrades .banner-col:nth-child(1)"), "Average Rating For Practise");
	
	}else{
		var numResponse = parseNumAr(parseArray(data.numRes))[0];
		var avgRating = parseNumAr(parseArray(data.avgRating))[0];
		
		$("#no-of-response span").text(numResponse);
		var temp = (avgRating*100/5);
		$("#avg-rating .lg-rating .back").css("width", temp+"%");
		$("#avg-rating").attr("title", (avgRating));
	}
}

function displayRatings(data){
	if (!(data.fNames) || !(data.lNames) || !(data.dates) || !(data.ratings)){
		dataUnavailable($(".healthgrades .banner-col:nth-child(2)"), "Recent Patient Reviews");
	
	}else{ 
		var fNameAr = capitalizeFirstLetter(parseArray(data.fNames));
		var lNameAr = capitalizeFirstLetter(parseArray(data.lNames));
		var dateAr = parseArray(data.dates);
		var ratingAr = parseNumAr(parseArray(data.ratings));
		
		// console.log(fNameAr.length);
		// console.log(fNameAr);
		
		if (fNameAr.length < 1 || lNameAr.length < 1 || dateAr.length < 1){
			
			newMemberMsg($(".healthgrades .banner-col:nth-child(2)"), "Recent Patient Reviews", "Healthgrades");
		}else{	
			
			// wipe out hard-coded values
			$("#recent-reviews").html("");
			
			// inject values if they are passed in url
			$.each(ratingAr, function(i, v){
				$("#recent-reviews").append(
					"<tr>"
						+"<td>"+lNameAr[i]+", "+fNameAr[i]+"</td>"
						+"<td>"+moment(dateAr[i], "MM-DD-YYYY").format("MMM DD YYYY")+"</td>"
						+"<td>"
							+"<div class='sm-rating-wrapper tooltip' title='"+ratingAr[i]+"'>"
								+"<div class='sm-rating'>"
									+"<div class='sm-stars'></div>"
									+"<div class='back' style='width:"+(ratingAr[i]*100/5)+"%;'></div>"
								+"</div>"
							+"</div>"
						+"</td>"
					+"</tr>");	
			});
		}		
	}
}
