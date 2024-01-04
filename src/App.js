import './App.css';
import React from "react"
import {Layout,Typography,Design,Space} from "antd"
import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails} from "./components"
import {
  BrowserRouter as Router,
  Routes,
  Route,
 Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     <div className='navbar'>
        <Navbar>
        </Navbar>
     </div>
     <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/"  element={<Homepage/>}></Route>
            <Route path="/exchanges"  element={<Exchanges/>}></Route>
            <Route path="/cryptocurrencies"  element={<Cryptocurrencies/>}></Route>
            <Route path="/crypto/:coinId"  element={<CryptoDetails/>}></Route>


          </Routes>
        </div>
      </Layout>

     <div className="footer" >

      <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
        Crytoverse<br>
        </br>
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
     </div>
    </div>     </div>
  );
}

export default App;
