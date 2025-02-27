/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import DollMachine from './activity/doll-machine';
import GuessGift from './activity/guess-gift';
import LuckShake from './activity/luck-shake';
import ShakeDice from './activity/shake-dice';
import Button from './button';
import Container from './container';
import Img from './img';
import IteratorContainer from './iterator-container';
import Overlay from './overlay';
import Page from './page';
import PageFragment from './page-fragment';
import PageFragmentContainer from './page-fragment-container';
import QRcode from './qrcode';
import Text from './text';

export { default as TMagicUiButton } from './button';
export { default as TMagicUiContainer } from './container';
export { default as TMagicUiImg } from './img';
export { default as TMagicUiIteratorContainer } from './iterator-container';
export { default as TMagicUiOverlay } from './overlay';
export { default as TMagicUiPage } from './page';
export { default as TMagicUiPageFragment } from './page-fragment';
export { default as TMagicUiPageFragmentContainer } from './page-fragment-container';
export { default as TMagicUiQRcode } from './qrcode';
export { default as TMagicUiText } from './text';

const ui: Record<string, any> = {
  'luck-shake': LuckShake, // 摇一摇
  'doll-machine': DollMachine, // 娃娃机
  'shake-dice': ShakeDice, // 摇骰子
  'guess-gift': GuessGift, // 你藏我猜
  page: Page,
  container: Container,
  button: Button,
  text: Text,
  img: Img,
  qrcode: QRcode,
  overlay: Overlay,
  'page-fragment-container': PageFragmentContainer,
  'page-fragment': PageFragment,
  'iterator-container': IteratorContainer,
};

export default ui;
