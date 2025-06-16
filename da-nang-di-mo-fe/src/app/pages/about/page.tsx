"use client";
import Link from "next/link";
import {HeaderBar} from "../../components/Header";

export default function About() {
  return (
    <div>
      <HeaderBar />
      <h1>About Us</h1>
      <p>Welcome to our website! This is the About page.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
