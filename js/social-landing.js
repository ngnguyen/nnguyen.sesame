"use strict";

$(document).ready(function(){
	var temp = { // tooltip for most charts		
		headerFormat: '<table>',
		pointFormat: '<tr><td style="font-size:10px;"><b>{point.y}</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	}
	
	var fbLike = {
		"title": "",
		"heading": ["Facebook Engagement"],
		"content": [
			["Total Likes",1579,''],
			["New Likes",52,'']
		]
	};
	
	var fbEngagement = {
		"title": "",
		"heading": ["Facebook Engagement",'Sep','Aug'],
		"content": [
			["Average Daily Reach",83,120],
			["Engaged Users",180,601],
			["People Talking About This (PTAT)",93,163]
		]
	};
	
	var fbLikeOverTime = lineChart();
	fbLikeOverTime.title.text = "Total Facebook Likes Over Time";
	fbLikeOverTime.legend.enabled = false;
	fbLikeOverTime.series = [
		{
			data : [50,60,70,90,110,130,115,160,170,190,210,250],
			color: "#00a9e4",
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		}
	];
	
	var fbActivityOverTime = lineChart();
	fbActivityOverTime.title.text = "Facebook Activity Over Time";
	//fbActivityOverTime.legend.enabled = false;
	fbActivityOverTime.series = [
		{
			name: 'Daily Reach',
			data: [50,60,70,90,110,130,115,160,170,190,210,250],
			marker: { fillColor: '#065679' },
			tooltip: temp
			
		}, {
			name: 'Engaged',
			data: [20,30,40,50,60,80,55,120,130,150,170,220],
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		}, {
			name: 'PTAT',
			data: [10,15,20,30,40,60,35,100,110,130,150,200],
			marker: { fillColor: '#e7ec63' },
			tooltip: temp
		}
	];
	
	var fbLikeByLocation ={
		"title": "",
		"heading": ["Facebook Likes By Location"],
		"content": [
			["Seattle, WA",1579,''],
			["Bellevue, WA",52,''],
			["Redmond, WA",52,'']
		]
	};
	
	var blogTraffic ={
		"title": "",
		"heading": ["Blog Traffic", "Sep", "Aug"],
		"content": [
			["Blog Views",57,62]
		]
	};
	
	
	var blogPageViewsOverTime = lineChart();
	blogPageViewsOverTime.title.text = "Blog Page Views Over Time";
	blogPageViewsOverTime.legend.enabled = false;
	blogPageViewsOverTime.series = [
		{
			data : [50,60,70,90,110,130,115,160,170,190,210,250],
			color: "#00a9e4",
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		}
	];
	
	var ytvideo ={
		"title": "",
		"heading": ["Youtube Activity (5 Uploads)", "Sep", "Aug"],
		"content": [
			["Video Views",57,62],
			["Subcribers",57,62]
		]
	};
	
	var ytVideoViewsOverTime = lineChart();
	ytVideoViewsOverTime.title.text = "Youtube Video Views Over Time";
	ytVideoViewsOverTime.legend.enabled = false;
	ytVideoViewsOverTime.series = [
		{
			data : [50,60,70,90,110,130,115,160,170,190,210,250],
			color: "#00a9e4",
			marker: { fillColor: '#00a9e4' },
			tooltip: temp
		}
	];
	
	var twitterActivity ={
		"title": "",
		"heading": ["Twitter (290 Tweets)", "Sep", "Aug"],
		"content": [
			["Twitter Followers",5,5]
		]
	};
	
	drawTable($("#social-content-wrapper"), fbLike);
	$("#social-content-wrapper").append(
		'<div id="fb-likes-over-time" class="line-chart"></div>');
	$("#fb-likes-over-time").highcharts(fbLikeOverTime);
	drawTable($("#social-content-wrapper"), fbEngagement);
	$("#social-content-wrapper").append(
		'<div id="fb-activity-over-time" class="line-chart"></div>');
	$("#fb-activity-over-time").highcharts(fbActivityOverTime);
	drawTable($("#social-content-wrapper"), fbLikeByLocation);
	drawTable($("#social-content-wrapper"), blogTraffic);
	$("#social-content-wrapper").append(
		'<div id="blog-page-views-over-time" class="line-chart"></div>');
	$("#blog-page-views-over-time").highcharts(blogPageViewsOverTime);
	drawTable($("#social-content-wrapper"), ytvideo);
	$("#social-content-wrapper").append(
		'<div id="yt-video-views-over-time" class="line-chart"></div>');
	$("#yt-video-views-over-time").highcharts(ytVideoViewsOverTime);
	drawTable($("#social-content-wrapper"), twitterActivity);
});