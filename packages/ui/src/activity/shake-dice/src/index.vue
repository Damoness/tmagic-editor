<template>
  <div class="magic-ui-shake-dice">
    <ShakeDice class="shakeDice" ref="dice" :time="time" :speed="speed" :id="id"></ShakeDice>
    <div @click="jump" class="demoBtn">摇动</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ShakeDice } from '@nutui/nutui-bingo';

import type { MComponent } from '@tmagic/schema';
import { useApp } from '@tmagic/vue-runtime-help';

import '@nutui/nutui-bingo/dist/style.css';

interface ShakeDiceSchema extends MComponent {
  type: 'ShakeDice';
  oneLapOfTime: string;
  totalTime: string;
  winId: string;
}

const props = withDefaults(
  defineProps<{
    config: ShakeDiceSchema;
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

const dice = ref();
// const id = ref()
const jump = () => {
  // id.value = 5
  dice.value.shake();
};

const time = computed(() => props.config.oneLapOfTime);
const speed = computed(() => parseFloat(props.config.totalTime) * 1000);
const id = computed(() => parseInt(props.config.winId, 10));
</script>

<style lang="scss" scoped>
.magic-ui-shake-dice {
  width: 100%;
  height: 500px;
  text-align: center;
  background: url('//img12.360buyimg.com/imagetools/jfs/t1/95587/33/21814/218186/61e0015aE05e5fa32/e367632953cc3633.png')
    no-repeat bottom !important;
}

.shakeDice {
  margin: 70px auto;
}

.demoBtn {
  margin: 200px auto 0;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: linear-gradient(
    135deg,
    rgba(240, 22, 14, 1) 0%,
    rgba(240, 37, 15, 0.8) 69.83950099728881%,
    rgba(240, 78, 14, 1) 100%
  );
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(240, 37, 15, 0.3);
}
</style>
