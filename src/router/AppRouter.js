import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import FinalStep from "../components/FinalStep";

function AppRouter() {
	const [user, setUser] = useState({});

	const updateUser = (data) => {
		setUser((prevUser) => ({...prevUser, ...data}));
		console.log(user);
	}

	const resetUser = () => {
		setUser({});
	}
	
    return (
        <BrowserRouter>
            <div className="container" style={{"display":"flex", "flex-direction":"row"}}>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<FirstStep user={user} updateUser={updateUser} />} />
						
					<Route path="/second" element={<SecondStep user={user} updateUser={updateUser} />} />
					
					<Route path="/final" element={<FinalStep />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
