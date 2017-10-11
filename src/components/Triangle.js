import * as React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'
import Thumbnail from './Thumbnail'

export default () => (
  <div>
    <Title>Sierpinski Triangle</Title>
    <Thumbnail src="https://thumbnails-visually.netdna-ssl.com/BizarreSierpinskiTriangle_510736b6b60fa_w1500.png" />
    <ul>
      <li>
        <Link to="/fractals/snowflake">Koch Snowflake</Link>
      </li>
      <li>Arrowhead Curve</li>
      <li>Pascal's Triangle</li>
    </ul>
  </div>
)
