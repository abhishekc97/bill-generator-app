import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import FinalStep from "../components/FinalStep";

function AppRouter() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        planName:'',
        price:''
    });

    const [planType, setPlanType] = useState({
        planName: "",
        price: "",
    });

    const updateUser = (data) => {
        setUser((prevUser) => ({ ...prevUser, ...data }));
        console.log(user);
    };

    const updatePlan = (data) => {
        setPlanType((prevPlan) => ({ ...prevPlan, ...data }));
        console.log(planType);
    };

    const resetUser = () => {
        setUser({});
    };

    const resetPlan = () => {
        setPlanType({});
    };

    useEffect(() => {
        console.log("user: ", user);
        console.log("plan type: ", planType);
    }, [user, planType]);

    return (
        <BrowserRouter>
            <div className="row">
                <div className="col-4">
                    <div>
                        <div
                            className="sidebar-container"
                            style={{ display: "flex", flexDirection: "row" }}
                        >
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="right-container">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <FirstStep user={user} updateUser={updateUser} />  
                                    // setUser={setUser}
                                }
                            />
                            <Route
                                path="/second"
                                element={
                                    <SecondStep
                                        user={user} updateUser={updateUser}
                                        // setPlanType={setPlanType}
                                    />
                                }
                            />
                            <Route
                                path="/final"
                                element={
                                    <FinalStep
                                        user={user}
                                        planType={planType}
                                        resetUser={resetUser}
                                        resetPlan={resetPlan}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                    
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
