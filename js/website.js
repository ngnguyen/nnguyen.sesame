function drawTopReferringSites(data){
	if (!(data.current) || !(data.last) || !(data.months)){
		dataUnavailable($('.website .banner-col:nth-child(2)'), "Top Referring Sites");
	
	}else{
		var currentAr = parseNumAr(parseArray(data.current));
		var lastAr = parseNumAr(parseArray(data.last));
		var siteAr = parseArray(data.sites);
		//var monthAr = capitalizeFirstLetter(parseArray(data.months));
		
		if(currentAr.length<1 || lastAr.length<1 || siteAr.length<1 /*|| monthAr.length<1*/){
			
			noValueMsg($('.website .banner-col:nth-child(2)'));
		}else{
		
			//$('#referring-sites .m_cur').text(monthAr[0]);
			//$('#referring-sites .m_prev').text(monthAr[1]);
			
			$.each(currentAr, function(i, v){
				var diff = (currentAr[i]-lastAr[i]);
				diff = (diff>0) ? ("+"+diff) : diff; 	
				var siteNameTooltip = false;
				
				// check whether site name is more than 25 characterSet
				// replace the whole name with "siteName ..."
				var siteName = siteAr[i];
				if (siteAr[i].length>25){
					siteName = siteName.substr(0,20) + '...';
					siteNameTooltip = true;
				} 
				
				var longUrl = "<td class='site' >"+siteName+"</td>";;
				if (siteNameTooltip){
					longUrl = "<td class='site tooltip' title='"+siteAr[i]+"'>"+siteName+"</td>";
				}
				
				$("#referring-sites").append(
					"<tr>"
						+longUrl
						+"<td class='current tooltip' title='"+diff+"'>"+currentAr[i]+"</td>"
						+"<td class='last-week'>"+lastAr[i]+"</td>"
					+"</tr>");	
			});
		}	
	}
}

function drawDailyVisitors(data) {
	if (!(data.days) || !(data.numVis)){
		dataUnavailable($('.website .banner-col:nth-child(1)'), "Daily Visits (last 7 days)");
	
	}else{
		
		var dayAr = parseArray(data.days); 
		dayAr = capitalizeFirstLetter(dayAr);
		var tempNumVis = parseArray(data.numVis);
		var numVisAr = parseNumAr(tempNumVis);
		
		/* get current date and go back 7 days. REMOVE THIS AFTER ADA SHOW TIMELINE */
		// var dayNames = ['sun','mon','tue','wed','thu','fri','sat'];
		// var numVisArTemp = {'sun':7,'mon':200,'tue':120,'wed':150,'thu':110,'fri':65,'sat':10};
		
		// var dayAr = [];
		// var currentDay = new Date().getDay();
		
		// var i = currentDay+1;
		
		// while (!(dayAr[6])){
			// if (i<7){
				// dayAr.push(dayNames[i]);
				// i++;
			// }else{
				// i=0;
				// dayAr.push(dayNames[i]);
				// i++;
			// }
		// }
		
		// var numVisAr = [];
		// $.each(dayAr, function(i, v){
			// numVisAr.push(numVisArTemp[v]);
		// });
		
		// dayAr = capitalizeFirstLetter(dayAr);
		
		if(dayAr.length<1 || numVisAr.length<1){
			
			noValueMsg($('.website .banner-col:nth-child(1)'));
		}else{
			$('#daily-visitor-bars').highcharts({
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
					categories: dayAr,
					labels: {
						style: {
							color: '#06567A',
							fontSize: '13px'
						}
					}
				},
				yAxis: {
					title: '',
					//tickInterval:10,
					min:0,
					//minRange:0.1,
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
					pointFormat: '<tr><td style="font-size:12px;"><b>{point.y}</b> Visits</td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				legend: {
					enabled: false
				},
				series: [{
				   // name: 'London',
					data: numVisAr,
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
	}
}