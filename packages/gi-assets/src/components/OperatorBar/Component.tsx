import { Space } from 'antd';
import * as React from 'react';
import './index.less';
export interface OperatorBarProps {}

const OperatorBar: React.FunctionComponent<OperatorBarProps> = props => {
  console.log(props);
  //@ts-ignore
  const { components, assets } = props;

  return (
    <div className="gi-operator-bar">
      <Space>
        {components.map(item => {
          if (!item) {
            return null;
          }
          const { props, id, enable } = item;
          if (!enable) {
            return null;
          }
          const { component: Component } = assets[id];
          return (
            <span key={id}>
              <Component {...props} />
            </span>
          );
        })}
      </Space>
    </div>
  );
};

export default OperatorBar;