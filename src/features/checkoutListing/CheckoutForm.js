import React from "react";
import { Field, reduxForm } from "redux-form";

export default function CheckoutForm(props) {
	const { handleSubmit, pristine } = props;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="order[name]">Your name:</label> <br />
					<Field name="order[name]" component="input" type="text" />
				</div>
				<div>
					<label htmlFor="order[email]">Your email:</label> <br />
					<Field name="order[email]" component="input" type="email" />
				</div>

				<div>
					<label htmlFor="order[gift]">Gift</label>
					<div>
						<Field name="order[gift]" component="input" type="checkbox" />
					</div>

					<div>
						<label htmlFor="order[message]">Your message:</label> <br />
						<Field name="order[message]" component="input" type="text" />
					</div>
				</div>

				<div>
					<button type="submit" disabled={pristine}>
						Submit order
					</button>
				</div>
			</form>
		</div>
	);
}

// eslint-disable-next-line
CheckoutForm = reduxForm({
	form: "checkout"
})(CheckoutForm);
