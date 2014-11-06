/*
	@desc This js file draws content for each tab in SEO landing page
*/

"use strict";

$(document).ready(function(){
	assignBgColor($(".kw-table .this-month"));
	assignBgColor($(".kw-table .last-month"));
	//makeMonthYrPicker();
	
	var temp = { // tooltip for most charts		
		headerFormat: '<table>',
		pointFormat: '<tr><td style="font-size:10px;"><b>{point.y}</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	}
	
	
	/******************************************************
	
		MAKE CONTENT OF SESAME FIRST CALL TAB 
	
	******************************************************/
	
	
	// "from organic traffic" table
	var organicTraffic = {
		"title": '',
		"heading": ['From Organic Trafic', 'Sep', 'Aug'],
		"content": [
			['Total Calls',48,32],
			['New Patient Calls',28,24],
			['Current Patient Calls',20,10]
		]
	};
	
	// "Call Over Time From Organic Source" chart
	var srcCalls = lineChart();
	srcCalls.title.text = "Calls Over Time From Organic Sources";
	srcCalls.series = [
		{
			name: 'Total Calls',
			data: [163,194,212,238,278,345,350,379,381,405,437,476],
			marker: { fillColor: '#06577a' },
			tooltip: temp
			
		}, {
			name: 'New Calls',
			data: [90,110,120,130,153,164,173,197,212,238,278,345],
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		}, {
			name: 'Patient Calls',
			data: [10,15,20,30,40,60,35,100,110,130,150,200],
			marker: { fillColor: '#e7ec63' },
			tooltip: temp
		}
	];
	
	// "From Paid Traffic" table
	var paidTraffic = {
		"title": '',
		"heading": ['From Paid Trafic', 'Sep', 'Aug'],
		"content": [
			['Total Calls',48,32],
			['New Patient Calls',28,24],
			['Current Patient Calls',20,10]
		]
	};
	
	// "Calls Over Time From Paid Sources" chart
	var paidCalls = lineChart();
	paidCalls.title.text = "Calls Over Time From Paid Sources";
	paidCalls.series = [
		{
			name: 'Total Calls',
			data: [50,60,70,90,110,130,115,160,170,190,210,250],
			marker: { fillColor: '#06577a' },
			tooltip: temp
			
		},{	
			name: 'New Calls',
			data: [20,30,40,50,60,80,55,120,130,150,170,220],
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		},{	
			name: 'Patient Calls',
			data: [10,15,20,30,40,60,35,100,110,130,150,200],
			marker: { fillColor: '#e7ec63' },
			tooltip: temp
		}
	];
	
	//draw content of the whole tab
	drawTable($("#first-call-content"), organicTraffic);
	$("#first-call-content").append(
		'<div id="organic-src-calls" class="line-chart"></div>');
	$("#organic-src-calls").highcharts(srcCalls);
	drawTable($("#first-call-content"), paidTraffic);
	$("#first-call-content").append(
		'<div id="paid-src-calls" class="line-chart"></div>');
	$("#paid-src-calls").highcharts(paidCalls);
	
	/**********************************************
	
		MAKE CONTENT OF WEBSITE TRAFFIC TAB 
	
	***********************************************/
	
	// "Overall Traffic" table
	var overallTraffic = {
			'title': '',
			'heading': ['Overall Traffic'],
			'content': [
				['Total Website Visits This Month',617,''],
				['Average Daily Visits',20,''],
				['Average Time on Site (min:sec)','2:26','']
			]
		};
	
	// "Overall Traffic By Source" table
	var overallTrafficBySrc = {
		'title': '',
		'heading': ['Overall Traffic By Source', 'Total Visits','New Visits'],
		'content': [
			['Organic Traffic',617,304],
			['Referral Traffic',39,31],
			['Direct Traffic',144,105]
		]
	};
		
	// "Top Referring Sites (Non-Organic)" table
	var topReferringSite = {
		'title': '',
		'heading': ['Top Referring Sites (Non-Organic)'],
		'content': [
			['facebook.com', 617],
			['invisaign.com', 400],
			['youtube.com', 300],
			['healthgrades.com', 206],
			['twitter.com', 100]
		]
	};
	
	// "visit over time" chart
	var visitOverTime = lineChart();
			visitOverTime.title.text = "Visit Over Time";
			
			visitOverTime.series = [
				{
					name: 'Total visits',
					data: [50,60,70,90,110,130,115,160,170,190,210,250],
					marker: { fillColor: '#06577a' },
					tooltip: temp
					
				}, {
					name: 'New visits',
					data: [20,30,40,50,60,80,55,120,130,150,170,220],
					marker: { fillColor: '#36b900' },
					tooltip: temp
				}
			];
	
	// "total traffic share" pie chart
	var totalTraffic = pieChart();
	totalTraffic.title.text = "Share Of Total Traffic By Source";
	totalTraffic.series[0].data = [
		["Total Traffic", 70.34],
		["Referral Traffic", 23.34],
		["Patient Traffic", 6.32]
	];
	
	drawTable($("#website-traffic-content"), overallTraffic);
	drawTable($("#website-traffic-content"), overallTrafficBySrc);
	$("#website-traffic-content").append(
		'<div id="total-traffic-share" class="pie-chart"></div>');
	$("#website-traffic-content").append(
		'<div id="visits-over-time" class="line-chart"></div>');
	$("#total-traffic-share").highcharts(totalTraffic);
	$("#visits-over-time").highcharts(visitOverTime);
	drawTable($("#website-traffic-content"), topReferringSite, "last-tbl");
	
	
	/**********************************************
	
		MAKE CONTENT OF SESAME SEO TAB 
		
	***********************************************/
	
	
	var overallTrafficShare = {
		"title": "",
		"heading": ["Share of Overall Traffic"],
		"content": [
			["Google (Organic)", "62.40%",''],	
			["Bing (Organic)", "7.13%",''],
			["Yahoo (Organic)", "0.81%",'']
		]
	};
	
	var trafficByLocation = {
		"title": "Traffic By Location",
		"heading": ["Traffic By Location"],
		"content": [
			["Seattle", 91],	
			["Bellevue", 37],	
			["Kirkland", 28],	
			["Redmond", 28],	
			["Tacoma", 28]
		]
	};
	
	var contentByPageView = {
		"title": '',
		"heading": ["Top Content By Page Views","Page Views","% Of Total Views"],
		"content": [
			["/meet-the-doctor",116,"18.80%"],
			["/office-location",102,"16.53%"],
			["/invisalign0info",98,"15.88%"],
			["/meet-the-staff",95,"15.40%"],
			["/office-visits",69,"11.18%"]
		]
	}
	
	var searchEngineVisits = barChart();
	searchEngineVisits.title.text = "Visits By Search Engine";
	searchEngineVisits.series = [
		{name: 'New Visit', data: [270,30,4], tooltip: temp},
		{name: 'Total Visits', data: [385,44,5], tooltip: temp}
	];
	searchEngineVisits.xAxis.categories = ["Google", "Bing", "Yahoo"];
	
	// draw content of the whole tab
	drawTable($("#sesame-seo-content"),overallTrafficShare);
	$("#sesame-seo-content").append(
		'<div id="search-engine-visits" class="bar-chart"></div>');
	$("#search-engine-visits").highcharts(searchEngineVisits);
	drawTable($("#sesame-seo-content"), trafficByLocation, "traffic-by-location-tbl");
	drawTable($("#sesame-seo-content"), contentByPageView, "last-tbl");
	
	
	/**********************************************
	
		MAKE CONTENT OF REVIEW MONITOR TAB 
		
	***********************************************/
	
	var overallReviews = {
		"title" : '',
		"heading": ["Overall Reviews"],
		"content": [
			["Total Reviews",8],
			["Average Rating","5.00"]
		]
	};
	
	var networkByNumReview = {
		"title" : '',
		"heading": ["Top Network By Number of Reviews","Total Reviews", "Average Rating"],
		"content": [
			["Healthgrades",5,"5.00"],
			["Google",3,"5.00"]
		]
	};
	
	drawTable($("#review-monitor-content"), overallReviews, "overall-reviews-tbl");
	drawTable($("#review-monitor-content"), networkByNumReview, "last-tbl");
	$("#review-monitor-content").append(
		"<div class='review-note'>All reviews are based on a scale of 1 to 5 stars</div>");
	
	/**********************************************
	
		MAKE CONTENT OF SESAME PAY-PER-CLICK TAB 
		
	***********************************************/
	
	
	//draw tables for Pay-per-click tab
	var campaignSpend = {
		"title" : '',
		"heading": ["Campaign Spend", "This Month", "Last Month"],
		"content": [
			["Total Budget","$356.00","---"],
			["Total Spend","$357.89", "$332.40"],
			["Average Cost-per-Click (CPC)","$2.08","$2.62"]
		]
	}
	
	var campaignPerformance = {
		"title" : '',
		"heading": ["Campaign Performance", "This Month", "Last Month"],
		"content": [
			["Total Impressions","$356.00","---"],
			["Total Clicks","$357.89", "$332.40"],
			["Click-through Rate (CTR)","$2.08","$2.62"]
		]
	}
	
	// draw Click Through Rate over time
	var ctrOverTime = lineChart();
	ctrOverTime.title.text = "Click-through Rate Over Time";
	ctrOverTime.legend.enabled = false;
	ctrOverTime.series = [
		{
			data : [0.25,0.3,0.5,0.7,0.9,1.2,1.5,1.0,1.3,1.5,1.8,2.1],
			color: "#eaa43d",
			marker: { fillColor: '#eaa43d' },
			tooltip: temp
		}
	];
	
	var cpcOverTime = lineChart();
	cpcOverTime.title.text = "Cost-per-Click Over Time ($)";
	cpcOverTime.legend.enabled = false;
	cpcOverTime.series = [
		{
			data : [1.0,1.2,1.3,1.6,1.9,2.0,2.5,2.2,2.4,2.5,2.8,2.9],
			color: "#06577a",
			marker: { fillColor: '#06577a' },
			tooltip: temp
		}
	];
	
	drawTable($("#campaign-spend"), campaignSpend);
	drawTable($("#campaign-performance"), campaignPerformance);
	$("#ctr-over-time").highcharts(ctrOverTime);	
	$("#cpc-over-time").highcharts(cpcOverTime);
	
	
});

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
