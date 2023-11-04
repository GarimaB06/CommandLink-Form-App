import styled from "styled-components";
import { Props } from "../types/types";

export const StyledParentDivWrapper = styled.div<Props>`
	padding: 10px;
	border-radius: 4px;
	transition: ${(props) =>
		props.disabled ? "background 2s ease-in-out" : "null"};
	background: ${(props) => (props.disabled ? "white" : "#ffd5d5")};
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	&:hover {
		input,
		textarea,
		select {
			transition: ${(props) =>
				props.disabled ? "background 0.3s ease-in-out" : "null"};
			border: ${(props) => (props.disabled ? "null" : "1.5px black solid")};
			background: ${(props) => (props.disabled ? "white" : "#f1c8c8")};
			border-radius: 4px;
		}
		transition: ${(props) =>
			props.disabled ? "background 0.3s ease-in-out" : "null"};
		background: ${(props) => (props.disabled ? "white" : "#f1c8c8")};
	}
`;
