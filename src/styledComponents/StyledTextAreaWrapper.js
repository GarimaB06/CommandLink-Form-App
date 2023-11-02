import styled from "styled-components";

export const StyledTextAreaWrapper = styled.textarea`
	width : -webkit-fill-available;
	height: 50px;
	border: none;
	margin-top: 5px;
	background: #ffd5d5;
	color: #5a5a5a;
	border: 1.5px transparent solid;
	resize: vertical;
	&::placeholder {
		color: #5a5a5a;
		padding-top: 10px;
		font-family: "Poppins", sans-serif;
		padding-left: 7px;
	}
	&:hover{
		border: 1.5px black solid;
		background-color: #e4ebe4;
	}
`;
