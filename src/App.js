import * as React from 'react'
import glamorous from 'glamorous'
import { upperCase } from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import mandel from './mandel.svg'
import Home from './components/Fractals'
// import Mandelbrot from './components/Mandelbrot'
// import Julia from './components/Julia'
// import Triangle from './components/Triangle'
// import Snowflake from './components/Snowflake'
import './App.css';

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '36px',
  width: '100%'
})
const Content = glamorous.div({
  textAlign: 'left',
  width: '500px'
})

// const components = {
//   mandelbrot: Mandelbrot,
//   julia: Julia,
//   triangle: Triangle,
//   snowflake: Snowflake
// }

// const FuzzyRoute = () => (
//  <Route exact path="/fractals/:fractal" component={
//     ({match}) => {
//       const Component = components[(match.params.fractal)]
//       return (
//         <div>
//           <Link to="/fractals">Home</Link>
//           <Component />
//         </div>
//       )
//     }
//   }/>
// )

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mandel} className="App-logo" alt="logo" />
        </header>
        <Container>
          <Content>
            <Router>
              <Switch>
                <Route path="/fractals" component={Home} />
                <Route path="*" render={() => <div>Uncharted Territory</div>} />
              </Switch>
            </Router>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App
