import * as React from 'react'
import { upperCase } from 'lodash'

export default ({ match }) => (
  <div style={{ marginBottom: '24px', color: 'limegreen' }}>{upperCase(match.params.param)}</div>
)
