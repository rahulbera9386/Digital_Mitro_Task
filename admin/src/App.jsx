import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="">
      <main className="min-h-screen">
      <Outlet/>
      </main>
     
    </div>
  )
}