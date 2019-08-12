import React from 'react';
import { storiesOf } from '@storybook/react';

import UsageStats from '../components/UsageStats';

export const usageStatsData = [
    { username: 'Group A', value: 400 },
    { username: 'Group B', value: 300 },
    { username: 'Group C', value: 300 },
    { username: 'Group D', value: 200 },
  ];

storiesOf('UsageStats', module)
.add('default', () => <UsageStats data={usageStatsData} />)