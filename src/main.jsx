
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchResult from './pages/resultPage/SearchResult.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="search" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
)
