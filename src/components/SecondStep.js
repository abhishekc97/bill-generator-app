import React, { useEffect, useState } from "react";
import "./SecondStep.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SecondStep(props) {
    const navigate = useNavigate();

    const [options, setOption] = useState({
        activePlan: null,
        plans: [
            {
                id: 1,
                planName: "Arcade",
                price: "$9/mo",
                imgSrc: "./images/arcade.svg",
            },
            {
                id: 2,
                planName: "Advanced",
                price: "$12/mo",
                imgSrc: "./images/advanced.svg",
            },
            {
                id: 3,
                planName: "Pro",
                price: "$15/mo",
                imgSrc: "./images/pro.svg",
            },
        ],
    });

    function toggleActive(index) {
        setOption({ ...options, activePlan: options.plans[index] });
    }

    function toggleActiveStyle(index) {
        if (options.activePlan === options.plans[index]) {
            return "box active";
        } else {
            return "box inactive";
        }
    }

    let error = false;
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        console.log(options.activePlan);
    }, [error]);

    function onSubmit() {
        console.log(options.activePlan);
        if (options.activePlan !== null) {
            const data = {
                planName: options.activePlan.planName,
                price: options.activePlan.price,
            };
            console.log(data);
            props.setPlanType(data);
            navigate("/final");
        } else {
            setErrorMessage("You must select a plan before proceeding");
            error = !error;
            console.log("You must select a plan before proceeding");
        }
    }

    function goBack() {
        navigate("/");
    }

    return (
        <React.Fragment>
            <div>
                <div className="row">
                    <div className="col-8">
                        <div className="plan-heading">Select your plan</div>
                        <div className="plan-info">
                            You have the option of monthly or yearly billing
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    {options.plans.map((element, index) => (
                        <div
                            key={index}
                            className={toggleActiveStyle(index)}
                            onClick={() => {
                                toggleActive(index);
                            }}
                        >
                            <div
                                className={
                                    element.id === 1
                                        ? "icon-logo"
                                        : element.id === 2
                                        ? "icon-logo2"
                                        : "icon-logo3"
                                }
                            >
                                <img src={element.imgSrc} alt="icon" />
                            </div>
                            <div className="plan-name"> {element.planName}</div>
                            <div className="plan-price"> {element.price}</div>
                        </div>
                    ))}

                    <div> {error ? errorMessage : ""} </div>
                </div>
                <div className="submit-button-container-2">
                    <div className="row">
                        <div className="col-4">
                            <Button
                                className="previous-step-button"
                                variant="outline-secondary"
                                type="submit"
                                onClick={goBack}
                            >
                                Go Back
                            </Button>
                        </div>
                        <div className="col-6">
                            <Button
								className="next-step-button"
                                variant="primary"
                                type="submit"
                                onClick={onSubmit}
                            >
                                Next Step
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SecondStep;
