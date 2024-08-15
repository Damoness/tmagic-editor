<template>
  <div class="magic-ui-guess-gift">
    <GuessGift
      ref="guessGiftDom"
      :turns-number="turnsNumber"
      :turns-time="turnsTime"
      :raise-height="raiseHeight"
      :prize-index="prizeIndex"
      @start-turns="startTurns"
      @end-turns="endTurns"
    >
    </GuessGift>
    <button @click="gameStart">开始</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { GuessGift } from '@nutui/nutui-bingo';

import type { MComponent } from '@tmagic/schema';
import { useApp } from '@tmagic/vue-runtime-help';

import '@nutui/nutui-bingo/dist/style.css';

interface GuessGiftSchema extends MComponent {
  type: 'guess-gift';
  turnsNumber: string;
  turnsTime: string;
  raiseHeight: string;
  winPrize: boolean;
}

const props = withDefaults(
  defineProps<{
    config: GuessGiftSchema;
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

const guessGiftDom: any = ref(null);
// 中奖的奖品的index(此数据可根据后台返回的值重新赋值)

const gameStart = () => {
  guessGiftDom.value.start();
};
const startTurns = () => {
  console.log('开始抽奖');
};
const endTurns = () => {
  console.log('抽奖结束');
};

const turnsNumber = computed(() => parseInt(props.config.turnsNumber, 10));
const turnsTime = computed(() => parseInt(props.config.turnsTime, 10));
const raiseHeight = computed(() => parseInt(props.config.raiseHeight, 10));
const prizeIndex = computed(() => (props.config.winPrize ? 1 : -1));
</script>

<style scoped>
button {
  display: block;
  width: 100px;
  margin: 30px auto;
}
</style>
