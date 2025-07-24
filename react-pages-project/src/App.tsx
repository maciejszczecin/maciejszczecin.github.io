import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import HeaderMain from './components/headers/header_main/header_main'
import PartialHome from './components/partials/partial_home/partial_home'
import Partial404Page from './components/partials/partial_404_page/partial_404_page'
import PageTesting from './components/pages/page_testing/page_testing'
import PartialHelloWorld from './components/partials/partial_hello_world/partial_hello_world'
import PartialCrocoPark from './components/partials/partial_crocopark/partial_crocopark'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderMain />}>
          <Route index element={<PartialHome />} />
          <Route path="*" element={<Partial404Page />} />
          <Route path="helloworld" element={<PartialHelloWorld />} />
          <Route path="crocopark" element={<PartialCrocoPark />} />
        </Route>
        <Route path="page_testing" element={<PageTesting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App