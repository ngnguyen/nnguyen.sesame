"use strict";

$(document).ready(function(){
	drawWebStat();
	
	var tooltipFormat = {
		headerFormat: '<table>',
		pointFormat: '<tr>'
			+'<td style="padding:0;font-size:10px;"><b>{point.y}</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	}
	
	// draw Visits By Search Engine chart
	var visitsBySearchEngine = columnChart();
	visitsBySearchEngine.title.text = 'Visits by Search Engine';
	visitsBySearchEngine.xAxis.categories = ['Google','Bing','Yahoo'];
	visitsBySearchEngine.series = [
		{
			name: 'Total Visits',
			tootip: tooltipFormat,
			data: [78,60,35]
		},{
			name: 'New Visits',
			tootip: tooltipFormat,
			data: [55,28,20]
		}
	];
	$('#visits-by-search-engine').highcharts(visitsBySearchEngine);
	
	// draw Total Visits vs New Visits by Source chart
	var totalVisitsVsNewVisits = columnChart();
	totalVisitsVsNewVisits.title.text = 'Total Visits vs New Visits by Source';
	totalVisitsVsNewVisits.xAxis.categories = ['Organic Traffic','Referral Traffic','Direct Traffic'];
	totalVisitsVsNewVisits.series = [
		{
			name: 'Total Visits',
			tootip: tooltipFormat,
			data: [78,60,35]
		},{
			name: 'New Visits',
			tootip: tooltipFormat,
			data: [55,28,20]
		}
	];
	$('#total-visits-vs-new-visits').highcharts(totalVisitsVsNewVisits);
	
	// draw Top Referring Sites (Non-Organic) table
	var topReferringSite = {
		"title": "",
		"heading": ["Top Referring Sites (Non-Organic)"],
		"content": [
			["facebook.com",8],
			["invisalign.com",7],
			["youtube.com",6],
			["healthgrades.com",5],
			["googleads.g.doubleclick.net.com",3]
		]
	};
	drawTable($('#top-referring-site'), topReferringSite);
	
	// draw Visits by Location table
	var visitsByLocation ={
		"title": "",
		"heading": ["Visits by Location"],
		"content": [
			["Seattle, WA",8],
			["Bellevue, WA",7],
			["Kirkland, WA",6],
			["Winchester-On-The-Severn, MD",5],
			["Tacoma, WA",3]
		]
	};
	drawTable($('#visits-by-location'), visitsByLocation);
	
	
	// draw Top Content By Pageviews table
	var contentByPageviews = {
		"title": "",
		"heading": ["Top Content By Pageviews", "Pageviews", "% Of Total Views"],
		"content": [
			["/meet-the-doctor",116, "18.80%"],
			["/dentalexams-and-cleanings",102, "16.53%"],
			["/invisalign-info",98, "15.88%"],
			["/your-child-s-first-orthodontic-checkup",95, "18.80%"],
			["/carriere-self-ligating-bracket-system",69, "11.18%"]
		]
	};
	drawTable($('#content-by-pageviews'), contentByPageviews);	
});

function drawWebStat(){
	var webstat = irregularIntervalChart();
	webstat.title.text = "Website Statistics";
	
	$('#web-stat').highcharts(webstat);
}

