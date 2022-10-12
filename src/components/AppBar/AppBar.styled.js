import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
// import { css } from "@emotion/core";

export const Header = styled.header`
    display: flex;
    align-items: center;

    padding: 20px;
    box-shadow: 0px 4px 36px -21px rgba(0, 0, 0, 0.75);
`
export const NavigationLink = styled(NavLink)`
    font-size: 18px;
    font-weight: bold;
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
    text-decoration: none;

    &:hover {
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
    }

    &:not(:last-child) {
        margin-right: 30px;
    }
`