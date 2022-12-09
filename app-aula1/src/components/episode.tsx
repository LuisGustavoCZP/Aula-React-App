import { useEffect, useState } from "react";

interface APIResponse <T>
{
    info: string,
    results: T
}

interface IEpisodeData 
{
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[]
}

export function EpisodeCard ({id} : {id:number})
{
    const [data, setData] = useState<IEpisodeData | null>(null);
    

    async function loadEpisode ()
    {
        const resp : IEpisodeData = await fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(resp => resp.json());
        console.log(resp.name);
        setData(resp);
    }

    function x () 
    {
        loadEpisode ();
        return 
    }

    useEffect(x, [id]);

    return (
        <div id="content">
            <h2>Episode {id}</h2>
        </div>
    );
}