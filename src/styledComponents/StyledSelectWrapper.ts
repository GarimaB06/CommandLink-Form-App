import styled from "styled-components";
import { Props } from "../types";

export const StyledSelectWrapper = styled.select<Props>`
	color: #5a5a5a;
	transition: ${(props) => (props.disabled ? "2s ease-in-out" : "null")};
	background: ${(props) => (props.disabled ? "white" : "#ffd5d5")};
	margin-top: 8px;
	width: -webkit-fill-available;
	height: 40px;
	border-radius: 4px;
	border: ${(props) => (props.disabled ? "none" : "1.5px black solid")};
	-webkit-appearance: ${(props) => props.disabled && "none"};
	&:hover {
		background-color: #e4ebe4;
	}
`;
