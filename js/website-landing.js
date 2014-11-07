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
});

function drawWebStat(){
	var webstat = irregularIntervalChart();
	webstat.title.text = "Website Statistics";
	
	$('#web-stat').highcharts(webstat);
}

