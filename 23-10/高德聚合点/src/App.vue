<script setup>
/**
 * 1. 根据数据的onLineStatus显示不同的标记点
 * 2. 根据点的onLineStatus显示聚合点的文案  在线数/聚合点总数
 * 3. 点击聚合点放大地图
 */
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import points from "@/points";

let map = null;

onMounted(() => {
  AMapLoader.load({
    key: "4e07a7be5aaf9658d1fa513b6d726d04",
    version: "2.0",
    plugins: ['AMap.MarkerCluster'],
  })
  .then((AMap) => {
    init(AMap)
  })
});

function init(AMap) {
  map = new AMap.Map("container", {
    center: [104.937478, 35.439575],
    mapStyle: "amap://styles/grey",
    zoom: 5
  });

  const count = points.length;
  const _renderClusterMarker = function (context) {
    // console.log(context)
    const onLineCount = getPointOnlineCount(context.clusterData)
    // 聚合中点个数
    const clusterCount = context.count;
    const div = document.createElement('div');
    // 聚合点配色
    const defaultColor = [
      '204,235,197',
      '168,221,181',
      '123,204,196',
      '78,179,211',
      '43,140,190',
    ];
    let bgColor;
    if (clusterCount >= 0 && clusterCount < 10) {
      bgColor = defaultColor[0];
    } else if (clusterCount >= 10 && clusterCount < 100) {
      bgColor = defaultColor[1];
    } else if (clusterCount >= 100 && clusterCount < 1000) {
      bgColor = defaultColor[2];
    } else if (clusterCount >= 1000 && clusterCount < 10000) {
      bgColor = defaultColor[3];
    } else if (clusterCount >= 10000) {
      bgColor = defaultColor[4];
    }
    div.style.backgroundColor = 'rgba(' + bgColor + ',.5)';
    const size = Math.round(25 + Math.pow(clusterCount / count, 1 / 5) * 40);
    div.style.width = div.style.height = size + 'px';
    div.style.border = 'solid 1px rgba(' + bgColor + ',1)';
    div.style.borderRadius = size / 2 + 'px';
    div.innerHTML = onLineCount + '/' + context.count;
    div.style.lineHeight = size + 'px';
    div.style.color = '#ffffff';
    div.style.fontSize = '12px';
    div.style.textAlign = 'center';
    context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
    context.marker.setContent(div);
  };
  const _renderMarker = function (context) {
    const rgb = +context.data[0].onLineStatus === 1 ? '255,121,4' : '244,244,244'
    const content = '<div style="background-color: rgba('+ rgb +',.9); height: 18px; width: 18px; border: 1px solid rgba('+ rgb +',1); border-radius: 12px; box-shadow: rgba(0, 0, 0, 1) 0px 0px 3px;"></div>';
    const offset = new AMap.Pixel(-9, -9);
    context.marker.setContent(content)
    context.marker.setOffset(offset)
  };
  const cluster = new AMap.MarkerCluster(map, points, {
    renderClusterMarker: _renderClusterMarker, // 自定义聚合点样式
    renderMarker: _renderMarker,   // 自定义非聚合点样式
    gridSize: 60,
  });

  cluster.on('click', (item) => {
    if (item.clusterData.length === 1) {
      // /，。。。
      return
    }

    // let alllng = 0; let alllat = 0
    // for (const mo of item.clusterData) {
    //   alllng += mo.lnglat.lng
    //   alllat += mo.lnglat.lat
    // }
    // const lat = alllat / item.clusterData.length
    // const lng = alllng / item.clusterData.length
    // map.setZoomAndCenter(map.getZoom() + 2, [lng, lat])

    let allLng = []; // 所有经度
    let allLat = []; // 所有纬度
    for (const mo of item.clusterData) {
      allLng.push(mo.lnglat.lng)
      allLat.push(mo.lnglat.lat)
    }
    let east = Math.max(...allLng), south = Math.min(...allLat), west = Math.min(...allLng), north = Math.max(...allLat)

    // const marker1 = new AMap.Marker({
    //   icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
    //   position: [west, south],
    //   offset: new AMap.Pixel(-13, -30)
    // });
    // const marker2 = new AMap.Marker({
    //   icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
    //   position: [east, north],
    //   offset: new AMap.Pixel(-13, -30)
    // });
    // marker1.setMap(map);
    // marker2.setMap(map);
    //
    // const marker3 = new AMap.Marker({
    //   icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
    //   position: [west-0.1, south-0.1],
    //   offset: new AMap.Pixel(-13, -30)
    // });
    // const marker4 = new AMap.Marker({
    //   icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
    //   position: [east+0.1, north+0.1],
    //   offset: new AMap.Pixel(-13, -30)
    // });
    // marker3.setMap(map);
    // marker4.setMap(map);

    var bounds = new AMap.Bounds([west-0.1, south-0.1], [east+0.1, north+0.1]);
    map.setBounds(bounds);
  })
}

/*举个例子，假设你有以下经纬度坐标：

经度：[116, 117, 118, 119]
纬度：[39, 40, 41, 42]
从中可以找到如下值：

最西边的经度：116
最南边的纬度：39
最东边的经度：119
最北边的纬度：42
所以最西南角的经纬度为 (116, 39)，最东北角的经纬度为 (119, 42)。*/

function getPointOnlineCount(data) {
  let number = 0
  data.forEach(value => {
    const count = value._amapMarker.originData[0].filter(c => c.onLineStatus === 1)
    number += count.length
  })
  return number
}


onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>
