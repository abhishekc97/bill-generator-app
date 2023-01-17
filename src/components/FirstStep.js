import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FirstStep(props) {
	const user = props.user;
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user.name,
			email: user.email,
			phone: user.phone,
		},
	});

	function onSubmit(data) {
		console.log("First step data: ", data);
		props.setUser(data);
		navigate("/second");
	}

	return (
		<div>
			<div className="row">
				<div className="col-8">
					<div className="your-info">Your Information</div>
				</div>
			</div>
			<Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div className="information-input">
						<div className="row">
							<Form.Group controlId="name">
								<Form.Label>
									<span className="information-heading">
										Name
									</span>
								</Form.Label>
								<div className="col-8">
									<Form.Control
										type="text"
										name="name"
										placeholder="Enter your name"
										autoComplete="off"
										{...register("name", {
											required: "Name is required.",
											pattern: {
												value: /^[A-Za-z\s]*$/,
												message:
													"Name should contain only letters, no special characters.",
											},
										})}
										className={`${
											errors.name ? "input-error" : ""
										}`}
									/>
									{errors.name && (
										<div className="errorMsg">
											{errors.name.message}
										</div>
									)}
								</div>
							</Form.Group>
						</div>
					</div>

					<div className="information-input">
						<div className="row">
							<Form.Group controlId="email">
								<Form.Label>
									<span className="information-heading">
										Email
									</span>
								</Form.Label>
								<div className="col-8">
									<Form.Control
										type="text"
										name="email"
										placeholder="Enter your email address"
										autoComplete="off"
										{...register("email", {
											required: "Email is required.",
											pattern: {
												value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
												message: "Email is not valid.",
											},
										})}
										className={`${
											errors.email ? "input-error" : ""
										}`}
									/>
									{errors.email && (
										<div className="errorMsg">
											{errors.email.message}
										</div>
									)}
								</div>
							</Form.Group>
						</div>
					</div>

					<div className="information-input">
						<div className="row">
							<Form.Group controlId="phone">
								<Form.Label>
									<span className="information-heading">
										Phone
									</span>
								</Form.Label>
								<div className="col-8">
									<Form.Control
										name="phone"
										placeholder="Enter your phone mumber"
										autoComplete="off"
										{...register("phone", {
											required: "Phone is required.",
											pattern: {
												value: /^[0-9]{10}$/,
												message:
													"Must be 10 digit number",
											},
										})}
										className={`${
											errors.phone ? "input-error" : ""
										}`}
									/>
									{errors.phone && (
										<div className="errorMsg">
											{errors.phone.message}
										</div>
									)}
								</div>
							</Form.Group>
						</div>
					</div>
				</div>
				<div className="submit-button-container-2">
					<Button className="next-step-button" variant="primary" type="submit">
						Next Step
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default FirstStep;
