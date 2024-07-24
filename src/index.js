import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="blogs" element={<Blogs />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="login" element={<Login />}/>
                <Route path="cadastrar" element={<Cadastrar />}/>
                <Route path="*" element={<NoPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);