// pair values from 2 array
// temp =[[1,2],[2,3],[4,5]]
function makePairAr(x, y){
	var result = [];
	$.each(x, function (i, value){
		var temp = [value, y[i]]; 
		result.push(temp);
	});
	return result;
}

function drawConfirmationByType(data){
	if (!(data.confirmEmail) || !(data.confirmText) || !(data.confirmVoice) || !(data.confirmLogin)){
		dataUnavailable($('.ortho-sesame .banner-col:nth-child(3)'), "Confimation By Type (Last 24hrs)");
		
	}else{
		var numEmail = parseNumAr(parseArray(data.confirmEmail));
		var numText = parseNumAr(parseArray(data.confirmText));
		var numVoice = parseNumAr(parseArray(data.confirmVoice));
		var numLogin = parseNumAr(parseArray(data.confirmLogin));
		
		var msgAr = [numEmail, numText, numVoice, numLogin];
		
		$('#confirm-msg-bars').highcharts({
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
				categories: ["Email", 'Text', 'Voice', 'Login'],
				labels: {
					useHTML: true,
					formatter: function () {
						return {
							"Email" : '<img class="today-msg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiBJREFUeNpiZAuvms/AwJDAMHjAAiZ9BcnB5CAGeVHBBMb/QHDo2n2G5jV7GUD0QAE7LUWG2hBnMA12FExiIByH7BgYQHEUDDx8/R7ouH0Miw+eo5ljYu2NgI5xAkUXhhxWR9HScfgcAwPMT8R1G4CJnUGAmxNDEiTmZ6rFkOtlzcDJyspw6eFzhh+//5DsEAFuDoZSf3uG1SUxDGFWeljtggVCyaJtDIzAIuE/zAe5XlYM+vKSOA3/8O0Hw5Rtxxgmbz/K8OHrD6Ick+tpzZADNFeAiwOnuotAz04GmguLEbij8CU8bI7bfPoaOGpBvsOSrcFRBPIoPoArY2E4CtlxoJDzM9HCazDIdzDHEeuYTWeugUMGVy7H6ShSfQ2KAnxRj+4BfICgo9Ad5wtM+PjSB6lRTZGjYACUG2dnBhPlMJCDUqevZdgEdBQpgJlZx7aB2JJ3TmYIMGvbMXCwsoCjYvOZ6wx6wOIExEfO1i1r9zG8/PCFwVxVFlwE2GspgcUfvv5AnZAClWE9cd7w3AhKnClA3yNHBSi9xQHxIqBDkQta9JwM0luyaCvDxQfPyXMUegKnpF5EdxyhBI/hKHTHgHJVycKtVKmkIUkgGF7F4HIc3FGw0rcG6CBaV8ro9V8L0B7kWoJRLKnpP3JVQI8WAjbHIVdhjO+/fv8PcgxMEJRu6AnQ60eQOxifvfs0f+7e0wnEVrK0dhww+TQCBBgAjZBP1/a7rukAAAAASUVORK5CYII=" /> Email',
							"Text" : '<img class="today-msg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa5JREFUeNpiZKASYAuvMgBS+4FYgEKjFjBCDXQAUg4UGmZPBTPAgAXooH4gXRBrb8SgICpIrYBjePD6PcPmM9cYPnz9AeI24lHKD8QJyCHMCHTU/zmZwQwgRx26dp9qjpIXFWD48O0Hg1n5FBA38dfKtgUEov48PKQgBgiCHeTaNIdqjqoNcWaoCXGCcRXwqQU6+ALQYQwojgIBOy1FBlCIPXz9gSqOirU3JD9NwRgXHz5nSJm+lmohxc/NwZDraUWZowS4OMChRc00RXFI8XNzMviZajF8hOQWioG+vCTljrr04DlDycKtDNQESAmddEeB0hMo/nfXpVDNQXoKkshFzAVSHVUIDKF+kAGUBDkM5HhZgdPn4oPnYBlnATDLbyDFDKpXM6Ayb3VJNMPm09cZmtfsBZVBjETWnf9RHEWlCrkBSNWDczKwOAA57iIwnZLjKCYGGgBgfbcB5CByAU0cBQQTgTgQ5L7B5Kh8ID4AxIZERl0C1nKKyiAAig8gV7Q4gAJ6hU0rR8EAeo6eAHWswkBEH9Z2H7Sxd4GeaWoDgYQNCp330JDC20YHCDAAMo9/QZpE1dgAAAAASUVORK5CYII=" /> Text',
							"Voice" : '<img class="today-msg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAVCAYAAADB5CeuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlBJREFUeNpiZMAC2MKrDIBUABDrA7EAEBtAaUrBByC+AKUvAvGGXyvbLqArYkRzTAKQqgdiBQb6gQdA3Ah03AIURwEdAwqF/dAQGShwAIgDgY77wAQVGGgHgYAD1B0MjMBQaoBGGSEAivuNFFjqT6THC1mgiokBidgSJbEA6HlQmjlPRIaJZyHS9aCEeAFocAGQ3Y8mZ4jsWGjOPY/ue6CaCUC5Riz60YEBKPr+E+EoQWic12PxBCyLw4AADjUgj20A2nefUO4mxlGgYAf58D4VErMhtPzDm4aZ0HyJrbADOWg+sqCdliLDzxWtYAxi765LAbNBNLocGgBF3QQCdjKA0pQj1PW4cpwCNOrg4OO3HwyHrt2Hsy8+fA5mg2h0OSzZ3oCAnQcYicg159HTiAA3B4OevCSYfQnoEHlRQQZ+Lg6wIx6+fo8i9+ErhsMeANOWIj47mQk4CFTtZKCLm6nKgqMqzt6IYdfF2wytke4MtSHODOpSogw3n71GkXv4GiOmBJh1bB/+vXr4AsmOglY9y7GXK4zwaALhD0D2pYcvGA4C2SAaWQ5LFIKjEeiwmUCH/cCV0HGBAlxZFxR9oEQMwiC2voIkmA2i0eVwAAGo+TgTOrZQAjkmH5cmUPqB5SwQW19eEs7fhCaHB+SDSnlg+npAVPQBgxaUdS3wFG+URh8IgFwsAIzCjUSFFKESV15UgKEmxAnMPnjtHjhRg0IH5AhQ7kOWA/HxAAWio49QfUhBOUUUYMSRpv4z0AccAKYpR2JzXyOdHHUQmyBAgAEAk3kcgcc2r4IAAAAASUVORK5CYII=" /> Voice',
							"Login" : '<img class="today-msg-icon" src="../img/login-icon.png" /> Login'
						}[this.value]; 
					},
					style: {
						color: '#06567A',
						fontSize: '12px'
					}
				}
			},
			yAxis: {
				title: {text: ''},
				//tickInterval: 10,
				gridLineColor: '#06567A',
				labels: {
					x:-5,
					style: {
						color: '#06567A',
						fontSize: '11px'
					}
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
		});
	}	
}

function drawTodayReminder(){
    $('#today-patient-reminder').highcharts({
        chart: {
            type: 'column'
        },
		colors: ['#06577A', '#00A7E5', '#E6ED64'],
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Today']
        },
        yAxis: {
			labels: { enabled:false },
            min: 0,
            title: '',
            stackLabels: { enabled: false }
        },
        legend: {
           enabled:false
        },
        tooltip: {
            formatter: function () {
                return "<b>"+this.y+"</b>";
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'Confirmed',
            data: [50]
        },{
            name: 'Not Confirmed',
            data: [30]
        },{
            name: 'Not Reminded',
            data: [10]
        }],
		exporting: {
			enabled: false
		},
		 credits: {
			enabled: false
		}
    });
}

function drawTodayMsg(data){
	if (!(data.email) || !(data.text) || !(data.phone)){
		dataUnavailable($('.ortho-sesame .banner-col:nth-child(2)'), "Appt. Reminders Sent by Type (yesterday)");
		
	}else{
		var numEmail = parseNumAr(parseArray(data.email));
		var numText = parseNumAr(parseArray(data.text));
		var numPhone = parseNumAr(parseArray(data.phone));
		
		var msgAr = [numEmail, numText, numPhone];
		
		$('#today-msg-bars').highcharts({
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
							fontSize: '12px'
						}
				}
			},
			yAxis: {
				title: {text: ''},
				//tickInterval: 10,
				gridLineColor: '#06567A',
				labels: {
					x:-5,
					style: {
						color: '#06567A',
						fontSize: '11px'
					}
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
		});
	}	
}

function drawApptBars(data){
	if (!(data.days) || !(data.totalAppt) || !(data.confirmedAppt) || !(data.noShow)){
		dataUnavailable($(".ortho-sesame .banner-col:nth-child(1)"), "Daily Appointments (last 7 days)")
	
	}else{
		var dayAr = capitalizeFirstLetter(parseArray(data.days));
		var totalApptAr = parseNumAr(parseArray(data.totalAppt));
		var confirmedApptAr = parseNumAr(parseArray(data.confirmedAppt));
		var noShowAr = parseNumAr(parseArray(data.noShow));
		
		$('#appt-bars').highcharts({
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
						x:-5,
						color: '#06567A',
						fontSize: '12px'
					}
				}
			},
			yAxis: {
				title: {text: ''},
				//tickInterval: 10,
				gridLineColor: '#06567A',
				labels: {
					x:-5,
					style: {
						color: '#06567A',
						fontSize: '11px'
					}
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
		});
	}
}


function drawPatientRemider(data){
	if (!(data.reminderConfirm) || !(data.reminderNotConfirm) || !(data.notReminded) 
		|| !(data.reminderDate)) {
		
		dataUnavailable($('.ortho-sesame .banner-col:nth-child(4)'), "Patient Reminders (Past 30days)");
		
	} else {
		var reminderConfirmAr = parseNumAr(parseArray(data.reminderConfirm));
		var reminderNotConfirmAr = parseNumAr(parseArray(data.reminderNotConfirm));
		var notRemindedAr = parseNumAr(parseArray(data.notReminded));
		var dateAr = parseArray(data.reminderDate);
		
		var xAxisValues = [];
		$.each(dateAr, function(i, v){ 
			if(i%5==0) { 
				xAxisValues.push(moment(v, "YYYY-MM-DD").format("MM-DD")); 
			}else{
				xAxisValues.push('');
			}
		});
		
		//console.log(xAxisValues);
		
		$('#patient-reminder').highcharts({
			title: {
				text: ''
			},
			colors: [ "#06577a", "#00A7E5", "#E6ED64" ],
			legend: { 
				verticalAlign: 'top',
				x:-10,
				symbolWidth: 12,
				symbolHeight: 12,
				itemStyle: { 
					color: "#06567A", 
					fontSize: "12px",
					fontWeight: "bold",
					fontFamily: "\"Trebuchet MS\", arial, helvetica, sans-serif;"  
				}
			}, 
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: xAxisValues,
				tickInterval:5,
				labels: {
					style: {
						color: '#06567A',
						fontSize: '11px'
					}
				}
			},
			yAxis: {
				min: 0,
				title: '',
				gridLineColor: '#06567A',
				labels: {
					x:-5,
					style: {
						color: '#06567A',
						fontSize: '11px'
					}
				}
			},
			series: [{
			    name: 'Confirmed',
				data: reminderConfirmAr,
				marker: { 
					// enabled: false
					fillColor: '#06577a', radius:2.5
				},
				tooltip: {		
					headerFormat: '<table>',
					pointFormat: '<tr><td style="font-size:10px;"><b>{point.y}</b></td></tr>',
					footerFormat: '</table>',
					useHTML: true
				}
			}, {
				name: 'Not Confirmed',
				data: reminderNotConfirmAr,
				marker: { 
					//enabled: false
					fillColor: '#00A7E5', radius:3 
				},
				tooltip: {		
					headerFormat: '<table>',
					pointFormat: '<tr><td style="font-size:10px;"><b>{point.y}</b></td></tr>',
					footerFormat: '</table>',
					useHTML: true
				}
			}, {
				name: 'Not Reminded',
				data: notRemindedAr,
				marker: { 
					//enabled:false
					fillColor: '#E6ED64', radius:2.5 
				},
				tooltip: {		
					headerFormat: '<table>',
					pointFormat: '<tr><td style="font-size:10px;"><b>{point.y}</b></td></tr>',
					footerFormat: '</table>',
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
