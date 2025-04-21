/** 在此文件中进行本地调试 */
import { VChart } from '../../../src/index';

const spec = {
  height: 550,
  barMinHeight: 9,
  axes: [
    {
      orient: 'left',
      paddingInner: 0.12,
      type: 'band',
      label: {}
    },
    {
      orient: 'bottom',
      min: 0,
      max: 1,
      type: 'linear',
      label: {}
    }
  ],
  padding: {
    right: 48,
    left: 48,
    top: 16,
    bottom: 16
  },
  color: {
    type: 'ordinal',
    domain: ['P0', 'P1', 'P2'],
    range: ['#F76560', '#FFB65D', '#7BE188']
  },
  data: {
    values: [
      {
        x: 'sg1',
        total: 1,
        repaired: 0,
        type: 'P1',
        y: 0
      },
      {
        x: 'my',
        total: 1,
        repaired: 0,
        type: 'P1',
        y: 0
      },
      {
        x: 'my2',
        total: 1,
        repaired: 0,
        type: 'P1',
        y: 0
      },
      {
        x: 'maliva',
        total: 1,
        repaired: 0,
        type: 'P1',
        y: 0
      },
      {
        x: 'sg1',
        total: 4,
        repaired: 2,
        type: 'P0',
        y: 0.5
      },
      {
        x: 'my',
        total: 4,
        repaired: 2,
        type: 'P0',
        y: 0.5
      },
      {
        x: 'my2',
        total: 4,
        repaired: 2,
        type: 'P0',
        y: 0.5
      },
      {
        x: 'maliva',
        total: 4,
        repaired: 2,
        type: 'P0',
        y: 0.5
      },
      {
        x: 'ie',
        total: 1,
        repaired: 0,
        type: 'P0',
        y: 0
      },
      {
        x: 'no1a',
        total: 1,
        repaired: 0,
        type: 'P0',
        y: 0
      },
      {
        x: 'useast5',
        total: 1,
        repaired: 0,
        type: 'P0',
        y: 0
      },
      {
        x: 'useast8',
        total: 1,
        repaired: 0,
        type: 'P0',
        y: 0
      },
      {
        x: 'sg1',
        total: 1,
        repaired: 1,
        type: 'P2',
        y: 1
      },
      {
        x: 'my',
        total: 1,
        repaired: 1,
        type: 'P2',
        y: 1
      },
      {
        x: 'my2',
        total: 1,
        repaired: 1,
        type: 'P2',
        y: 1
      },
      {
        x: 'maliva',
        total: 1,
        repaired: 1,
        type: 'P2',
        y: 1
      },
      {
        x: 'ie',
        total: 1,
        repaired: 0,
        type: 'P1',
        y: 0
      },
      {
        x: 'no1a',
        total: 1,
        repaired: 0,
        type: 'P1',
        y: 0
      }
    ]
  },
  bar: {
    state: {
      blur: {
        opacity: 0.2
      }
    }
  },
  barGapInGroup: 2,
  barMaxWidth: 18,
  barMinWidth: 10,
  xField: 'y',
  yField: ['x', 'type'],
  direction: 'horizontal',
  seriesField: 'type',
  legends: {
    visible: true,
    orient: 'bottom'
  },
  interactions: [
    {
      type: 'element-highlight-by-key'
    }
  ],
  type: 'bar'
};

const vchart = new VChart(spec, {
  dom: document.getElementById('chart'),
  animation: true,
  autoFit: true,
  optimize: {
    disableCheckGraphicWidthOutRange: true
  }
});

vchart.renderSync();

window['vchart'] = vchart;
