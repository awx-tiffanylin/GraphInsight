import Component from './Component';
import registerMeta from './registerMeta';

/**   index.md 中解析得到默认值，也可用户手动修改 */
const info = {
  id: 'OperatorBar',
  name: '操作栏',
  desc: '业务操作栏，可集成众多分析组件',
  icon: 'icon-tabs',
  cover: 'http://xxxx.jpg',
  category: 'container-components',
  type: 'GICC',
};

export default {
  info,
  component: Component,
  registerMeta,
};
