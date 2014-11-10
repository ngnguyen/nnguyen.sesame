function displayAvgRating(data){
	if (!(data.numRes) || !(data.avgRating)){ 
		dataUnavailable($(".healthgrades .banner-col:nth-child(1)"), "Average Rating For Practise");
	
	}else{
		var numResponse = parseArray(data.numRes);
		var avgRating = parseArray(data.avgRating);
		//console.log(numResponse.length);
		
		if (numResponse.length < 1 || avgRating.length < 1){
			
			noValueMsg($(".healthgrades .banner-col:nth-child(1)"));
		}else{
			
			numResponse = parseNumAr(numResponse[0]);
			avgRating = parseNumAr(avgRating[0])[0].toFixed(1);
			
			//console.log(avgRating);
			
			$("#no-of-response span").text(numResponse);
			var temp = (avgRating*100/5);
			$("#avg-rating .lg-rating .back").css("width", temp+"%");
			$("#avg-rating").attr("title", (avgRating));
			
		}
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
		//console.log('fnamear '+fNameAr);
		
		if (fNameAr.length < 1 || lNameAr.length < 1 || dateAr.length < 1){
			
			noValueMsg($(".healthgrades .banner-col:nth-child(2)"));
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
