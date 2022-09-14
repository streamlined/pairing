import styled, {css} from 'styled-components';

export const COLOR_WHITE = "#ffffff";
export const COLOR_BLACK = "#000000";
export const COLOR_LEMON_GREEN = "#C9F549";
export const COLOR_LEMON_GREEN_DARK = "#AEE50D";

export const GAP_SIZE_XXXS = "4px";
export const GAP_SIZE_XXS = "6px";
export const GAP_SIZE_XS = "8px";
export const GAP_SIZE_SM = "12px";
export const GAP_SIZE_MD = "18px";
export const GAP_SIZE_LG = "24px";
export const GAP_SIZE_XL = "32px";

export const FONT_SIZE_SM = "18px";
export const FONT_SIZE_MD = "20px";
export const FONT_SIZE_XXL = "42px";

export const FONT_WEIGHT_NORMAL = "400";
export const FONT_WEIGHT_MEDIUM = "500";
export const FONT_WEIGHT_SEMIBOLD = "600";
export const FONT_WEIGHT_BOLD = "700";

export const baseStyle = ({textAlign, margin, padding, maxWidth, maxHeight, minWidth, minHeight}) => css`
    ${textAlign ? `text-align: ${textAlign};` : ''}
    ${margin ? `margin: ${margin};` : ''}
    ${padding ? `padding: ${padding};` : ''}
    ${maxWidth ? `max-width: ${maxWidth};` : ''}
    ${maxHeight ? `max-height: ${maxHeight};` : ''}
    ${minWidth ? `min-width: ${minWidth};` : ''}
    ${minHeight ? `min-height: ${minHeight};` : ''}
`