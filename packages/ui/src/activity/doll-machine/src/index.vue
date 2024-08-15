<template>
  <DollMachine
    ref="lottoRollDom"
    :prize-list="prizeList"
    :prize-index="prizeIndex"
    @start-turns="startTurns"
    @end-turns="endTurns"
  >
  </DollMachine>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { DollMachine } from '@nutui/nutui-bingo';

import type { MComponent } from '@tmagic/schema';
import { useApp } from '@tmagic/vue-runtime-help';

import '@nutui/nutui-bingo/dist/style.css';

interface DollMachineSchema extends MComponent {
  type: 'DollMachine';
  prizeList: Array<any>;
  prizeIndex: string;
}

const props = withDefaults(
  defineProps<{
    config: DollMachineSchema;
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

const lottoRollDom: any = ref(null);
const prizeList = computed(() => props.config.prizeList);
const prizeIndex = computed(() => props.config.prizeIndex);

const startTurns = () => {
  console.log('开始抽奖');
};

const endTurns = () => {
  console.log('抽奖结束');
};
</script>

<style lang="scss" scoped></style>
