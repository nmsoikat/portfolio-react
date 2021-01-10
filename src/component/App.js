import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LeftMenu from './LeftMenu/LeftMenu';
import About from './About/About';


class App extends react.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-lg-2">
                <aside className="left-side">
                  <LeftMenu />
                </aside>
              </div>

              <div className="col-md-9 col-lg-10">
                <main>
                  <Route path="/" component={About} />
                </main>
              </div>

            </div>
          </div>

        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;