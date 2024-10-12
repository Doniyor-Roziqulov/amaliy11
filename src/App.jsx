import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Jadval from "./components/jadval/Jadval";
import Kurs from "./components/kurslar/Kurs";
import Report from "./components/report/Report";
import Darslar from "./components/darslar/Darslar";
import Email from "./components/email/Email";
import Chat from "./components/chat/Chat";
import Settings from "./components/settings/Settings";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    return (
        <div className="bg-neutral-200">
            <Routes>
                <Route path="/" element={<Admin />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="jadval" element={<Jadval />} />
                    <Route path="kurslar" element={<Kurs />} />
                    <Route path="report" element={<Report />} />
                    <Route path="darslar" element={<Darslar />} />
                    <Route path="email" element={<Email />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
