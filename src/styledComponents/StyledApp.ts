import styled from "styled-components";

export const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	margin-bottom: 40px;
	height: 100%;
	@media screen and (max-width: 580px) {
		width: 100%;
		margin-top: 40px;
		margin-bottom: 40px;
	}
`;
