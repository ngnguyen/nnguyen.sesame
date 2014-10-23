// inject values into "top 5 keyword ranking" table
function displayKeywords(data){
	if (!(data.kw) || !(data.current) || !(data.last) || !(data.months)){
		dataUnavailable($(".seo .banner-col:nth-child(1)"), "Top 5 Keyword Rankings");
	} else {
		var kwAr = capitalizeFirstLetter(parseArray(data.kw));
		var currentAr = parseNumAr(parseArray(data.current));
		var lastAr = parseNumAr(parseArray(data.last));
		var monthAr = capitalizeFirstLetter(parseArray(data.months));
		
		$('#kw-ranking .m_cur').text(monthAr[0]);
		$('#kw-ranking .m_prev').text(monthAr[1]);
		
		$.each(kwAr, function(i, v){
			var diff = (currentAr[i]-lastAr[i]);
			diff = (diff>0) ? ("+"+diff) : diff; 	
			
			$("#kw-ranking").append(
				"<tr>"
					+"<td class='kw'>"+kwAr[i]+"</td>"
					+"<td class='current tooltip' title='"+diff+"'>"+currentAr[i]+"</td>"
					+"<td class='last-week'>"+lastAr[i]+"</td>"
				+"</tr>"
			);
		});
	}
}

function displayCityPageView(data){
	if (!(data.cities) || !(data.c_current) || !(data.c_last) || !(data.months)){
		dataUnavailable($(".seo .banner-col:nth-child(2)"), "Cities and Page Views");
		
	} else {
		var cityAr = capitalizeAllWordsOfAr(parseArray(data.cities));
		var currentAr = parseNumAr(parseArray(data.c_current));
		var lastAr = parseNumAr(parseArray(data.c_last));
		var monthAr = capitalizeFirstLetter(parseArray(data.months));
		
		$('#city-page-view .m_cur').text(monthAr[0]);
		$('#city-page-view .m_prev').text(monthAr[1]);
		
		$.each(cityAr, function(i, v){
			var diff = (currentAr[i]-lastAr[i]);
			diff = (diff>0) ? ("+"+diff) : diff; 	
			
			$("#city-page-view").append(
				"<tr>"
					+"<td class='city'>"+cityAr[i]+"</td>"
					+"<td class='current tooltip' title='"+diff+"'>"+currentAr[i]+"</td>"
					+"<td class='last-week'>"+lastAr[i]+"</td>"
				+"</tr>"
			);
		});
	}
}