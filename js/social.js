function drawFbReachEngagement(data){
	if (!(data.reach) || !(data.engagement) || !(data.months)) {
		dataUnavailable($('.social .banner-col:nth-child(2)'), "Facebook Reach and Engagement");
	} else {
		var monthAr = capitalizeFirstLetter(parseArray(data.months));
		var reachAr = parseNumAr(parseArray(data.reach));
		var engagementAr = parseNumAr(parseArray(data.engagement));
		
		$('#fb-reach-engagement-line').highcharts({
			chart: {
				style: { 
					fontFamily: "\"Trebuchet MS\", arial, helvetica, sans-serif;"
					
				}
			},
			title: {
				text: 'Facebook',
				style: {
					fontSize: '14px',
					fontWeight: 'bold',
					color: '#06577a'
				},
				y:15,
				x:-132,
				margin:23,
			},
			legend: { 
				verticalAlign:'top', 
				x:55, 
				y:-5,
				itemStyle: { 
					color: "#06567A", 
					fontSize: "14px",
					fontWeight: "bold",
					fontFamily: "\"Trebuchet MS\", arial, helvetica, sans-serif;"
				},
				itemDistance:30,
				symbolWidth:18
			},
			colors: [ "#00A7E5","#E6ED64" ],
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: monthAr,
				labels: {
					style: {
						color: '#06567A',
						fontSize: '13px'
					}
				}
			},
			yAxis: {
				min:0,
				title: '',
				gridLineColor: '#06567A',
				labels: {
					style: {
						color: '#06567A',
						fontSize: '11px'
					},
					format: '{value:.0f}'
				},
			},
			series: [{
			    name: 'Reach',
				data: reachAr,
				marker: { fillColor: '#06567A' },
				tooltip: {		
					headerFormat: '<table>',
					pointFormat: '<tr><td style="font-size:12px;"><b>{point.y}</b> Views</td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				}
			}, {
				name: 'Engagement',
				data: engagementAr,
				marker: { fillColor: '#06567A' },
				tooltip: {		
					headerFormat: '<table>',
					pointFormat: '<tr><td style="font-size:12px;"><b>{point.y}</b> Clicks</td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				}
			}],
			exporting: {
				enabled: false
			},
			 credits: {
				enabled: false
			}
		});	
	}
}

function drawFbLikes(data) {
	if (!(data.months) || !(data.numLikes)){
		dataUnavailable($(".social .banner-col:nth-child(1)"), "Facebook Likes");
	}else{
		var monthAr = capitalizeFirstLetter(parseArray(data.months));
		var numLikeAr = parseNumAr(parseArray(data.numLikes));
		
		$('#fb-like-chart').highcharts({
			title: {
				text: ''
			},
			colors: [
				"#E6ED64",
				"#000"
			],
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: monthAr,
				labels: {
					style: {
						color: '#06567A',
						fontSize: '13px'
					}
				}
			},
			yAxis: {
				min:0,
				title: '',
				//tickInterval:10,
				gridLineColor: '#06567A',
				labels: {
					style: {
						color: '#06567A',
						fontSize: '11px'
					}
				}
			},
			tooltip: {		
				headerFormat: '<table>',
				pointFormat: '<tr><td style="font-size:12px;"><b>{point.y}</b> Likes</td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			legend: {
				enabled: false
			},
			series: [{
			   // name: 'London',
				data: numLikeAr,
				marker: { 
					fillColor: '#06567A'
				}
			}],
			exporting: {
				enabled: false
			},
			 credits: {
				enabled: false
			}
		});	
	}
};
