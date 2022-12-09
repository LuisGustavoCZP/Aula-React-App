import React, { useState, PropsWithChildren, FunctionComponent, useContext } from "react";
import { IChildrenProps } from "../models/ichildren";
import { Modal } from "./modal";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { UserContext } from "../contexts/usercontext";

interface IFormProps extends PropsWithChildren
{
    textSubmit : string
}

interface State 
{
    
}

function mudarCorBorda (props : IFProps)
{
    return props.borderColor
}

interface IFProps extends PropsWithChildren
{
    borderColor? : string
}

const StyledForm = styled.form<IFProps>`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: ${props => props.borderColor ? props.borderColor : "#777"} solid 1px;
`;

const StyledFormBlueBorder = styled(StyledForm)`
    border: blue solid 1px;
    padding: 5px;
`;

/* interface iEl extends PropsWithChildren {} */
//const El : FunctionComponent<iEl> = ({children}) => <>{children}</>;

export function Formulario ({children, textSubmit} : IFormProps)
{
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const { userData, setUserData } = useContext(UserContext);

    async function submitFormHandle(event : React.FormEvent<HTMLFormElement>) 
    {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());

        const resp = await fetch("http://localhost:8000/user/", {
            method: "POST",
            body: JSON.stringify(body)
        }).then(resp => resp.json());

        setUserData(resp);
        setModalOpened(true);
        console.log(body);
    }

    return (
        <>
            <Modal opened={[modalOpened, setModalOpened]}/>
            {/* {modalOpened ?  : <></>} */}
            <StyledForm onSubmit={submitFormHandle}>
                {children}
                <Button>{textSubmit}</Button>
            </StyledForm>
        </>
    );
}