import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'; // Import all from `react-router-dom`
import RootLayout from "./RootLayout";
import TopTracks from "./pages/top_tracks/page";
import ArtistPage from "./pages/Artist/page";
import Playlists from "./pages/playlist/page";
import TopArtists from "./pages/top_artists/page";
import AlbumPage from "./pages/Album/page";
import FavoritesPage from "./pages/favorites/page";
// import FavoritesPage from "./pages/favorites/page";

const persistor = persistStore(store);

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, 
      children: [
        { index: true, element: <Home/> },  // Default route (index)
        { path: 'top_tracks', element: <TopTracks/> },  // Cart route
        { path: 'artist/:id', element: <ArtistPage/> },  // Cart route
        { path: 'playlist/:id', element: <Playlists/> },  // Cart route
        { path: 'top_artists', element: <TopArtists/> },  // Cart route
        { path: 'album/:id', element: <AlbumPage/> },  // Cart route

        { path: 'favorites', element: <FavoritesPage/> },  // Cart route

      ],
    },
  ]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={router}/>

      </PersistGate>
   
    </Provider>
  );
 
}

export default App;
