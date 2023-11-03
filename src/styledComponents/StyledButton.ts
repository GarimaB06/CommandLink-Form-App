import styled from "styled-components";

export const StyledButton = styled.button`
	color: black;
	background-color: #ff4d4d;
	width: 100%;
	height: auto;
	padding: 10px;
	margin-top: 10px;
	border: 1px transparent;
	border-radius: 6px;
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	&:hover {
		transition: 0.3s ease-in-out;
		background-color: black;
		color: #ff4d4d;
	}
`;
