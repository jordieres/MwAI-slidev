<script setup>
  import { useSlideContext } from '@slidev/client'
  const slide = useSlideContext()
</script>

<template>
  <div class="slidev-layout two-cols">

    <div class="top-banner">
      <img src="/images/upm-header.png">
      <div class="banner-title">
        {{ slide.$frontmatter?.title }}
      </div>
    </div>

    <div class="two-cols-content">
      <div class="col-left">
        <slot name="left" />
      </div>

      <div class="col-right">
        <slot name="right" />
      </div>
    </div>

  </div>
</template>


<style>

.top-banner{
  position:absolute;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:87px;
  z-index:100;
  overflow:hidden;
}

.banner-image {
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  z-index:1;
}

.banner-title {
  position: absolute;
  z-index: 2;

  left: 320px;
  right: 140px;

  top: 35%;              /* antes 50% */
  transform: translateY(-50%);

  text-align: center;

  color: white;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: 0.03em;

  line-height: 1.2;
}

.two-cols-content{
  width: 100%;
  display:grid;
  grid-template-columns: 55% 45%;
  gap:40px;

  padding-top:20px;
  padding-left:40px;
  padding-right:40px;
}

.col-left{
  min-width:0;
}

.col-right{
  min-width:0;
}

.slidev-slide-content{
  max-width:none !important;
}

</style>

