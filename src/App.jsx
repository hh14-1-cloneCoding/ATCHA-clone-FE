import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./pages/MainPage";
import Header from "./components/Layout/Header";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ProfileEdit from "./pages/ProfileEdit";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import DetailMoviePage from "./pages/DetailMoviePage";
import DetailTvPage from "./pages/DetailTvPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route element={<Header />}> */}
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profileedit/:id" element={<ProfileEdit />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/profilePage/:id" element={<ProfilePage />} />
            <Route path="/searchPage" element={<SearchPage />} />
<<<<<<< Updated upstream
            <Route path="/detailPage" element={<DetailPage />} />
          {/* </Route> */}
=======
            <Route path="/detailPage" element={<DetailPage />}>
              {" "}
            </Route>
            <Route path="/detailPage" element={<DetailPage />}>
              <Route
                path="/detailPage/movie"
                element={<DetailMoviePage />}
              ></Route>

              <Route path="/detailPage/tv" element={<DetailTvPage />}></Route>
            </Route>
          </Route>
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;