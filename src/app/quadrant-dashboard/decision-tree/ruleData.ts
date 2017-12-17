export const ruleData = [
  {
    rank: 1,
    color: 'rgb(89, 199, 85)',
    rules: [
      {
        type: 'IF',
        chartRef: 'FOURTH QC TEST 2 PRESSURE',
        comparison: '< 2.29',
      },
      {
        type: 'IF',
        chartRef: 'COA HN',
        comparison: '>= 0.0042',
      },
      {
        type: 'IF',
        chartRef: 'COA HN',
        comparison: '>= 0.0042',
      }
    ],
    probability: 75
  },
  {
    rank: 2,
    color: 'rgb(85, 176, 199)',
    rules: [
      {
        type: 'IF',
        chartRef: 'FIFTH QC TEST 1 PRESSURE ph 1',
        comparison: '>= 122.29',
      },
      {
        type: 'IF',
        chartRef: 'COA HN',
        comparison: '>= 0.0042',
      }
    ],
    probability: 23
  },
  {
    rank: 3,
    color: 'rgb(167, 85, 199)',
    rules: [
      {
        type: 'IF',
        chartRef: 'FOURTH QC TEST 2 PRESSURE',
        comparison: '< 2.29',
      }
    ],
    probability: 11
  }
];

