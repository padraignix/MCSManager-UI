<!--
  Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>
-->

<template>
  <el-card class="box-card-shadow" :body-style="bodyStyle || 'padding:12px;'" :style="style">
    <div class="box-card-title-wrapper">
      <div v-bind:class="{ 'box-card-title': true }" v-if="$slots.title">
        <span v-bind:class="{ 'left-tip': tipType }"></span>
        <span>
          <slot name="title"></slot>
        </span>
      </div>
      <div class="box-card-rtitle" v-if="$slots.rtitle">
        <slot name="rtitle"></slot>
      </div>
      <div class="box-card-rtitle" v-if="$slots.title2">
        <slot name="title2"></slot>
      </div>
    </div>

    <div class="box-card-group" v-if="$slots.box">
      <slot></slot>
    </div>

    <div class="box-card-group2" v-if="$slots.box2">
      <slot></slot>
    </div>

    <div class="box-card-content">
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    style: String,
    bodyStyle: String,
    tip: {
      type: Boolean,
      default: true
    },
    tipType: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {};
  },
  methods: {}
};
</script>

<style>
.box-card-shadow p:first-child {
  margin-top: 0px;
}
</style>

<style scoped>
.box-card-title {
  font-weight: 600;
  font-size: 14px;
}
.box-card-title-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.box-card-rtitle {
  /* float: right; */
}
.box-card-title2 {
  font-weight: 600;
  font-size: 18px;
}
.box-card-content {
  font-size: 13px;
  font-weight: 400;
}

.box-card-group {
  float: left;
  width: 100%;
}

.box-card-group2 {
  width: 25%
}

.box-card-shadow {
  border-radius: 4px;
}

.left-tip {
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 2px;
  /* margin-top: 2px; */
  border-radius: 2px;
  color: #409eff;
  background-color: #409eff;
  height: 14px;
  width: 6px;
  vertical-align: middle;
}
</style>
