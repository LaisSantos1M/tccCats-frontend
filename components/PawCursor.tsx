"use client";

import {  useEffect } from "react";

export default function PawCursor() {
  useEffect(() => {
    const cursorPaw = document.getElementById("cursorPaw");

    const handleMouseMove = (event) => {
      if (!cursorPaw) return;

      cursorPaw.style.left = event.clientX + "px";
      cursorPaw.style.top = event.clientY + "px";
    };

    const handleClick = (event) => {
      const paw = document.createElement("div");

      paw.className = "paw";
      paw.style.left = event.clientX + "px";
      paw.style.top = event.clientY + "px";

      paw.innerHTML = `
        <div class="toe toe1"></div>
        <div class="toe toe2"></div>
        <div class="toe toe3"></div>
        <div class="toe toe4"></div>
        <div class="pad"></div>
      `;

      document.body.appendChild(paw);

      setTimeout(() => {
        paw.remove();
      }, 2000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div id="cursorPaw">
      <div className="toe toe1"></div>
      <div className="toe toe2"></div>
      <div className="toe toe3"></div>
      <div className="toe toe4"></div>
      <div className="pad"></div>
    </div>
  );
}