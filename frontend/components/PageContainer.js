import React from 'react';
import styled from 'styled-components';
import { COLOR_BLACK, COLOR_WHITE, GAP_SIZE_SM } from '../utils/styled';

const StyledPageContainer = styled.div`
    background-color: ${COLOR_WHITE};
    border: 2px solid ${COLOR_BLACK};
    min-height: 400px;
    max-width: 550px;
    margin: 20vh auto;
    position: relative;
`;

const StyledShadow = styled.div`
    background-color: ${COLOR_BLACK};
    width: 100%;
    height: 100%;
    z-index: -10;
    position: absolute;
    transform: translate(10px, 10px);
`;

export const PageContainer = ({children, ...props}) => {
    return (
        <StyledPageContainer>
            <StyledShadow />
            {children}
        </StyledPageContainer>
    );
}

export default PageContainer;