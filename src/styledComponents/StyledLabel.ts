import styled from "styled-components";
import { Props } from "../types";
export const StyledLabel = styled.label<Props>`
	display: flex;
	align-items: center;
	color: Black;
	font-family: "Poppins", sans-serif;
	font-size: 14px;
	font-weight: ${(props) => (props.disabled ? "900" : "400")};
	margin-left: 10px;
`;
