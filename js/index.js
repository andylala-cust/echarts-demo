var uploadedDataURL = "assets/data.json";

$.getJSON(uploadedDataURL, function(geoJson) {
  echarts.registerMap('china', geoJson);
  const options = {
    geo: [{
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
          show: true,
          textStyle: {
            color: '#000'
          }
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#eee',
          borderColor: '#fff',
          shadowBlur: 0,
          borderWidth: 1.5
        }
      },
      showLegendSymbol: false,
      regions: [{ name: '山东', value: 2 }]
    }],
    series: [{
      type: 'lines',
      zLevel: 10,
      silent: true,
      animation: true,
      animationDuration: 200,
      lineStyle: {
        normal: {
          type: 'dashed',
          width: 2,
          color: '#fff',
          opacity: 1
        }
      }
    }],
    visualMap: {
      show: false,
      type: 'piecewise',
      splitNumber: 3,
      pieces: [{
        min: 0,
        color: 'red',
      }, {
        max: 0,
        color: 'green'
      }, {
        value: 0,
        color: 'blue'
      }]
    }
  };
  const mapInstance = echarts.init(document.getElementById('canvas-wrapper'));
  console.time('setOption');
  mapInstance.setOption(options);
  console.timeEnd('setOption');
  mapInstance.resize();
});
