Highcharts.chart('container', {

    title: {
        text: '102~112年規律運動比例',
        align: 'left'
    },

    subtitle: {
        text: 'By <a href="https://data.gov.tw/dataset/24375?utm_source=chatgpt.com" target="_blank">政府資料開放平台</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '比例(%)'
        }
    },

    xAxis: {
        title: {
            text: '年份'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 102
        }
    },

    series: [{
        name: '台中',
        data: [
            24.68,27.96,30.83,34.34,34.2,33.1,31.4,33.5,32.3,32.5,32.6
        ]
    }, {
        name: '台北',
        data: [
            24.56,28.71,25.5,35.82,34.6,37.2,38,37,37.7,37.4,39.2
        ]
    }, {
        name: '台東',
        data: [
            26.62,30.52,26.9,36.21,35.3,36.5,36.3,33.6,37.5,38.1,38.5
        ]
    },{
        name: '台南',
        data: [    
            24.47,25.7,26.39,32.36,32.9,32,30.3,30.4,32.3,32.7,34
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});