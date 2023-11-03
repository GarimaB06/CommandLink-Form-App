import styled from "styled-components";
import { Props } from "../types";

export const StyledTextAreaWrapper = styled.textarea<Props>`
	width: -webkit-fill-available;
	height: 50px;
	border: none;
	margin-top: 5px;
	padding: 10px;
	transition: ${(props) =>
		props.disabled ? "background 2s ease-in-out" : "none"};
	background: ${(props) => (props.disabled ? "white" : "#ffd5d5")};
	color: #5a5a5a;
	border: ${(props) => (props.disabled ? "none" : "1.5px black solid")};
	border-radius: 4px;
	resize: vertical;
	&::placeholder {
		color: #5a5a5a;
		font-family: "Poppins", sans-serif;
	}
	&:hover {
		border: ${(props) => (props.disabled ? "none" : "1.5px black solid")};
		background-color: #e4ebe4;
	}
`;
