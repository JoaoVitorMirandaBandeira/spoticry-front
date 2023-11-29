// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import { YourPlaylist } from "../pages/YourPlaylist";
import SongsFromPlaylist from "../pages/SongsFromPlaylist";


const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/feed" element={<FeedPage />} /> 
      <Route path="/user/playlists" element={<YourPlaylist/>}/>
      <Route path="/playlist/:id" element={<SongsFromPlaylist/>}/>
    </Routes>
  )
};

export default Router;
