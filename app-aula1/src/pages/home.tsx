import React from 'react';

import {
    useLoaderData,
} from "react-router-dom";

import { Skeleton, Avatar } from '@mui/material';

interface IUserData {
    name: string,
    image: string
}

export function HomePage ()
{
    const userData : IUserData = useLoaderData() as IUserData;
    if(userData)
    {
        return (
            <div>
                <Avatar alt="Remy Sharp" src={userData.image} />
            </div>
        );
    }
    else
    {
        return (
            <div>
                <Skeleton variant="circular" width={40} height={40} />
            </div>
        );
    }
}