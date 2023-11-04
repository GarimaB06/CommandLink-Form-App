import { updateFormVal } from "../features/form/formSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { RootState } from "../store";
import { FieldObject } from "../types/types";
import {
	StyledApp,
	StyledTitle,
	StyledFormWrapper,
	StyledParentDivWrapper,
	StyledButton,
	StyledInput,
	StyledLabel,
	StyledTextAreaWrapper,
	StyledSelectWrapper,
} from "../styledComponents/Stylesheet.styled";
import {
	sortFormDataByLevels,
	camelCaseToTitleCase,
} from "../utils/utilityFunction";

export const Form: React.FC = () => {
	const [sortedArr, setSortedArr] = useState<FieldObject[]>([]);
	const [submitted, setSubmitted] = useState<boolean>(false);

	const formData = useSelector((state: RootState) => state.form);
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		/*
		 * This function takes the flattened data object and sorts
		 * its data by levels and returns a sorted array of data objects
		 */
		setSortedArr(sortFormDataByLevels(formData));
	}, [formData]);

	const handleInputChange = (
		e:
			| React.FormEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>,
		id: string
	): void => {
		const target = e.target as
			| HTMLInputElement
			| HTMLTextAreaElement
			| HTMLSelectElement;
		dispatch(updateFormVal({ id, value: target.value }));
	};

	/*
	 * This method renders the input type based on the typed state
	 */

	const renderInputType = (
		type: string,
		id: string,
		placeholder?: string,
		required?: boolean,
		options?: string[]
	) => {
		let inputType: string = "text";
		let pattern;
		if (id.toLowerCase() === "email") inputType = "email";
		else if (id.toLowerCase() === "phone") {
			inputType = "tel";
			pattern = "[0-9]{10}";
		}
		switch (type) {
			case "text":
				return (
					<StyledInput
						type={inputType}
						placeholder={placeholder}
						required={required}
						pattern={pattern}
						onChange={(e) => handleInputChange(e, id)}
						disabled={submitted}
						id={id}
						aria-label={id}
					/>
				);
			case "select":
				return (
					<StyledSelectWrapper
						required={required}
						onChange={(e) => handleInputChange(e, id)}
						disabled={submitted}
						id={id}
						aria-label={id}
					>
						<option>{placeholder}</option>
						{options?.map((optionString: string, index) => (
							<option value={optionString} key={`${index}${optionString}`}>
								{optionString}
							</option>
						))}
					</StyledSelectWrapper>
				);
			case "textarea":
				return (
					<StyledTextAreaWrapper
						placeholder={placeholder}
						required={required}
						onChange={(e) => handleInputChange(e, id)}
						disabled={submitted}
						id={id}
						aria-label={id}
					></StyledTextAreaWrapper>
				);
			default:
				return null;
		}
	};

	return (
		<StyledApp className="App">
			<StyledFormWrapper
				onSubmit={(e) => {
					e.preventDefault();
					setSubmitted(true);
				}}
			>
				<StyledParentDivWrapper
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "#ffd5d5",
						gridArea: "contactTitle",
					}}
					aria-label="contact-form"
					disabled={submitted}
				>
					{submitted ? (
						<StyledTitle>Thank you for your submission!</StyledTitle>
					) : (
						<StyledTitle>Contact Form</StyledTitle>
					)}
				</StyledParentDivWrapper>
				{sortedArr.map((fieldObject, index) => (
					<StyledParentDivWrapper
						disabled={submitted}
						style={{ gridArea: fieldObject.id }}
						key={`${fieldObject.level}-${index}`}
					>
						<StyledLabel disabled={submitted} htmlFor={fieldObject.id}>
							{camelCaseToTitleCase(fieldObject.id)}
						</StyledLabel>
						{renderInputType(
							fieldObject.type,
							fieldObject.id,
							fieldObject.placeholder,
							fieldObject.required,
							fieldObject.options
						)}
					</StyledParentDivWrapper>
				))}
				{submitted ? null : (
					<StyledButton
						style={{ gridArea: "sub" }}
						type="submit"
						aria-label="Submit"
					>
						Submit
					</StyledButton>
				)}
			</StyledFormWrapper>
		</StyledApp>
	);
};
