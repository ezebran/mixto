import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import mixtoTheme from './themeConfig'

import Signin from './components/Signin'
import Singup from './components/Signup'
import Footer from './components/Footer'
import Welcome from './components/Welcome'


function App() {
  return (
    <ThemeProvider theme={mixtoTheme}>      
      <Router>
        <Route path="/" exact component={Signin} />
        <Route path="/singup" exact component={Singup} />
        <Route path="/welcome" exact component={Welcome} />
        <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;