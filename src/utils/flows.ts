import { IFlowEdge, INode, INodes, Json } from '../types';

export const transformNodesToGraph = (nodes: INodes) => {
  const edges = transformNodesToEdges(nodes);

  return {
    nodes: transformNodesToNodes(nodes, edges),
    edges,
  };
};

export const transformNodesToEdges = (nodes: INodes) => {
  const output: IFlowEdge[] = [];

  let edgeId = 0;

  Object.values(nodes).forEach((node) => {
    const { connectors = [] } = node;

    connectors.forEach((connector) => {
      const id = `e${edgeId++}`;

      const edge = {
        id,
        source: node.id,
        target: connector,
      };

      output.push(edge);
    });
  });

  return output;
};

export const transformNodesToNodes = (nodes: INodes, edges: IFlowEdge[]) => {
  return Object.values(nodes).map((node) => {
    return {
      id: node.id,
      type: getNodeType(node, edges),
      label: node.label,
      position: node.position,
      config: node,
    };
  });
};

export const getNodeType = (node: INode, edges: IFlowEdge[]) => {
  const isSource = edges.some((edge) => edge.source === node.id);
  const isTarget = edges.some((edge) => edge.target === node.id);

  if (isSource && isTarget) {
    return 'customApi';
  }

  if (isSource) {
    return 'customInput';
  } else if (isTarget) {
    return 'customOutput';
  }

  return 'customApi';
};
