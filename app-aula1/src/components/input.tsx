import { ChangeEvent } from "react";

export function Input ({type, name, change, value} : {type: string, name?: string, change: (value : string) => void, value: string})
{
    const changeNameHandle = (e : ChangeEvent) =>
    {
        change((e.target as HTMLInputElement).value);
    }

    return <input type={type} name={name} onChange={changeNameHandle} value={value} />
}