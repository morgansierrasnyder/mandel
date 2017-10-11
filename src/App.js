import * as React from 'react'
import glamorous from 'glamorous'
import mandel from './mandel.svg'
import Home from './components/Home'
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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mandel} className="App-logo" alt="logo" />
        </header>
        <Container>
          <Content>
            <Home />
          </Content>
        </Container>
      </div>
    );
  }
}

export default App
