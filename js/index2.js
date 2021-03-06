var uploadedDataURL = "assets/data.json";
var myChart = echarts.init(document.getElementById('canvas-wrapper'));
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '台湾': [121.5135, 25.0308],
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891],

    };

    var data = [
        {name:"北京",value:-199},
        {name:"天津",value:-42},
        {name:"河北",value:-102},
        {name:"山西",value:-81},
        {name:"内蒙古",value:-47},
        {name:"辽宁",value:-67},
        {name:"吉林",value:-82},
        {name:"黑龙江",value:-123},
        {name:"上海",value:-24},
        {name:"江苏",value:92},
        {name:"浙江",value:114},
        // {name:"安徽",value:109},
        {name:"福建",value:116},
        {name:"江西",value:91},
        {name:"山东",value:119},
        {name:"河南",value:137},
        // {name:"湖北",value:116},
        {name:"湖南",value:114},
        {name:"重庆",value:91},
        {name:"四川",value:125},
        {name:"贵州",value:62},
        {name:"云南",value:0},
        {name:"西藏",value:0},
        {name:"陕西",value:0},
        // {name:"甘肃",value:0},
        {name:"青海",value:0},
        {name:"宁夏",value:0},
        {name:"新疆",value:0},
        {name:"广东",value:0},
        {name:"广西",value:0},
        {name:"海南",value:0},
      ];

    var colorData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            res.push({
                name: data[i].name,
                value: data[i].value,
                itemStyle: {
                    normal: {
                        areaColor: data[i].value > 0 ? '#f06f6f' : (data[i].value < 0 ? '#4db84d' : '#7eb2f3')
                    },
                    emphasis: {
                        areaColor: data[i].value > 0 ? '#f06f6f' : (data[i].value < 0 ? '#4db84d' : '#7eb2f3')
                    }
                }
            });
        }
        return res;
    }

    option = {
        visualMap: {
            show: false,
            type: 'piecewise',
            splitNumber: 3,
            pieces: [{
              min: 0,
              color: '#f06f6f',
            }, {
              max: 0,
              color: '#4db84d'
            }, {
              value: 0,
              color: '#7eb2f3'
            }]
        },
        geo: {
            map: 'china',
            roam: 'move',
            zoom: 3,
            scaleLimit: {
              min: 3,
              max: 3,
            },
            selectedMode: 'single',
            center: [110.076, 32.384],
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true,
                }
            },
            showLegendSymbol: false,
            itemStyle: {
                normal: {
                    areaColor: '#e8eff8',
                    borderColor: '#fff',
                    borderWidth: 1.5
                }, 
                emphasis: {
                    areaColor: '#e8eff8',
                    borderColor: '#fff',
                    borderWidth: 1.5
                }
            },
            regions: colorData(data)
        },
        series: [
            {
                type: 'lines',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'dashed',
                        width: 2,
                        color: '#fff',
                        opacity: 1
                    }
                },
                data: [{
                    coords: [[114.31, 30.52], [112.53, 37.87]],
                    fromName: '湖北',
                    toName: '山西'
                }]
            }
        ]
    };
    console.time('setOption');
    myChart.setOption(option);
    console.timeEnd('setOption');
});