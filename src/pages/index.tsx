import { useEffect, useState } from 'react';
import { history } from 'ice';

export default function Home() {
  useEffect(()=>{
    history?.push('/portal/login');
  },[])
  return (
    <></>
  );
}