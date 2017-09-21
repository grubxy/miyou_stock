import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const items = [
  { label: '目标止损', value: '3%' },
  { label: '目标收益', value: '12%' },
  { label: '风险收益比', value: '4' },
]

const StatisticTarget = () => (
  <Segment attached>
    <Statistic.Group items={items} color='teal' size='small'/>
  </Segment>
)

export default StatisticTarget