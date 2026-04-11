"use client";
// import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="container-fluid px-0 sticky-header">
      <div className="container px-0">
        <Navbar />
      </div>
    </header>
  );
}