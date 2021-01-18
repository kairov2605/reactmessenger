import { Auth ,Home} from './pages'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    < div className="wrapper" >
    <Route exact path={["/", "/login"]} component={Auth} />
    <Route exact path={"/im"} component={Home} />
      
    </div >
  )
}

export default App