import styled from "@emotion/styled";

export const FormRequest = styled.form`
display: flex;
align-items: center;
padding: 20px;
font-size: 20px;
font-weight: bold;
color: rgba(2, 2, 2, 0.1);
background: #666666;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);

button{
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: rgba(2, 2, 2, 0.1);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
            -23px 0 20px -23px rgba(0, 0, 0, .6),
            23px 0 20px -23px rgba(0, 0, 0, .6),
            inset 0 0 40px rgba(0, 0, 0, .1);
}
}
`

export const FormLabel = styled.label`
margin-right: 4px;
input{    
    font-size: 20px;
    
    color: rgba(2, 2, 2, 0.5);
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
}`
