import styled from "styled-components";

export const StyledInput = styled.input`
    padding: 10px;
    margin-top: 5px;
	background: #ffd5d5;
	width : -webkit-fill-available;
	border: 1.5px solid transparent;
	&::placeholder {
		font-family: "Poppins", sans-serif;
		color:#5a5a5a;;
		margin-left: 10px;
	}
	&:hover{
		background-color: #f1c8c8;
	}
`;