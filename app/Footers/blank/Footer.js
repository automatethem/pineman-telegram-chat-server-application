"use client";
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  if (loading)
    return <>loading</>;

  if (window.location.pathname === '/chat/web-chat') 
    return null;

  return (
    <>
    <hr/>
    푸터
    </>
  );
};
export default Footer;
