"use strict";

// make month picker and year picker
function makeMonthYrPicker(){
    var yrLimit = 5;
	
	var months = ["January", "February", "March", "April", 
		"May", "June", "July", "August", "September", "October", 
		"November", "December" 
	];
	
	var dt = new Date();
	var currentMonth = dt.getMonth();
	var currentYr = dt.getFullYear();
	
	$.each(months, function(i, v){
		var temp = (i==currentMonth) ? 'selected="selected"' : ''
			
		$(".month-picker").append('<option '+temp+'>'+months[i]+'</option>');
	});
	
	for (var i=0; i<yrLimit; i++){
		$(".yr-picker").append("<option>"+(currentYr-i)+"</option>");
	};
}

// 
function lineChart(){
	return {
		title: {
			text: '',
			style: {
				color: "#065679",
				fontSize: "15px",
				fontWeight: "bold"
			}
		},
		colors: [ "#06577a","#00a9e4", "#e7ec63" ],
		subtitle: {
			text: ''
		},
		legend: {
			//align: 'center',
			verticalAlign: 'top',
			y: 30,
			itemDistance: 100,
			itemMarginBottom:5,
			symbolWidth:15,
			symbolHeight:15,
			symbolPadding:15,
			itemStyle:{ color: '#065679' }
		},
		xAxis: {
			categories: ['Oct','Nov','Dec','Jan','Feb','Mar','Apr',
				'May','Jun','Jul','Aug','Sep'],
			labels: {
				style: {
					color: '#06577A',
					fontSize: '12px'
				}
			}
		},
		yAxis: {
			title: '',
			min:0,
			gridLineColor: '#06577A',
			labels: {
				style: {
					color: '#06567A',
					fontSize: '12px'
				}
			}
		},
		series: [],
		// exporting: {
			// enabled: false
		// },
		 credits: {
			enabled: false
		}
	};
}

function pieChart(){
	return {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: '',
			margin:0,
			style: {
				color: "06577A",
				fontSize: "15px",
				fontWeight: "bold"
			}
		},
		colors: [ "#06577a","#36b900", "#eba43d" ],
		tooltip: {
			pointFormat: '<b>{point.percentage:.2f} %</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
					// style: {
                        // fontWeight: 'bold',
                        // color: '#06577a',
                        // background: 'white',
						// fontSize: '14px'
                    // },
					// distance:-70,
					// format: "{point.percentage:.1f}%"
					
				},
				showInLegend: true,
			
			}
		},
		legend: {
			align: 'right',
			verticalAlign: 'middle',
			width:250,
			itemMarginTop:14,
			itemStyle: {
				color: '#06577a',
				fontSize: '16px'
			},
			symbolHeight:14,
			symbolWidth:14,
			symbolPadding:14
		},
		series: [{
			type: 'pie',
			//name: 'Browser share',
			data: [
				['Firefox',   45.0],
				['IE',       26.8],
				{
					name: 'Chrome',
					y: 12.8,
					sliced: true,
					selected: true
				},
				['Safari',    8.5],
				['Opera',     6.2],
				['Others',   0.7]
			]
		}],
		// exporting: {
			// enabled: false
		// },
		credits: {
			enabled: false
		}
	};
}

function barChart(){
	return {
        chart: {
            type: 'bar'
        },
        title: {
            text: '',
			style: {
				color: "06577A",
				fontSize: "15px",
				fontWeight: "bold"
			}
        },
        subtitle: {
            text: ''
        },
		colors: ["#36b900","#06577a"],
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: { text: null },
			labels: {
				style: {
					color: '#06577A',
					fontSize: '12px'
				}
			}
        },
        yAxis: {
            min: 0,
            title: {text: null},
            gridLineColor: '#06567A',
			labels: {
				style: {
					color: '#06577A',
					fontSize: '12px'
				}
			}
        },
        
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            align: 'center',
			verticalAlign: 'top',
			y:30,
			itemStyle: {
				color: '#06577a',
				fontSize: '14px'
			},
			itemDistance:200,
			symbolHeight:15,
			symbolWidth:15,
			symbolPadding:15 
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Year 2008',
            data: [973, 914, 4054, 732, 34]
        }]
    }
}

// accept name of an html element, content of a table, class name of the given table.
// Generate html of a table with the give class name. Append this table to the given
// html element
function drawTable(tag, tbContent, className){
	var temp = (typeof className != 'undefined') ? className : ''; 

	var tb = "<table class=\"num-col-3 "+temp+"\"><tr>";
	for (var i=0; i<tbContent.content[0].length ;i++){
		var h = (typeof tbContent.heading[i] != "undefined") ? tbContent.heading[i] : '';
		
		tb += "<th>"+ h +"</th>"
	}
	tb += "</tr>";
	
	$.each(tbContent.content, function(i, rowContent){
		var r='';
		for (var j=0; j<rowContent.length; j++){
			r += "<td>"+rowContent[j]+"</td>";
		}
		tb += "<tr>"+r+"</tr>";	
	});
	
	tag.append(tb+"</table>");
}

function Table(tag, tbContent, className){
	this.className = (typeof className != 'undefined') ? className : '';
	this.tag = tag;
	this.tbContent = tbContent;
}

Table.prototype = {
	constructor: Table,
	
	draw: function() {
		var tb = "<table class=\"num-col-3 "+this.className+"\"><tr>";
		for (var i=0; i<this.tbContent.content[0].length ;i++){
			var h = (typeof this.tbContent.heading[i] != "undefined") ? this.tbContent.heading[i] : '';
			
			tb += "<th>"+ h +"</th>"
		}
		tb += "</tr>";
		
		$.each(this.tbContent.content, function(i, rowContent){
			var r='';
			for (var j=0; j<rowContent.length; j++){
				r += "<td>"+rowContent[j]+"</td>";
			}
			tb += "<tr>"+r+"</tr>";	
		});
		
		this.tag.append(tb+"</table>");
	}
};