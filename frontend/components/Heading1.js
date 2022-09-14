import styled from 'styled-components';
import { baseStyle, FONT_SIZE_XXL, FONT_WEIGHT_SEMIBOLD } from '../utils/styled';

const Heading1 = styled.h1`
    ${baseStyle}
    font-size: ${FONT_SIZE_XXL};
    font-weight: ${FONT_WEIGHT_SEMIBOLD};
    line-height: ${FONT_SIZE_XXL};
    margin: 0;
`;

export default Heading1;
