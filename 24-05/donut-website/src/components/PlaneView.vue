<template>
  <TresMesh
    :position="new Vector3(1.5, -1, 0)"
    :rotation-x="-Math.PI * 0.5"
  >
    <TresPlaneGeometry :args="[1.5, 1.5]" />
    <TresMeshBasicMaterial
      :color="new Color(0x000000)"
      :transparent="true"
      :opacity="0.5"
      :alphaMap='alphaMap'
    />
  </TresMesh>
</template>

<script setup lang='ts'>
import { Vector3, Color } from 'three'
import { useTexture } from "@tresjs/core";

const alphaMap = await useTexture(['/models/donut/texture/simpleShadow.jpg'])
</script>
