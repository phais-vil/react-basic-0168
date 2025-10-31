import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import MainLayout from "./component/layout/MainLayout";
//00.57.00
export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      <AppRoutes />
    </BrowserRouter>
  );
}
