//Chart.plugins.unregister(ChartDataLabels);

// =========================================
// beginning of bar chart for word-count
// =========================================

var ctx = document.getElementById('word-count');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      ['Robert', ' Jordan'],
      ['Steven', ' Erikson'],
      ['George', ' R. R. Martin'],
      ['Brandon', 'Sanderson'],
      ['Stephen', 'King'],
      ['J. K.', 'Rowling'],
      ['Tad', 'Williams'],
      ['Stephen', 'R. Lawhead'],
      ['Patrick', 'Rothfuss'],
      ['J. R. R.', 'Tolkien'],
      ['Christopher', 'Paolini'],
      ['Joe', 'Abercrombie'],
      ['David', 'Eddings'],
      ['Scott', 'Bakker'],
      ['Gene', 'Wolfe'],
      ['Guy', 'Gavriel Kay'],
      ['Garth', 'Nix'],
      ['C. S.', 'Lewis'],
      ['Ursula', 'K Le Guin'],
      ['Fred', 'Saberhagen']
    ],
    datasets: [{
      datalabels: {
        display: false
      },
      label: 'Number of words',
      data: [4074024, 3263937, 1745214, 1384299, 1342947,
        1104023, 1073825, 936893, 653713, 636241, 629820,
        619176, 528051, 510086, 388113, 373211, 330083,
        319105, 242246, 173849
      ],

      backgroundColor: [
        'rgba(41,115,115, 1)',
        'rgba(133,255,199, 1)',
        'rgba(138,234,146, 1)',
        'rgba(177,204,116, 1)',
        'rgba(93,193,166, 1)',
        'rgba(120,188,170, 1)',
        'rgba(12,79,61, 1)',
        'rgba(77,165,142, 1)',
        'rgba(111,237,203, 1)',
        'rgb(40,224,175, 1)',
        'rgba(27,186,144, 1)',
        'rgba(4,104,77, 1)',
        'rgba(1,142,105, 1)',
        'rgba(25,99,79, 1)',
        'rgba(6,76,57, 1)',
        'rgba(24,124,98, 1)',
        'rgba(15,255,191, 1)',
        'rgba(34,165,130, 1)',
        'rgba(0,206,151, 1)',
        'rgba(102,255,214, 1)',
      ],
      borderColor: [
        'rgba(41,115,115, 1)',
        'rgba(133,255,199, 1)',
        'rgba(138,234,146, 1)',
        'rgba(177,204,116, 1)',
        'rgba(93,193,166, 1)',
        'rgba(120,188,170, 1)',
        'rgba(12,79,61, 1)',
        'rgba(77,165,142, 1)',
        'rgba(111,237,203, 1)',
        'rgb(40,224,175, 1)',
        'rgba(27,186,144, 1)',
        'rgba(4,104,77, 1)',
        'rgba(1,142,105, 1)',
        'rgba(25,99,79, 1)',
        'rgba(6,76,57, 1)',
        'rgba(24,124,98, 1)',
        'rgba(15,255,191, 1)',
        'rgba(34,165,130, 1)',
        'rgba(0,206,151, 1)',
        'rgba(102,255,214, 1)',
      ],
      borderWidth: 2
    }]
  },
  options: [{
    plugins: {
      colorschemes: {
        scheme: 'office.VioletII6'
      }
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }]
});

// ==================================================================
// beginning of line chart for word count and average book word count
// ==================================================================

new Chart(document.getElementById("book-size"), {
  type: "line",
  data: {
    labels: [
      ['Robert', ' Jordan'],
      ['Steven', ' Erikson'],
      ['George', ' R. R. Martin'],
      ['Brandon', 'Sanderson'],
      ['Stephen', 'King'],
      ['J. K.', 'Rowling'],
      ['Tad', 'Williams'],
      ['Stephen', 'R. Lawhead'],
      ['Patrick', 'Rothfuss'],
      ['J. R. R.', 'Tolkien'],
      ['Christopher', 'Paolini'],
      ['Joe', 'Abercrombie'],
      ['David', 'Eddings'],
      ['Scott', 'Bakker'],
      ['Gene', 'Wolfe'],
      ['Guy', 'Gavriel Kay'],
      ['Garth', 'Nix'],
      ['C. S.', 'Lewis'],
      ['Ursula', 'K Le Guin'],
      ['Fred', 'Saberhagen']
    ],
    datasets: [{
        datalabels: {
          display: false
        },
        label: "Average words per book",
        data: [291002, 326394, 394043, 276860, 167868, 157718, 268456, 156149, 326857, 127248, 209940, 206392,
          105610, 170029, 194057, 124404, 110028, 45586, 60562, 57950
        ],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        lineTension: 0.4,
        yAxisID: 'perbook'
      },
      {
        datalabels: {
          display: false
        },
        label: "Total number of words",
        data: [4074024, 3263937, 1745214, 1384299, 1342947,
          1104023, 1073825, 936893, 653713, 636241, 629820,
          619176, 528051, 510086, 388113, 373211, 330083,
          319105, 242246, 173849
        ],
        fill: false,
        borderColor: "rgb(255,127,80)",
        lineTension: 0.4,
        yAxisID: 'total'
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        id: 'perbook',
        type: 'linear',
        position: 'left'
      }, {
        id: 'total',
        type: 'linear',
        position: 'right'
      }]
    }
  }
});

var COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];



// ==================================================================
// beginning of donut chart for total names mentioned by series
// ==================================================================


new Chart(document.getElementById("seriesbar"), {
  type: "doughnut",
  data: {
    labels: ["Wheel of Time", "Harry potter", "Dark Tower", "Mistborn", "Inheritance", "Memory, Sorrow, Thorn", "Belgariad", "Pendragon Cycle"],
    datasets: [{
      datalabels: {
        display: false
      },
      label: "My First Dataset",
      data: [44374, 24662, 19281, 7856, 6668, 6033, 4045, 3798],
      backgroundColor: [
        'rgb(255,247,188)',
        'rgb(255,237,160)',
        'rgb(254,217,118)',
        'rgb(254,178,76)',
        'rgb(253,141,60)',
        'rgb(252,78,42)',
        'rgb(227,26,28)',
        'rgb(177,0,38)'
      ]
    }]
  },
});


// ==================================================================
// beginning of bar chart for name count
// ==================================================================


new Chart(document.getElementById("namesbar"), {
  type: "bar",
  data: {
    labels: ["Harry", "Rand", "Egwene", "Perrin", "Roland", "Elayne", "Eragon", "Nynaeve", "Simon", "Eddie", "Hermione", "Elend", "Garion", "Jake", "Arthur", "Moiraine", "Dumbledore", "Susannah", "Kelsier"],
    datasets: [{
      datalabels: {
        display: false
      },
      label: "Name frequency",
      data: [16787, 12579, 7878, 7134, 6973, 6866, 6668, 6319, 6033, 5686, 4985, 4457, 4045, 3889, 3798, 3589, 2890, 2733, 3399],
      fill: false,

      //hp="rgba(255, 99, 132, 0.2)", wot="rgba(255, 159, 64, 0.2)", dt="rgba(255, 205, 86, 0.2)", mistborn="rgba(75, 192, 192, 0.2)", intce"rgba(54, 162, 235, 0.2)", mem="rgba(153, 102, 255, 0.2)", belg="rgba(201, 203, 207, 0.2)", pend='rgba(3, 206, 164)', 'rgba(76, 170, 120)'
      backgroundColor: [
        'rgb(255,237,160)',
        'rgb(255,247,188)',
        'rgb(255,247,188)',
        'rgb(255,247,188)',
        'rgb(254,217,118)',
        'rgb(255,247,188)',
        'rgb(254,178,76)',
        'rgb(255,247,188)',
        'rgb(253,141,60)',
        'rgb(254,217,118)',
        'rgb(255,237,160)',
        'rgb(252,78,42)',
        'rgb(227,26,28)',
        'rgb(254,217,118)',
        'rgb(177,0,38)',
        'rgb(255,247,188)',
        'rgb(255,237,160)',
        'rgb(254,217,118)',
        'rgb(252,78,42)',
      ]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// ==================================================================
// beginning of bar chart for six letter words
// ==================================================================

new Chart(document.getElementById("sixbar"), {
  type: "horizontalBar",
  data: {
    labels: ['moment', 'behind', 'enough', 'turned', 'little', 'though', 'around', 'seemed', 'looked', 'before'],
    datasets: [{
      label: "Six letter words",
      data: [16147, 16183, 17080, 18041, 18565, 18586, 20531, 21206, 25488, 31869],
      fill: false,
      backgroundColor: ['#D1C4E9',
'#B39DDB',
'#9575CD',
'#7C4DFF',
'#7E57C2',
'#673AB7',
'#5E35B1',
'#512DA8',
'#4527A0',
'#311B92'
]
    }]
  },
  options: {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        font: {
          weight: ''
        } } },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// ==================================================================
// beginning of bar chart for seven letter words
// ==================================================================

new Chart(document.getElementById("sevenbar"), {
  type: "horizontalBar",
  data: {
    labels: ['herself', 'between', 'looking', 'without', 'nothing', 'another', 'against', 'himself', 'thought', 'through'],
    datasets: [{
      label: "Seven letter words",
      data: [9037, 10478, 10628, 10734, 14600, 14934, 14941, 18451, 25427, 27717],
      fill: false,
      backgroundColor: ['#BBDEFB',
'#82B1FF',
'#90CAF9',
'#64B5F6',
'#42A5F5',
'#2196F3',
'#1E88E5',
'#1976D2',
'#1565C0',
'#0D47A1'
]
    }]
  },
  options: {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        font: {
          weight: ''
        } } },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// ==================================================================
// beginning of bar chart for eight letter words
// ==================================================================

new Chart(document.getElementById("eightbar"), {
  type: "horizontalBar",
  data: {
    labels: ['darkness', 'remember', 'happened', 'followed', 'standing', 'shoulder', 'soldiers', 'together', 'suddenly', 'anything'],
    datasets: [{
      label: "Eight letter words",
      data: [4713, 4753, 4822, 5110, 5290, 5456, 5694, 5821, 6520, 8886],
      fill: false,
      backgroundColor: [
'#FFCDD2',
'#EF9A9A',
'#FF8A80',
'#E57373',
'#EF5350',
'#F44336',
'#E53935',
'#D32F2F',
'#C62828',
'#B71C1C'
]
    }]
  },
  options: {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        font: {
          weight: ''
        } } },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// ==================================================================
// beginning of bar chart for nine letter words
// ==================================================================

new Chart(document.getElementById("ninebar"), {
  type: "horizontalBar",
  data: {
    labels: ['carefully', 'important', 'sometimes', 'surprised', 'attention', 'shoulders', 'whispered', 'different', 'continued', 'something'],
    datasets: [{
      label: "Nine letter words",
      data: [2425, 2643, 2730, 2766, 2801, 3639, 4152, 4259, 4303, 4303],
      fill: false,
      backgroundColor: [
        '#B2EBF2',
        '#84FFFF',
        '#80DEEA',
        '#4DD0E1',
        '#26C6DA',
        '#00BCD4',
        '#00ACC1',
        '#0097A7',
        '#00838F',
        '#006064',
]
    }]
  },
  options: {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        font: {
          weight: ''
        } } },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
