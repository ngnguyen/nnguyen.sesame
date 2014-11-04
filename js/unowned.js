
function displayKeywordsUnowned(data){
	if (!(data.kw) || !(data.current) || !(data.lastWeek)){
		dataUnavailable($(".seo .banner-col:nth-child(1)"), "Top 5 Keyword Rankings");
	} else {
		var kwAr = capitalizeFirstLetter(parseArray(data.kw));
		var currentAr = parseNumAr(parseArray(data.current));
		var lastWeekAr = parseNumAr(parseArray(data.lastWeek));
		
		$.each(kwAr, function(i, v){
			var diff = (currentAr[i]-lastWeekAr[i]);
			diff = (diff>0) ? ("+"+diff) : diff; 	
			
			$("#kw-ranking").append(
				"<tr>"
					+"<td class='kw'>"+kwAr[i]+"</td>"
					+"<td class='current tooltip' >"+currentAr[i]+"</td>"
					+"<td class='last-week'>"+lastWeekAr[i]+"</td>"
				+"</tr>"
			);
		});
	}
}

function moreInfoMsg(){
	$(".more-info").append('For more information please contact '
		+ 'your Solutions Consultant at '
		+ '<span class="phone-no">866-437-53844</span>');
}
