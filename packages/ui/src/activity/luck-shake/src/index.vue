<template>
  <div
    class="demo1"
    style="
      background: url('//img11.360buyimg.com/imagetools/jfs/t1/114254/40/21041/607452/618e30bbE6ab3ee0c/9b7a249aee21ba46.jpg')
        no-repeat top center/100% 100%;
    "
  >
    <LuckShake
      ref="luckShakePrize"
      :luck-width="luckWidth"
      :luck-height="luckHeight"
      :click-point="clickPoint"
      :luck-img-top="luckImgTop"
      :luck-img-bottom="luckImgBottom"
      @shake-event="shakeEvent()"
      @click-shake="handelClick()"
    >
    </LuckShake>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { LuckShake } from '@nutui/nutui-bingo';

import type { MComponent } from '@tmagic/schema';
import { useApp } from '@tmagic/vue-runtime-help';

import '@nutui/nutui-bingo/dist/style.css';

interface LuckShakeSchema extends MComponent {
  type: 'LuckShake';
  clickPoint: string;
  luckImgBottom: string;
  luckImgTop: string;
}

const props = withDefaults(
  defineProps<{
    config: LuckShakeSchema;
    model?: any;
  }>(),
  {
    model: () => ({}),
  },
);

useApp({
  config: props.config,
  methods: {},
});

// 红包大小
const luckWidth = ref('200px');
const luckHeight = ref('160px');
// 剩余抽奖次数
const shakeNum = ref(3);

const shakeEvent = () => {
  if (shakeNum.value === 0) {
    console.log(`无抽奖次数`);
  } else if (shakeNum.value === 1) {
    setTimeout(() => {
      console.log(`中奖啦`);
    }, 200);
    shakeNum.value -= 1;
  } else {
    setTimeout(() => {
      console.log(`抽奖次数还剩${shakeNum.value}次`); // Do something
    }, 200);
    shakeNum.value -= 1;
  }
};
const handelClick = () => {
  console.log('点击摇一摇');
  if (shakeNum.value === 0) {
    console.log(`无抽奖次数`);
  } else if (shakeNum.value === 1) {
    setTimeout(() => {
      console.log(`中奖啦`);
    }, 200);
    shakeNum.value -= 1;
  } else {
    setTimeout(() => {
      console.log(`抽奖次数还剩${shakeNum.value}次`); // Do something
    }, 200);
    shakeNum.value -= 1;
  }
};

const clickPoint = computed(() => props.config.clickPoint);
const luckImgTop = computed(() => props.config.luckImgTop);
const luckImgBottom = computed(() => props.config.luckImgBottom);
</script>

<style lang="scss" scoped></style>
