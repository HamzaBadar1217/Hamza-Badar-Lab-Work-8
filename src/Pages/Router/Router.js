import { BrowserRouter, Routes, Route } from "react-router-dom";
import GithubUsersData from "../GithubUsersData"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GithubUsersData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
