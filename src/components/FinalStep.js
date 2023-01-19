import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function FinalStep(props) {
    const navigate = useNavigate();

    const userData = props.user;
    // const planType = props.planType;
    const [grandTotal, setGrandTotal] = useState('');

    const [billingDetails, setBillingDetails] = useState({
        details: [
            // "name": userData.email;
            
            { name: "Name", data: userData.name },
            { name: "Email", data: userData.email },
            { name: "Phone", data: userData.phone },
            { name: "Plan Name", data: userData.planName },
            { name: "Price", data: userData.price },
        ],
    });

    function getGrandTotal() {
        let grandTotal = '';
        for(var index in billingDetails.details ) {
            if(index == 4) {
                grandTotal = billingDetails.details[index].data;
                console.log("grandtotal", grandTotal);
            }
        }
        setGrandTotal(grandTotal);
    }

    useEffect(() => {
        getGrandTotal();
    }, [billingDetails]);

    function goBack() {
        navigate("/second");
    }

    function onSubmit() {
        toast.success("Submitted!");
    }
    return (
        <React.Fragment>
            <div className="row">
                <div className="row">
                    <div className="third-page-heading">Summary</div>
                </div>

                <div className="row">
                    <div className="row">
                        {billingDetails.details.map((element, index) => (
                            <div key={index} className="row">
                                <div className="col-2">
                                {/* <div key={index} className="col-6">  duplicate key warning in console*/}
                                    <span className="bill-particulars">
                                        {element.name}{" "}
                                    </span>
                                </div>
                                <div className="col-6">
                                {/* <div key={index} className="col-6"> */}
                                    <span className="bill-particulars-value">
                                        : &nbsp; &nbsp; {element.data}
                                    </span>{" "}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row mt-4">
                    <hr />
                </div>

                <div className="row">
                    <div className="col-6">
                        <span className="bill-particulars">Grand Total</span>
                    </div>
                    <div className="col-6">
                        <span className="bill-particulars-value">&nbsp; &nbsp;{grandTotal}</span>
                        {/* <span className="bill-particulars-value">{billingDetails.details.map((element) => (element))}</span> */}
                    </div>
                </div>

                <div className="submit-button-container-3" style={{"marginTop":"100px"}}>
                    <div className="row">
                        <div className="col-5">
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
                                onSubmit={onSubmit}
                            >
                                Pay Now
                            </Button>
                        </div>
                    </div>
                </div>
                <ToastContainer position="bottom-right" icon={false} pauseOnHover theme="dark"/>
            </div>
        </React.Fragment>
    );
}

export default FinalStep;
