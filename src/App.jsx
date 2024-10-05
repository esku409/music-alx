import { useState } from "react";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from "./RootLayout";
import TopTracks from "./pages/top_tracks/page";
import ArtistPage from "./pages/Artist/page";
import Playlists from "./pages/playlist/page";
import TopArtists from "./pages/top_artists/page";
import AlbumPage from "./pages/Album/page";
import FavoritesPage from "./pages/favorites/page";


const persistor = persistStore(store);

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, 
      children: [
        { index: true, element: <Home/> }, 
        { path: 'top_tracks', element: <TopTracks/> },  
        { path: 'artist/:id', element: <ArtistPage/> },
        { path: 'playlist/:id', element: <Playlists/> },  
        { path: 'top_artists', element: <TopArtists/> }, 
        { path: 'album/:id', element: <AlbumPage/> },  

        { path: 'favorites', element: <FavoritesPage/> },  
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
