import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';
import TopHeader from './components/Header';
import LandingPage from './content/LandingPage/LandingPage';
import RepoPage from './content/RepoPage/RepoPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopHeader />
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/repos" component={RepoPage} />
            </Switch>
          </Content>
        </header>
      </div>
    );
  }
}

export default App;
