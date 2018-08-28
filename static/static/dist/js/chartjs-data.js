/*Chartjs Init*/

$( document ).ready(function() {
    "use strict";

    if( $('#chart_1').length > 0 ){
        var ctx1 = document.getElementById("chart_1").getContext("2d");
        var data1 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "fir",
                    backgroundColor: "#ff936d",
                    borderColor: "#ff936d",
                    pointBorderColor: "#ff936d",
                    pointHighlightStroke: "#ff936d",
                    data: [0, 59, 80, 58, 20, 55, 40]
                },
                {
                    label: "sec",
                    backgroundColor: "#ff6028",
                    borderColor: "#ff6028",
                    pointBorderColor: "#ff6028",
                    pointBackgroundColor: "#ff6028",
                    data: [28, 48, 40, 19, 86, 27, 90],
                }

            ]
        };

        var areaChart = new Chart(ctx1, {
            type:"line",
            data:data1,

            options: {
                tooltips: {
                    mode:"label"
                },
                elements:{
                    point: {
                        hitRadius:90
                    }
                },

                scales: {
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: "rgba(33,33,33,0)",
                        },
                        ticks: {
                            fontFamily: "Roboto",
                            fontColor:"#878787"
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            color: "rgba(33,33,33,0)",
                        },
                        ticks: {
                            fontFamily: "Roboto",
                            fontColor:"#878787"
                        }
                    }]
                },
                animation: {
                    duration:	3000
                },
                responsive: true,
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                }

            }
        });
    }

    // if( $('#chart_2').length > 0 ){
    //     var ctx2 = document.getElementById("chart_2").getContext("2d");
    //     var data= [
    //         {name:'강남구', num:[652,10,0,14,507,102,454,158,5,127,24,1756,29,30,61,512,6,83,18,148.54,0.09,5,0.69,63.29,70.57,13.91,4.44,72.35,49.02,405.95,0,6,19,140,176]},
    //         {name:'강동구', num:[643,22,2,8,109,77,223,109,6,103,25,1123,22,21,35,277,3,38,82,101.27,0.09,4,0.32,39.53,56.96,4.37,3.57,77,19.43,615.19,0,3,6,193,158]},
    //         {name:'강북구', num:[609,15,3,9,196,45,115,179,3,70,30,733,17,11,22,164,7,65,33,130.38,0.21,7,0.15,37.38,84.9,7.73,3.48,77.8,25.67,504.93,0,0,9,166,210]},
    //         {name:'강서구', num:[628,30,0,10,296,71,235,161,5,120,32,627,36,40,30,486,10,108,111,92.71,0.15,9,0.17,32.81,53.77,5.81,5.21,74.6,14.61,689.22,0,3,9,273,240]},
    //         {name:'관악구', num:[668,9,2,9,303,65,135,158,7,72,65,110,18,26,33,235,16,56,59,113.66,0.12,6,0.24,41.57,63.85,7.89,3.21,73.2,35.59,607.74,0,2,14,170,209]},
    //         {name:'광진구', num:[633,14,0,9,101,78,262,103,2,63,14,906,25,13,30,160,3,71,17,152.49,0.11,4,0.31,73.85,67.02,11.2,4.39,74.1,17.24,529.99,0,0,29,155,153]},
    //         {name:'가로구', num:[665,25,10,8,125,61,169,134,4,95,21,1205,29,22,61,321,6,63,28,131.89,0.22,9,0.24,45.96,75.85,9.63,5.7,73.4,38.82,579.13,0,1,3,157,194]},
    //         {name:'금천구', num:[524,18,1,5,129,49,139,90,3,57,30,483,17,12,33,141,3,41,13,157.44,0.25,6,0.3,53.83,93.17,9.9,4.36,77.1,48.39,415.14,0,0,7,146,66]},
    //         {name:'노원구', num:[789,13,3,8,70,112,152,35,5,79,37,1345,43,41,27,595,2,76,154,81.06,0.09,5,0.11,32.82,44.35,3.7,3.26,79.4,23.59,723.03,0,6,14,227,337]},
    //         {name:'도봉구', num:[592,19,7,8,78,68,139,33,5,67,23,614,24,21,44,247,2,55,179,71.71,0.09,3,0.17,24.87,41.35,5.23,3.46,76.8,13.93,640.11,0,6,21,126,107]},
    //         {name:'동대문구', num:[617,17,4,11,163,59,226,195,3,101,23,626,20,18,24,258,7,42,22,136.28,0.14,5,0.28,54.69,74.41,6.76,3.49,76.9,26.84,450.02,1,1,5,126,76]},
    //         {name:'동작구', num:[576,28,9,7,93,56,142,52,1,90,11,563,19,20,42,241,7,64,143,82.99,0.2,8,0.15,30.65,41.45,10.55,3.59,77.1,28.75,616.92,1,3,6,107,65]},
    //         {name:'마포구', num:[457,7,0,8,133,54,104,95,3,79,14,650,27,21,46,308,7,37,11,161.99,0.11,4,0.11,66.49,77.36,17.93,5.31,74.4,24.43,460.48,0,0,13,156,164]},
    //         {name:'서대문구', num:[528,3,2,8,82,38,86,96,0,81,14,551,20,13,29,222,5,22,50,118.3,0.19,6,0.16,47.87,62.92,7.16,4.21,76.1,31.95,480.42,0,4,5,142,103]},
    //         {name:'서초구', num:[530,3,0,11,180,50,215,71,1,108,7,671,20,18,47,397,2,85,53,115.54,0.11,5,0.29,49.4,52.33,13.42,4.27,75.35,42.44,432.49,0,1,7,71,75]},
    //         {name:'성동구', num:[425,4,0,9,44,55,78,58,2,121,18,925,25,16,38,309,3,51,76,104.52,0.13,4,0.1,43.51,54.17,6.62,4.13,76.3,41.84,469.06,0,0,11,105,73]},
    //         {name:'성북구', num:[662,21,14,10,33,100,88,65,3,81,21,916,31,43,50,314,12,95,137,84.58,0.09,4,0.18,32.73,46.85,4.73,4.7,78.65,37.9,477.58,0,6,11,128,139]},
    //         {name:'송파구', num:[767,30,2,10,261,91,177,103,2,156,20,895,35,33,50,467,13,35,101,93.75,0.14,9,0.23,38.67,50.01,4.7,4,70.5,12.13,657.83,0,6,8,196,165]},
    //         {name:'양천구', num:[671,22,2,8,79,106,168,26,6,94,31,872,31,32,33,439,12,69,127,87.31,0.1,5,0.15,36.07,47.16,3.83,4.54,73.6,42.18,637.84,0,0,8,169,144]},
    //         {name:'영등포구', num:[610,25,0,10,267,72,189,89,5,114,39,806,25,25,62,282,6,75,10,173.93,0.35,13,0.51,63.3,96.95,12.82,4.55,74.5,29.49,392.6,0,0,6,119,118]},
    //         {name:'용산구', num:[242,6,0,8,89,37,33,67,0,67,22,527,18,13,36,139,5,35,8,182.33,0.17,4,0.39,64.8,103.5,13.46,4.28,76.2,80.13,336.12,0,4,4,56,70]},
    //         {name:'은평구', num:[772,30,7,9,217,75,161,86,4,83,28,857,29,30,49,277,6,47,105,93.23,0.12,6,0.18,33.94,54.2,4.78,4.25,75.8,36.18,555.34,0,0,12,219,252]},
    //         {name:'종로구', num:[323,3,4,20,254,45,86,200,0,100,21,1462,18,12,43,64,0,22,4,296.59,0.39,6,0.79,127.28,148.29,19.84,3.36,77.9,62.92,136.37,0,5,6,72,86]},
    //         {name:'중구', num:[216,9,0,15,141,34,16,125,2,123,11,313,11,12,25,96,2,28,2,377.73,0.24,3,0.64,171.82,177.65,27.39,3.48,77.4,53.33,125.37,0,0,1,87,46]},
    //         {name:'중랑구', num:[771,23,3,8,128,47,153,120,6,65,44,787,21,20,42,259,4,64,43,123.48,0.19,8,0.34,41.19,77.01,4.74,4.8,77.7,21.58,558.43,1,0,9,179,193]}
    //     ]
    //     var temp_name = document.getElementById('temp').className;
    //     console.log(temp_name);
    //     var temp_num;
    //     for(var i=0; i<data.length; i++){
    //         if(temp_name===data[i]['name']){
    //             temp_num=data[i]['num'];
    //         }
    //     }
    //
    //     var data2 = {
    //         labels: ['교통사고','어린이보행자사고','스쿨존내교통사고','경찰서','유흥업소','보호구역','당구장','숙박업소','아동성범죄자','공사진행현황','일반성범죄자','CCTV','초등학교','유치원','어린이집','어린이 놀이시설','아동복지시설','아동안전지킴이집','순위','만명당 5대범죄','만명당 살인','살인 건수','만명당 강도','만명당 절도','만명당 폭력','만명당 성폭력','경찰출동시간(분)','치안 만족도','1만명당 CCTV','1인당 담당인구','청소년 살인','청소년 강도','청소년 성폭력','청소년 절도','청소년 폭력'],
    //         datasets: [
    //             {
    //                 label: temp_name,
    //                 backgroundColor: "#ff6028",
    //                 borderColor: "#ff6028",
    //                 data: temp_num
    //             }
    //         ]
    //     };
    //
    //     var hBar = new Chart(ctx2, {
    //         type:"horizontalBar",
    //         data:data2,
    //
    //         options: {
    //             tooltips: {
    //                 mode:"label"
    //             },
    //             scales: {
    //                 yAxes: [{
    //                     stacked: true,
    //                     gridLines: {
    //                         color: "rgba(33,33,33,0)",
    //                     },
    //                     ticks: {
    //                         fontFamily: "Roboto",
    //                         fontColor:"#878787"
    //                     }
    //                 }],
    //                 xAxes: [{
    //                     stacked: true,
    //                     gridLines: {
    //                         color: "rgba(33,33,33,0)",
    //                     },
    //                     ticks: {
    //                         fontFamily: "Roboto",
    //                         fontColor:"#878787"
    //                     }
    //                 }],
    //
    //             },
    //             elements:{
    //                 point: {
    //                     hitRadius:40
    //                 }
    //             },
    //             animation: {
    //                 duration:	3000
    //             },
    //             responsive: true,
    //             legend: {
    //                 display: false,
    //             },
    //             tooltip: {
    //                 backgroundColor:'rgba(33,33,33,1)',
    //                 cornerRadius:0,
    //                 footerFontFamily:"'Roboto'"
    //             }
    //
    //         }
    //     });
    // }

    if( $('#chart_3').length > 0 ){
        var ctx3 = document.getElementById("chart_3").getContext("2d");
        var data3 = {
            labels: ["으", "아", "으아", "으아악", "으아아악", "으엑", "으갸갸갸갸걐"],
            datasets: [
                {
                    label: "야임마dfgh",
                    backgroundColor: "#ff936d",
                    borderColor: "#ff936d",
                    pointBackgroundColor: "#ff936d",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#ff936d",
                    data: [100, 100, 100, 100, 100, 50, 100]
                },
                {
                    label: "왜임마",
                    backgroundColor: "#ff6028",
                    borderColor: "#ff6028",
                    pointBackgroundColor: "#ff6028",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#ff6028",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        var radarChart = new Chart(ctx3, {
            type: "radar",
            data: data3,
            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Roboto",

                    },
                    gridLines: {
                        color: "rgba(33,33,33,0)",
                    },
                    pointLabels:{
                        fontFamily: "Roboto",
                        fontColor:"#878787"
                    },
                },

                animation: {
                    duration:	3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Roboto",
                        fontColor:"#878787"
                    }
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                }
            }
        });
    }

    if( $('#chart_4').length > 0 ){
        var ctx4 = document.getElementById("chart_4").getContext("2d");
        var data4 = {
            datasets: [{
                data: [
                    10,
                    20,
                    30
                ],
                backgroundColor: [
                    "#ff00ff",
                    "#ff6028",
                    "#ffaf93",
                ],
                hoverBackgroundColor: [
                    "#ff00ff",
                    "#ff6028",
                    "#ffaf93",
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "lab 1",
                "lab 2",
                "lab 3",
            ]
        };
        var polarChart = new Chart(ctx4, {
            type: "polarArea",
            data: data4,
            options: {
                elements: {
                    arc: {
                        borderColor: "#fff",
                        borderWidth: 0
                    }
                },
                scale: {
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Roboto",

                    },
                    gridLines: {
                        color: "rgba(33,33,33,0)",
                    }
                },
                animation: {
                    duration:	3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Roboto",
                        fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                }
            }
        });
    }

    if( $('#chart_5').length > 0 ){
        var ctx5 = document.getElementById("chart_5").getContext("2d");
        var data5 = {
            datasets: [
                {
                    label: 'First Dataset',
                    data: [
                        {
                            x: 80,
                            y: 60,
                            r: 10
                        },
                        {
                            x: 40,
                            y: 40,
                            r: 10
                        },
                        {
                            x: 30,
                            y: 40,
                            r: 20
                        },
                        {
                            x: 20,
                            y: 10,
                            r: 10
                        },
                        {
                            x: 50,
                            y: 30,
                            r: 10
                        }
                    ],
                    backgroundColor:'#ff6028',
                    hoverBackgroundColor: '#ff6028',
                },
                {
                    label: 'Second Dataset',
                    data: [
                        {
                            x: 40,
                            y: 30,
                            r: 10
                        },
                        {
                            x: 25,
                            y: 20,
                            r: 10
                        },
                        {
                            x: 35,
                            y: 30,
                            r: 10
                        }
                    ],
                    backgroundColor:"#ff936d",
                    hoverBackgroundColor: "#ff936d",
                }]
        };

        var bubbleChart = new Chart(ctx5,{
            type:"bubble",
            data:data5,
            options: {
                elements: {
                    points: {
                        borderWidth: 1,
                        borderColor: 'rgb(33, 33, 33)'
                    }
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                min: -10,
                                max: 100,
                                fontFamily: "Roboto",
                                fontColor:"#878787"
                            },
                            gridLines: {
                                color: "rgba(33,33,33,0)",
                            }
                        }],
                    yAxes: [
                        {
                            ticks: {
                                fontFamily: "Roboto",
                                fontColor:"#878787"
                            },
                            gridLines: {
                                color: "rgba(33,33,33,0)",
                            }
                        }]
                },
                animation: {
                    duration:	3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Roboto",
                        fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                }
            }
        });
    }

    if( $('#chart_6').length > 0 ){
        var ctx6 = document.getElementById("chart_6").getContext("2d");
        var data6 = {
            labels: [
                "lab 3",
                "lab 5",
                "lab 1",
                "lab 7"
            ],
            datasets: [
                {
                    data: [100, 550, 50, 300],
                    backgroundColor: [
                        "#ff936d",
                        "#ff6028",
                        "#ffaf93",
                        "#ffaf97"
                    ],
                    hoverBackgroundColor: [
                        "#ff936d",
                        "#ff6028",
                        "#ffaf93",
                        "#ffaf93"
                    ]
                }]
        };

        var pieChart  = new Chart(ctx6,{
            type: 'pie',
            data: data6,
            options: {
                animation: {
                    duration:	3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Roboto",
                        fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }

    if( $('#chart_7').length > 0 ){
        var ctx7 = document.getElementById("chart_7").getContext("2d");
        var data7 = {
            labels: [
                "lab 1",
                "lab 2",
                "lab 3"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#ff936d",
                        "#ff6028",
                        "#ffaf93"
                    ],
                    hoverBackgroundColor: [
                        "#ff936d",
                        "#ff6028",
                        "#ffaf93"
                    ]
                }]
        };

        var doughnutChart = new Chart(ctx7, {
            type: 'doughnut',
            data: data7,
            options: {
                animation: {
                    duration:	3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Roboto",
                        fontColor:"#878787"
                    }
                },
                tooltip: {
                    backgroundColor:'rgba(33,33,33,1)',
                    cornerRadius:0,
                    footerFontFamily:"'Roboto'"
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }
});