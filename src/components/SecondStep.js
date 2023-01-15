import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SecondStep.css";

function SecondStep(props) {
    const user = props;
    const navigate  = useNavigate ();

    const [plan, setPlan] = useState({
        plan:"",
    })

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setPlan({
            ...plan,
            [name]: value
        })
    }

    function onSubmit(data) {
        console.log(data);
        props.updateUser(data);
        navigate("/final");
    }

    return ( 
        <React.Fragment>
            <div className="plan-list" >
                <div className="plan-wrapper">
                    <label className="plan-container">
                        <img className="plan-icon-arcade" src="" alt="" />
                        <p className="plan-name">Arcade</p>
                        <p className="plan-price">$9/mo</p>
                        
                        <input
                            type="radio"
                            name="plan"
                            value="arcade"
                            onChange={handleChange}
                            
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="plan-wrapper">
                    <label className="plan-container">
                        <img className="plan-icon-advanced" src="" alt="" />
                        <p className="plan-name">Advanced</p>
                        <p className="plan-price">$12/mo</p>
                        
                        <input
                            type="radio"
                            name="plan"
                            value="advanced"
                            onChange={handleChange}
                            
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="plan-wrapper">
                    <label className="plan-container">
                        <img className="plan-icon-pro" src="" alt="" />
                        <p className="plan-name">Pro</p>
                        <p className="plan-price">$15/mo</p>
                        <input
                            type="radio"
                            name="plan"
                            value="pro"
                            onChange={handleChange}
                           
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                
            </div>
            <p> Selection : {plan.plan}</p>
            
            <Button className="next-step-button" variant="primary" type="submit">
                Next Step
            </Button>
        </React.Fragment>
     );
}

export default SecondStep;