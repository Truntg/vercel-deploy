
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { AppContextProvider } from './context/AppContext.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
  {/* // <AppContextProvider>
  //   <App />
  // </AppContextProvider>  */}
    <Provider store={store}>
      <App/>
    </Provider>
   </React.StrictMode>,

)
