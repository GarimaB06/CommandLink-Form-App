import styled from "styled-components";

export const StyledFormWrapper = styled.form`
	display: grid;
	gap: 10px;
	grid-template: 
	"contactTitle contactTitle contactTitle"
	"firstName firstName lastName"
	"Email Email Email"
	"address1 address1 address1"
	"city state zip"
	"phone phone phone"
	"jobTitle jobTitle jobTitle"
	"reason reason reason"
	". sub .";
	@media screen and (max-width: 580px){
	width: 100%;
	grid-template: 
	"contactTitle"
	"firstName"
	"lastName"
	"Email"
	"address1"
	"city"
	"state"
	"zip"
	"phone"
	"jobTitle"
	"reason"
	"sub";
	}
}
`;
