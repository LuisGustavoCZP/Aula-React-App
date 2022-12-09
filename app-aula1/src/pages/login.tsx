import React, { useId } from 'react';
import { Formulario } from '../components';

export function LoginPage ()
{
    const emailId = useId();
    const nameId = useId();
    const passwordId = useId();
    return (
        <Formulario textSubmit="Entrar">
            {/* <label htmlFor={emailId}>Email</label> */}
            <input id={emailId} name="email" type="email" required placeholder="Email" />
            {/* <label htmlFor={nameId}>Name</label> */}
            <input id={nameId} name="name" required placeholder="Name" min={1} pattern="^[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){0,}$" />
            {/* <label htmlFor={passwordId}>Password</label> */}
            <input id={passwordId} name="password" type="password" required placeholder="Password" />
        </Formulario>
    );
}