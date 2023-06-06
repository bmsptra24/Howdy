import { lazy, Suspense } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Opps...404</h1>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>{isAuthenticated ? <HomePage /> : <Login />}</div>
    </Suspense>
  );
}

export default App;
