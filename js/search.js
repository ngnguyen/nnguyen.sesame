// inject values into "top 5 keyword ranking" table
function displayKeywords(data){
	if (!(data.kw) || !(data.current) || !(data.lastWeek) || !(data.months)){
		dataUnavailable($(".seo .banner-col:nth-child(1)"), "Top 5 Keyword Rankings");
	} else {
		var kwAr = capitalizeFirstLetter(parseArray(data.kw));
		var currentAr = parseNumAr(parseArray(data.current));
		var lastWeekAr = parseNumAr(parseArray(data.lastWeek));
		var monthAr = capitalizeFirstLetter(parseArray(data.months));
		
		$('#kw-ranking .m_cur').text(monthAr[0]);
		$('#kw-ranking .m_prev').text(monthAr[1]);
		
		$.each(kwAr, function(i, v){
			var diff = (currentAr[i]-lastWeekAr[i]);
			diff = (diff>0) ? ("+"+diff) : diff; 	
			
			$("#kw-ranking").append(
				"<tr>"
					+"<td class='kw'>"+kwAr[i]+"</td>"
					+"<td class='current tooltip' title='"+diff+"'>"+currentAr[i]+"</td>"
					+"<td class='last-week'>"+lastWeekAr[i]+"</td>"
				+"</tr>"
			);
		});
	}
}

function displayCityPageView(data){
	if (!(data.cities) || !(data.c_current) || !(data.c_lastWeek) || !(data.months)){
		dataUnavailable($(".seo .banner-col:nth-child(2)"), "Cities and Page Views");
		
	} else {
		var cityAr = capitalizeAllWordsOfAr(parseArray(data.cities));
		var currentAr = parseNumAr(parseArray(data.c_current));
		var lastWeekAr = parseNumAr(parseArray(data.c_lastWeek));
		var monthAr = capitalizeFirstLetter(parseArray(data.months));
		
		$('#city-page-view .m_cur').text(monthAr[0]);
		$('#city-page-view .m_prev').text(monthAr[1]);
		
		$.each(cityAr, function(i, v){
			var diff = (currentAr[i]-lastWeekAr[i]);
			diff = (diff>0) ? ("+"+diff) : diff; 	
			
			$("#city-page-view").append(
				"<tr>"
					+"<td class='city'>"+cityAr[i]+"</td>"
					+"<td class='current tooltip' title='"+diff+"'>"+currentAr[i]+"</td>"
					+"<td class='last-week'>"+lastWeekAr[i]+"</td>"
				+"</tr>"
			);
		});
	}
}