"use client"
import React from 'react'
import { useState } from 'react'
import { logOut, logIn } from '@/redux/feature/authSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

type Props = {}

export default function login({}: Props) {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const onClickLogin = () => {
        dispatch(logIn(username));
    };

    const onClickToggle = () => {};

    const onClickLogout = () => {};


  return (
    <div>
        <input color='#000' type="text" onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <button onClick={onClickLogin}>Login</button>
        <br/>
        <button>Logout</button>
        <br/>
        <button>Toggle moderator status</button>
    </div>
  )
}