import React from 'react';
import styled from 'styled-components';
import { 
    COLOR_BLACK, 
    COLOR_LEMON_GREEN, 
    COLOR_LEMON_GREEN_DARK, 
    FONT_SIZE_SM, 
    GAP_SIZE_MD, 
    GAP_SIZE_SM
} from '../utils/styled';

export const StyledPrimaryButton = styled.button`
    transition: all 0.2s ease-out;
    background-color: ${COLOR_LEMON_GREEN};
    border: 2px solid ${COLOR_BLACK};
    padding: ${GAP_SIZE_SM} ${GAP_SIZE_MD};
    font-size: ${FONT_SIZE_SM};
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: ${COLOR_LEMON_GREEN_DARK};
    }
`;

const StyledButtonWrapper = styled.div`
    position: relative;
    z-index: 5;
    &:hover {
        .button-shadow {
            transform: translate(2px, 2px);
        }
    }
`;

const StyledShadow = styled.div`
    transition: all 0.2s ease-out;
    background-color: ${COLOR_BLACK};
    width: 100%;
    height: 100%;
    z-index: -9;
    position: absolute;
    transform: translate(5px, 5px);
`;


export const PrimaryButton = ({children, ...props}) => {
    return (
        <StyledButtonWrapper>
            <StyledShadow className="button-shadow" />
            <StyledPrimaryButton {...props}>
                {children}
            </StyledPrimaryButton>
        </StyledButtonWrapper>
    );
}

export default PrimaryButton;