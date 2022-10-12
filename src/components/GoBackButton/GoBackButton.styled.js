import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const Button = styled(Link)`
    display: inline-flex;
    align-items: center;    
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);

    border: 1px solid #9e9e9e;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);

    
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
`