<template>
  <primitive :object="Globe" />
</template>

<script setup lang='ts'>
import { Color, MeshPhongMaterial } from 'three'
import ThreeGlobe from 'three-globe'
import countries from '@/assets/custom.geo.json'

const N = 20

const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
}))

const Globe = new ThreeGlobe()
  .hexPolygonsData(countries.features)
  .hexPolygonResolution(3)
  .hexPolygonMargin(0.7)
  .showAtmosphere(true)
  .atmosphereColor('#6944e5')
  .atmosphereAltitude(0.2)
  .arcsData(arcsData)
  .arcColor('color')
  .arcDashLength(0.9)
  .arcDashGap(4)
  .arcDashInitialGap(() => Math.random() * 5)
  .arcDashAnimateTime(1000)
  .arcsTransitionDuration(1000)


const globeMaterial = Globe.globeMaterial() as MeshPhongMaterial
globeMaterial.color = new Color('#3a228a')
globeMaterial.emissive = new Color('#220038')
globeMaterial.emissiveIntensity = 0.1
globeMaterial.shininess = 0.7
</script>
