import React from "react";
import { Link, useLocation } from "react-router-dom";

const withLocation = Component => props => {
    const location = useLocation();
  
    return <Component {...props} location={location} />;
  };

const Progress = ({ location: { pathname } }) => {
	const isFirstStep = pathname === "/";
	const isSecondStep = pathname === "/second";
	const isFinalStep = pathname === "/final";

	return (
		<React.Fragment>
				<div className="steps">
					<div className='row'>
                        <div className='col-4'>
                            <div className={`${isFirstStep ? "step step-active" : "step"}`}>1</div>
                        </div>
                        <div className='col-8'>
                            <div className="step-seq">STEP 1</div>
                            <div className="step-name">YOUR INFO</div>
                        </div>
                    </div>
					<div className='row'>
                        <div className='col-4'>
                            <div className={`${isSecondStep ? "step step-active" : "step"}`}>2</div>
                        </div>
                        <div className='col-8'>
                            <div className="step-seq">STEP 2</div>
                            <div className="step-name">SELECT PLAN</div>
                        </div>
                    </div>
					<div className='row'>
                        <div className='col-4'>
                            <div className={`${isFinalStep ? "step step-active" : "step"}`}>3</div>
                        </div>
                        <div className='col-8'>
                            <div className="step-seq">STEP 3</div>
                            <div className="step-name">SUMMARY</div>
                        </div>
                    </div>

				</div>
			
		</React.Fragment>
	);
};

export default withLocation(Progress);
