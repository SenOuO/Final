const data = [
    {
        id: '0.0',
        parent: '',
        name: '肌群訓練'
    },
    {
        id: '1.1',
        parent: '0.0',
        name: '臀部肌群'
    },
    {
        id: '1.2',
        parent: '0.0',
        name: '腹肌群'
    },
    {
        id: '1.3',
        parent: '0.0',
        name: '腿部肌群'
    },
    {
        id: '1.4',
        parent: '0.0',
        name: '手部肌群'
    },
    {
        id: '1.5',
        parent: '0.0',
        name: '肩膀肌群'
    },
    {
        id: '1.6',
        parent: '0.0',
        name: '背肌群'
    },
    {
        id: '1.7',
        parent: '0.0',
        name: '胸肌群'
    }
];

Highcharts.chart('container', {
    title: {
        text: '各肌群'
    },
    series: [
        {
            type: 'treegraph',
            data,
            tooltip: {
                pointFormat: '{point.name}'
            },
            marker: {
                symbol: 'rect',
                width: '25%'
            },
            borderRadius: 10,
            dataLabels: {
                pointFormat: '{point.name}',
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            levels: [
                {
                    level: 1,
                    levelIsConstant: true
                },
                {
                    level: 2,
                    colorByPoint: true
                },
                {
                    level: 3,
                    colorVariation: {
                        key: 'brightness',
                        to: -0.5
                    }
                },
                {
                    level: 4,
                    colorVariation: {
                        key: 'brightness',
                        to: 0.5
                    }
                }
            ]
        }
    ]
});
