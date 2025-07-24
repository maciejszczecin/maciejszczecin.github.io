import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './components/pages/pages_layout/pages_layout'
import PartialHome from './components/partials/partial_home/partial_home'
import PartialOne from './components/partials/partial_one/partial_one'
import PartialTwo from './components/partials/partial_two/partial_two'
import PagesTest from './components/pages/test_page/test_page'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
        <Route index element={<PartialHome />} />
        <Route path="one" element={<PartialOne />} />
        <Route path="two" element={<PartialTwo />} />
        <Route path="test_page" element={<PagesTest />} />
        <Route path="*" element={<PartialHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App