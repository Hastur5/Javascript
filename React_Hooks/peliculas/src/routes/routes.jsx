import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export function MyRoutes() {
    return(
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
            </Routes>
    )
}