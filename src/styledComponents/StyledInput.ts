import styled from "styled-components";

type Props = {
	disabled: boolean;
};
export const StyledInput = styled.input<Props>`
	padding: 10px;
	margin-top: 5px;
	background: #ffd5d5;
	border: 1.5px solid transparent;
	transition: ${(props) => (props.disabled ? "2s ease-in-out" : "null")};
	background: ${(props) => (props.disabled ? "white" : "#ffd5d5")};
	width: -webkit-fill-available;
	&::placeholder {
		font-family: "Poppins", sans-serif;
		color: #5a5a5a;
		margin-left: 10px;
	}
	&:hover {
		background-color: ${(props) => (props.disabled ? "white" : "#f1c8c8")};
	}
`;
