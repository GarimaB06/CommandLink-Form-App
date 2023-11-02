import styled from "styled-components";

export const StyledParentDivWrapper = styled.div`	
	padding: 10px;
	border-radius: 4px;
	background: #ffd5d5;
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	&:hover {
		input{
		transition: 0.3s ease-in-out;
		border: 1.5px black solid;
		background-color: #f1c8c8;
		border-radius: 4px
		}
		textarea{
		transition: 0.3s ease-in-out;
		border: 1.5px black solid;
		background-color: #f1c8c8;
		border-radius: 4px
		}
		select{
		transition: 0.3s ease-in-out;
		border: 1.5px black solid;
		background-color: #f1c8c8;
		border-radius: 4px
		}
		transition: 0.3s ease-in-out;
		background-color: #f1c8c8;
	}
`;