import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Blog from '../Blog/Blog'
import Work from '../Work/Work'
import { Route, Switch } from 'react-router-dom'
//
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}

export default App
