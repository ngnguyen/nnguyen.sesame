/*
	@desc This js file draws content for each tab in SEO landing page
*/

"use strict";

$(document).ready(function(){
	// syntax for using ajax request for jsonp
	$.ajax({
		type: "GET",
		url:  window.fakeLandingDataUrl,
		dataType: 'jsonp',
		jsonpCallback: 'jsoncallback',
		success: function(result){
			injectTopKwRanking(result.data.seo.kwRankingTbl);
			injectTblContent(result.data.seo.organicTrafficTbl, $('#first-call-content'));
			injectChart("Calls Over Time From Organic Source", result.data.seo.organicTrafficChart,"organic-src-calls");
			injectTblContent(result.data.seo.paidTrafficTbl, $('#first-call-content'));
			injectChart("Calls Over Time From Paid Source", result.data.seo.paidTrafficChart,"paid-src-calls");
			injectTblContent(result.data.seo.overallReviewsTbl, $('#review-monitor-content'), 'Overall Reviews');
			injectTblContent(result.data.seo.networkByNoOfReviewsTbl, $('#review-monitor-content'));
			
			assignBgColor($(".kw-table .this-month"));
			assignBgColor($(".kw-table .last-month"));
		},
		error : function(httpReq,status,exception){
			console.log(status+" "+exception);
		}
	});
});

function injectTopKwRanking(data){
	$('.kw-table').append('<tr>'
		+'<th>Top keyword Rankings (Google)</th>'
		+'<th>'+data.months.current+'</th>'
		+'<th>'+data.months.last+'</th></tr>'
	+'<tr>');
	
	//console.log(data.details);
	$.each(data.details, function(i, v){
		$('.kw-table').append('<tr>'
			+'<td>'+v.desc+'</td>'
			+'<td class="this-month">'+v.current+'</td>'
			+'<td class="last-month">'+v.last+'</td>'
		+'</tr>');
	});
}	
	
function injectTblContent(data, tag){
	var tbl = { heading:[], content:[] };
	
	$.each(data.headings, function(i, v){
		tbl.heading.push(v);
	});
	
	$.each(data.details, function(i, v){
		var x = []
		for (var propt in v){
			x.push(v[propt]);
		}
		tbl.content.push(x);
	});
	
	drawTable(tag, tbl);
}	

// only to draw charts on SEO page
function injectChart(name, jsonData, idName){
	var temp = { // tooltip for most charts		
		headerFormat: '<table>',
		pointFormat: '<tr><td style="font-size:10px;"><b>{point.y}</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	}
	//console.log(jsonData.totalCalls);
	var chart = lineChart();
	chart.title.text = "Calls Over Time From Organic Sources";
	chart.series = [
		{
			name: 'Total Calls',
			data: jsonData.totalCalls,
			marker: { fillColor: '#06577a' },
			tooltip: temp
			
		}, {
			name: 'New Calls',
			data: jsonData.newCalls,
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		}, {
			name: 'Patient Calls',
			data: jsonData.patientCalls,
			marker: { fillColor: '#e7ec63' },
			tooltip: temp
		}
	];
	$('#first-call-content').append('<div class="line-chart" id="'+idName+'"></div>');
	$('#'+idName).highcharts(chart);
}	
	
	
	
	//"From Paid Traffic" table
	// var paidTraffic = {
		// "title": '',
		// "heading": ['From Paid Trafic', 'Sep', 'Aug'],
		// "content": [
			// ['Total Calls',48,32],
			// ['New Patient Calls',28,24],
			// ['Current Patient Calls',20,10]
		// ]
	// };
	
	//"Calls Over Time From Paid Sources" chart
	// var paidCalls = lineChart();
	// paidCalls.title.text = "Calls Over Time From Paid Sources";
	// paidCalls.series = [
		// {
			// name: 'Total Calls',
			// data: [50,60,70,90,110,130,115,160,170,190,210,250],
			// marker: { fillColor: '#06577a' },
			// tooltip: temp
			
		// },{	
			// name: 'New Calls',
			// data: [20,30,40,50,60,80,55,120,130,150,170,220],
			// marker: { fillColor: '#00a9e4' },
			// tooltip: temp
		// },{	
			// name: 'Patient Calls',
			// data: [10,15,20,30,40,60,35,100,110,130,150,200],
			// marker: { fillColor: '#e7ec63' },
			// tooltip: temp
		// }
	// ];
	
	
	// drawTable($("#first-call-content"), organicTraffic);
	// $("#first-call-content").append(
		// '<div id="organic-src-calls" class="line-chart"></div>');
	// $("#organic-src-calls").highcharts(srcCalls);
	// drawTable($("#first-call-content"), paidTraffic);
	// $("#first-call-content").append(
		// '<div id="paid-src-calls" class="line-chart"></div>');
	// $("#paid-src-calls").highcharts(paidCalls);
	
	
	// /**********************************************
	
		// MAKE CONTENT OF REVIEW MONITOR TAB 
		
	// ***********************************************/
	
	// var overallReviews = {
		// "title" : '',
		// "heading": ["Overall Reviews"],
		// "content": [
			// ["Total Reviews",8,''],
			// ["Average Rating","5.00",'']
		// ]
	// };
	
	// var networkByNumReview = {
		// "title" : '',
		// "heading": ["Top Network By Number of Reviews","Total Reviews", "Average Rating"],
		// "content": [
			// ["Healthgrades",5,"5.00"],
			// ["Google",3,"5.00"]
		// ]
	// };
	
	// drawTable($("#review-monitor-content"), overallReviews, "overall-reviews-tbl");
	// drawTable($("#review-monitor-content"), networkByNumReview, "last-tbl");
	// $("#review-monitor-content").append(
		// "<div class='review-note'>All reviews are based on a scale of 1 to 5 stars</div>");
	

// assign different background color based on the value passed 
function assignBgColor(data){
	$.each(data, function(i, v){
		//console.log($(data[i]).text());
		
		if (parseInt($(data[i]).text()) <= 10) {
			$(data[i]).css("background-color", "#b9e7a6");
		
		}else if (parseInt($(data[i]).text()) <= 30) {
			$(data[i]).css("background-color", "#f7f9c9");
		
		}else if (parseInt($(data[i]).text()) <= 99) {
			$(data[i]).css("background-color", "#f8dfbb");
		
		}else{
			$(data[i]).css("background-color", "#f9c3ac");
		}
	});
}

// when a user clicks on a tab in the horizontal navigation, display the clicked
// tab and hide other tabs
function displayTab(e){
	// highlight the current navigation tab (dark blue horizontal navigation)
	$(".tab-wrapper-current").attr("class", "tab-wrapper")
	e.className = "tab-wrapper-current";
	
	// display content of a tab
	$(".tab-content-wrapper").hide();
	$("#"+e.id+"-content").fadeIn(1000);
}
