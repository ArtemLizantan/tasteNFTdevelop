import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Artwork from "./components/Pages/Artwork/Artwork";
import CreatorProfile from "./components/Pages/CreatorProfile/CreatorProfile";
import MyProfile from "./components/Pages/MyProfile/MyProfile";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/artworks/:id" element={<Artwork />} />
          <Route path="/creator" element={<CreatorProfile />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
