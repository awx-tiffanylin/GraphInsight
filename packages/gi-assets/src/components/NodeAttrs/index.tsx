import Component from './Component';
import registerMeta from './registerMeta';

/**   index.md 中解析得到默认值，也可用户手动修改 */
const info = {
  id: 'NodeAttrs',
  name: '节点属性面板',
  category: 'components',
  desc: '节点属性面板',
  cover: 'http://xxxx.jpg',
};

export default {
  info,
  component: Component,
  registerMeta,
};