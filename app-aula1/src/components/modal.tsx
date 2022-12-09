import React, { CSSProperties, Dispatch, useEffect, useState } from "react";

enum IModalMode
{
    Neutral = 0,
    Sucess = 1,
    Fail = 2
}

interface IModalProps 
{
    opened: [boolean, Dispatch<boolean>];
    mode?: IModalMode;
    //closeFunc: Dispatch<boolean>;
}

export function Modal ({opened, mode = 0} : IModalProps)
{
    const [modalOpened, setModalOpened] = opened;
    const [tremer, setTremer] = useState(false);
    const [checado, setChecado] = useState(false);

    const backStyle : CSSProperties = {
        display: "flex",
        zIndex: 5,
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,.5)",
        justifyContent: "center",
        alignItems: "center",
    };

    const innerStyle : CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "50%",
        background: "rgba(255,255,255,1)",
        color: mode == 2? "rgba(200,0,0,1)" : mode == 1? "rgba(0,200,0,1)" : "rgba(0,0,0,1)"
    };

    const topStyle : CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
        background: "rgb(120, 120, 120)"
    }

    const closeStyle : CSSProperties = {
        width: "fit-content"
    }

    function close ()
    {
        console.log(checado);
        if(!checado) 
        {
            setTremer(true);
            timeout ();
            return;
        }
        //setChecado(false);
        setModalOpened(false);
    }

    async function timeout ()
    {
        await new Promise ((resolve) => 
        {
            setTimeout(resolve, 1000);
        })
        setTremer(false);
    }

    useEffect(()=>
    {
        if(!checado) return;
        return () => setChecado(false);
    }, []);

    if(!modalOpened) return <></>;
    return (
        <div style={backStyle} onClick={close}>
            <div className={tremer?"tremerModal":""} style={innerStyle} onClick={(e : React.MouseEvent) => e.stopPropagation()}>
                <div style={topStyle}>
                    <button style={closeStyle} onClick={close}>X</button>
                </div>
                <h2></h2>
                <input type="checkbox" onChange={(e : React.ChangeEvent) => 
                {
                    const checkbox = e.target as HTMLInputElement;
                    if(checkbox.checked) console.log("Setando para true!");
                    setChecado(checkbox.checked);
                }}/>
                <p></p>
            </div>
        </div>
    );
}