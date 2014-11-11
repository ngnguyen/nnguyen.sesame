"use strict";

var fakeLandingDataUrl = "https://s3.amazonaws.com/sesame-test-content/global_images/product_tiles/data-landing.json?callback=?"

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
				color: "#06577A",
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
				color: "#06577A",
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
        }
    }
}

// accept name of an html element, content of a table, class name of the given table.
// Generate html of a table with the give class name. Append this table to the given
// html element
// NOTE: "tag" needs to be a jquery element
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

function irregularIntervalChart(){
	return {
        chart: {
            //type: 'spline'
        },
		title:{
			align:'left',
			x:0,
			y:45,
			style: {
				color: "#06577A",
				fontSize: "20px",
				fontWeight: "bold"
			}
		},
        xAxis: {
            type: 'datetime',
			tickInterval: 15*24*3600 * 1000,
            pointStart: Date.UTC(2014, 7, 26),
			startOnTick:true,
            dateTimeLabelFormats: { // don't display the dummy year  
				month: '%b %e',
                year: '%b'
            }
        },
        yAxis: {
            min: 0,
			title: {text:null}
        },
		legend: {
			//align: 'right',
			verticalAlign: 'top',
			y: 30,
			x:190,
			itemDistance: 50,
			itemMarginBottom:5,
			symbolWidth:15,
			symbolHeight:15,
			symbolPadding:15,
			itemStyle:{ color: '#065679' }
		},
		credits: { enabled: false },
		exporting: { enabled: false },
        series: [{
			name: 'New Visits',
            data: [
                [Date.UTC(2014, 7, 26), 50],
                [Date.UTC(2014, 7, 27), 60],
                [Date.UTC(2014, 7, 28), 65],
                [Date.UTC(2014, 7, 29), 70],
                [Date.UTC(2014, 7, 30), 20],
                [Date.UTC(2014, 7, 31), 10],
                [Date.UTC(2014, 8, 1), 75],
                [Date.UTC(2014, 8, 2), 80],
                [Date.UTC(2014, 8, 3), 85],
                [Date.UTC(2014, 8, 4), 77],
                [Date.UTC(2014, 8, 5), 70],
                [Date.UTC(2014, 8, 6), 20],
                [Date.UTC(2014, 8, 7), 17],
                [Date.UTC(2014, 8, 8), 80],
                [Date.UTC(2014, 8, 9), 75],
                [Date.UTC(2014, 8, 10), 73],
                [Date.UTC(2014, 8, 11), 78],
                [Date.UTC(2014, 8, 12), 82],
                [Date.UTC(2014, 8, 13), 15],
                [Date.UTC(2014, 8, 14), 18],
                [Date.UTC(2014, 8, 15), 65],
                [Date.UTC(2014, 8, 16), 70],
                [Date.UTC(2014, 8, 17), 67],
                [Date.UTC(2014, 8, 18), 73],
                [Date.UTC(2014, 8, 19), 80],
                [Date.UTC(2014, 8, 20), 17],
                [Date.UTC(2014, 8, 21), 22],
                [Date.UTC(2014, 8, 22), 65],
                [Date.UTC(2014, 8, 23), 63],
                [Date.UTC(2014, 8, 24), 68],
                [Date.UTC(2014, 8, 25), 65],
                [Date.UTC(2014, 8, 26), 70]
            ]
        }, {
			name: 'Total Visits',
            data: [
                [Date.UTC(2014, 7, 26), 75],
                [Date.UTC(2014, 7, 27), 78],
                [Date.UTC(2014, 7, 28), 80],
                [Date.UTC(2014, 7, 29), 85],
                [Date.UTC(2014, 7, 30), 35],
                [Date.UTC(2014, 7, 31), 30],
                [Date.UTC(2014, 8, 1), 90],
                [Date.UTC(2014, 8, 2), 95],
                [Date.UTC(2014, 8, 3), 95],
                [Date.UTC(2014, 8, 4), 97],
                [Date.UTC(2014, 8, 5), 93],
                [Date.UTC(2014, 8, 6), 30],
                [Date.UTC(2014, 8, 7), 25],
                [Date.UTC(2014, 8, 8), 90],
                [Date.UTC(2014, 8, 9), 95],
                [Date.UTC(2014, 8, 10), 93],
                [Date.UTC(2014, 8, 11), 99],
                [Date.UTC(2014, 8, 12), 95],
                [Date.UTC(2014, 8, 13), 35],
                [Date.UTC(2014, 8, 14), 30],
                [Date.UTC(2014, 8, 15), 95],
                [Date.UTC(2014, 8, 16), 94],
                [Date.UTC(2014, 8, 17), 92],
                [Date.UTC(2014, 8, 18), 95],
                [Date.UTC(2014, 8, 19), 100],
                [Date.UTC(2014, 8, 20), 30],
                [Date.UTC(2014, 8, 21), 33],
                [Date.UTC(2014, 8, 22), 95],
                [Date.UTC(2014, 8, 23), 91],
                [Date.UTC(2014, 8, 24), 90],
                [Date.UTC(2014, 8, 25), 94],
                [Date.UTC(2014, 8, 26), 95]
            ]
        }]
    };
}

function columnChart(){
	return {
		chart: {
			type: 'column'
		},
		title: {
			text: '',
			style: {
				color: '#06567A',
				fontSize: '12px',
				fontWeight: 'bold'
			}
		},
		colors: ['#06577A', '#00A7E5'],
		legend: {
			verticalAlign: 'top',
			symbolWidth: 12,
			symbolHeight: 12,
			y: 20,
			itemDistance:60,
			itemStyle: { 
				color: "#06567A", 
				fontSize: "12px",
				fontWeight: "bold",
				fontFamily: "\"Trebuchet MS\", arial, helvetica, sans-serif;"  
			}
		},
		xAxis: {
			categories: [],
			labels: {
				style: {
					color: '#06567A',
					fontSize: '13px'
				}
			}
		},
		yAxis: {
			title: '',
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
		series: [],
		exporting: {enabled: false},
		credits: {enabled: false}
	};
}