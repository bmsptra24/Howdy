import { useState, lazy, Suspense } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import "./App.css";
const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
function App() {
  const [user, setUser] = useState(false);
  return (
    <Suspense
      fallback={
        <div className="bg-gradient-to-br from-sky-200 to-sky-400 w-screen h-screen flex justify-center items-center ">
          <AiOutlineLoading className="text-sky-700 text-7xl animate-spin" />
        </div>
      }
    >
      <div>{user ? <HomePage /> : <Login setUser={setUser} />}</div>
    </Suspense>
  );
}

export default App;
