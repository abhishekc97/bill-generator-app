import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FinalStep(props) {
    const navigate = useNavigate();

    const userData = props.user;
    const planType = props.planType;

    const [billingDetails, setBillingDetails] = useState({
        details: [
            {name:"name", data: userData.name},
            {name:"email", data: userData.email},
            {name:"phone", data: userData.phone},
            {name:"planName", data: planType.planName},
            {name:"price", data: planType.price}
        ]
    });

    useEffect(() => {
        console.log("billing details", billingDetails);
    }, [billingDetails]);

    function goBack() {
        navigate("/second");
    }

    return (
        <React.Fragment>
            <div className="final-page">
                <div className="third-page-heading">
                    <p>Summary</p>
                </div>
                <div className="details-container">
                    { billingDetails.details.map((element, index) => (
                        <div key={index} className="bill-items" >
                            <p className="bill-particulars">{element.name}</p>
                            <p className="bill-particulars-value"> {element.data} </p>
                        </div>
                    ))}
                </div>

                <hr />
                <p> <span className="bill-particulars">Grand Total</span> <span className="bill-particulars-value">{billingDetails.price}</span></p>
                <div className="submit-buttons">
                    <Button
                        className="previous-step-button"
                        variant="outline-secondary"
                        type="submit"
                        onClick={goBack}
                    >
                        Go Back
                    </Button >
                    <Button variant="primary" type="submit" >Pay Now</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FinalStep;
