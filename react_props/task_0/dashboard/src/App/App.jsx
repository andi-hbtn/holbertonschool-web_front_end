import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

function App() {

  return (
    <Fragment>
      <Notifications />
      <Header />
      <div className='App-body'>
        <Login />
      </div>
      <Footer />
    </Fragment>
  )
}

export default App
