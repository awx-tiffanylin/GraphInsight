import * as ElementProperties from './ElementProperties';
import * as ExecAlgorithm from './ExecAlgorithm';
import * as GraphScopeServices from './GraphScopeService';
import * as GremlinQuery from './GremlinQuery';
import * as NeighborsQuery from './NeighborsQuery';
import ServerComponent from './ServerComponent';

export default {
  id: 'GS',
  name: 'GraphScope',
  desc: 'GraphScope 引擎服务',
  type: 'database',
  component: ServerComponent,
  services: {
    ...GremlinQuery,
    ...NeighborsQuery,
    ...ElementProperties,
    ...ExecAlgorithm,
    ...GraphScopeServices,
  },
};
