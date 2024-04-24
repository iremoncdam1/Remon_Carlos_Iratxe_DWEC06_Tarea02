import ReactDOM from 'react-dom/client'
import './index.css' 
import App from './App.jsx'

//En el elemento con "id = root" del html añadimos nuestro elemento App
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)