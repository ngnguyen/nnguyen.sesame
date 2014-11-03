

function drawTodayMsg(data){
	if (!(data.email) || !(data.text) || !(data.phone)){
		console.log(data);
		
		dataUnavailable($('.dental-ortho .banner-col:nth-child(2)'), "Appt. Reminders Sent by Type (yesterday)");
		
	}else{
		var numEmail = parseNumAr(parseArray(data.email));
		var numText = parseNumAr(parseArray(data.text));
		var numPhone = parseNumAr(parseArray(data.phone));
		
		var msgAr = [numEmail, numText, numPhone];
		
		if(numEmail.length<1 || numText.length<1 || numPhone.length<1){
			
			noValueMsg($('.dental-ortho .banner-col:nth-child(2)'))
		}else{
		
			var bars = apptReminderSentBars(msgAr);
			if(is_allZeroValues(msgAr)){ 
				bars.yAxis.max=10;
				//bars.yAxis.gridLineWidth=0;
			}
			$('#today-msg-bars').highcharts(bars);
		}
	}	
}

function apptReminderSentBars(msgAr){
	return {
		chart: {
			type: 'column'
		},
		title:{
			text: ''
		},
		colors: ['#06577A'],
		legend: {
			enabled: false
		},
		xAxis: {
			categories: ["Email", 'Text', 'Phone'],
			labels: {
					useHTML: true,
					formatter: function () {
						return {
							"Email" : '<img class="today-msg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiBJREFUeNpiZAuvms/AwJDAMHjAAiZ9BcnB5CAGeVHBBMb/QHDo2n2G5jV7GUD0QAE7LUWG2hBnMA12FExiIByH7BgYQHEUDDx8/R7ouH0Miw+eo5ljYu2NgI5xAkUXhhxWR9HScfgcAwPMT8R1G4CJnUGAmxNDEiTmZ6rFkOtlzcDJyspw6eFzhh+//5DsEAFuDoZSf3uG1SUxDGFWeljtggVCyaJtDIzAIuE/zAe5XlYM+vKSOA3/8O0Hw5Rtxxgmbz/K8OHrD6Ick+tpzZADNFeAiwOnuotAz04GmguLEbij8CU8bI7bfPoaOGpBvsOSrcFRBPIoPoArY2E4CtlxoJDzM9HCazDIdzDHEeuYTWeugUMGVy7H6ShSfQ2KAnxRj+4BfICgo9Ad5wtM+PjSB6lRTZGjYACUG2dnBhPlMJCDUqevZdgEdBQpgJlZx7aB2JJ3TmYIMGvbMXCwsoCjYvOZ6wx6wOIExEfO1i1r9zG8/PCFwVxVFlwE2GspgcUfvv5AnZAClWE9cd7w3AhKnClA3yNHBSi9xQHxIqBDkQta9JwM0luyaCvDxQfPyXMUegKnpF5EdxyhBI/hKHTHgHJVycKtVKmkIUkgGF7F4HIc3FGw0rcG6CBaV8ro9V8L0B7kWoJRLKnpP3JVQI8WAjbHIVdhjO+/fv8PcgxMEJRu6AnQ60eQOxifvfs0f+7e0wnEVrK0dhww+TQCBBgAjZBP1/a7rukAAAAASUVORK5CYII=" /> Email',
							"Text" : '<img class="today-msg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa5JREFUeNpiZKASYAuvMgBS+4FYgEKjFjBCDXQAUg4UGmZPBTPAgAXooH4gXRBrb8SgICpIrYBjePD6PcPmM9cYPnz9AeI24lHKD8QJyCHMCHTU/zmZwQwgRx26dp9qjpIXFWD48O0Hg1n5FBA38dfKtgUEov48PKQgBgiCHeTaNIdqjqoNcWaoCXGCcRXwqQU6+ALQYQwojgIBOy1FBlCIPXz9gSqOirU3JD9NwRgXHz5nSJm+lmohxc/NwZDraUWZowS4OMChRc00RXFI8XNzMviZajF8hOQWioG+vCTljrr04DlDycKtDNQESAmddEeB0hMo/nfXpVDNQXoKkshFzAVSHVUIDKF+kAGUBDkM5HhZgdPn4oPnYBlnATDLbyDFDKpXM6Ayb3VJNMPm09cZmtfsBZVBjETWnf9RHEWlCrkBSNWDczKwOAA57iIwnZLjKCYGGgBgfbcB5CByAU0cBQQTgTgQ5L7B5Kh8ID4AxIZERl0C1nKKyiAAig8gV7Q4gAJ6hU0rR8EAeo6eAHWswkBEH9Z2H7Sxd4GeaWoDgYQNCp330JDC20YHCDAAMo9/QZpE1dgAAAAASUVORK5CYII=" /> Text',
							"Phone" : '<img class="today-msg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlBJREFUeNpiZMAC2MKrDIBUABDrA7EAEBtAaUrBByC+AKUvAvGGXyvbLqArYkRzTAKQqgdiBQb6gQdA3Ah03AIURwEdAwqF/dAQGShwAIgDgY77wAQVGGgHgYAD1B0MjMBQaoBGGSEAivuNFFjqT6THC1mgiokBidgSJbEA6HlQmjlPRIaJZyHS9aCEeAFocAGQ3Y8mZ4jsWGjOPY/ue6CaCUC5Riz60YEBKPr+E+EoQWic12PxBCyLw4AADjUgj20A2nefUO4mxlGgYAf58D4VErMhtPzDm4aZ0HyJrbADOWg+sqCdliLDzxWtYAxi765LAbNBNLocGgBF3QQCdjKA0pQj1PW4cpwCNOrg4OO3HwyHrt2Hsy8+fA5mg2h0OSzZ3oCAnQcYicg159HTiAA3B4OevCSYfQnoEHlRQQZ+Lg6wIx6+fo8i9+ErhsMeANOWIj47mQk4CFTtZKCLm6nKgqMqzt6IYdfF2wytke4MtSHODOpSogw3n71GkXv4GiOmBJh1bB/+vXr4AsmOglY9y7GXK4zwaALhD0D2pYcvGA4C2SAaWQ5LFIKjEeiwmUCH/cCV0HGBAlxZFxR9oEQMwiC2voIkmA2i0eVwAAGo+TgTOrZQAjkmH5cmUPqB5SwQW19eEs7fhCaHB+SDSnlg+npAVPQBgxaUdS3wFG+URh8IgFwsAIzCjUSFFKESV15UgKEmxAnMPnjtHjhRg0IH5AhQ7kOWA/HxAAWio49QfUhBOUUUYMSRpv4z0AccAKYpR2JzXyOdHHUQmyBAgAEAk3kcgcc2r4IAAAAASUVORK5CYII=" /> Phone'
						}[this.value]; 
					},
					style: {
						color: '#06567A',
						fontSize: '13px'
					}
			}
		},
		yAxis: {
			title: {text: ''},
			gridLineColor: '#06567A',
			labels: {
				style: {
					color: '#06567A',
					fontSize: '11px'
				},
				format: '{value:.0f}'
			}                 
		},
		tooltip: {
			headerFormat: '<table>',
			pointFormat: '<tr><td style="font-size:12px;"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0
			}
		},
		series: [{
			name: "TODAY'S MESSAGES BY TYPE",
			data: msgAr
		}],
		exporting: {
			enabled: false
		},
		 credits: {
			enabled: false
		}
	}
}

function drawApptBars(data){
	if (!(data.days) || !(data.totalAppt) || !(data.confirmedAppt) || !(data.noShow)){
		dataUnavailable($('.dental-ortho .banner-col:nth-child(1)'),"Daily Appointments (last 7 days)")
	
	}else{
		var dayAr = capitalizeFirstLetter(parseArray(data.days));
		var totalApptAr = parseNumAr(parseArray(data.totalAppt));
		var confirmedApptAr = parseNumAr(parseArray(data.confirmedAppt));
		var noShowAr = parseNumAr(parseArray(data.noShow));
		
		if(dayAr.length<1 || totalApptAr.length<1 || confirmedApptAr<1 || noShowAr.length<1){
		
			noValueMsg($('.dental-ortho .banner-col:nth-child(1)'));
		}else{
			var bars = apptBars(dayAr, totalApptAr, confirmedApptAr, noShowAr);
			
			if (is_allZeroValues(totalApptAr) && is_allZeroValues(confirmedApptAr) && is_allZeroValues(noShowAr)){
				bars.yAxis.max=10;
			}
			$('#appt-bars').highcharts(bars);
		}
	}
}

// accept an array and whether it contains all 0 values
function is_allZeroValues(ar){
	for (var i=0; i<ar.length; i++){
		if (ar[i]>0){ return false; }
	}
	
	return true;
}

// create appBars which is a bar graph
function apptBars(dayAr,totalApptAr,confirmedApptAr,noShowAr){
	return {
		chart: {
			type: 'column'
		},
		title:{
			text: ''
		},
		colors: ['#06577A', '#00A7E5', '#E6ED64'],
		legend: {
			verticalAlign: 'top',
			symbolWidth: 12,
			symbolHeight: 12,
			y: -15,
			//itemWidth:100,
			itemStyle: { 
				color: "#06567A", 
				fontSize: "12px",
				fontWeight: "bold",
				fontFamily: "\"Trebuchet MS\", arial, helvetica, sans-serif;"  
			}
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
			title: {text: ''},
			min:0,
			gridLineColor: '#06567A',
			labels: {
				style: {
					color: '#06567A',
					fontSize: '11px'
				},
				format: '{value:.0f}'
			}
		},
		
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0
			}
		},
		series: [{
			name: 'Total Appts',
			data: totalApptAr,
			tooltip: {
				headerFormat: '<table>',
				pointFormat: '<tr>'
					+'<td style="padding:0;font-size:10px;"><b>{point.y}</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			}
		}, {
			name: 'Confirmed',
			data: confirmedApptAr,
			tooltip: {
				headerFormat: '<table>',
				pointFormat: '<tr>' +
					'<td style="padding:0;font-size:10px;"><b>{point.y}</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			}
		}, {
			name: 'no-shows',
			data: noShowAr,
			tooltip: {
				headerFormat: '<table>',
				pointFormat: '<tr>' +
					'<td style="padding:0;font-size:10px;"><b>{point.y}</b></td></tr>',
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
	};
}