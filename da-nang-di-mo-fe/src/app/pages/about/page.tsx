"use client";
import Link from "next/link";
import useSWR from 'swr';
import { LoadingCircleSpinner } from "../../loading/loadingSpinner";
export default function About() {
  const fetcher = (args:string) => fetch(args).then(res => res.json())
   const { data, error, isLoading,isValidating } = useSWR('http://localhost:3000/rest/fooditems', fetcher)
if (isLoading) return <LoadingCircleSpinner />
if (isValidating) return <LoadingCircleSpinner />
if (error) return <div>Lỗi khi tải dữ liệu</div>

   console.log(data);
   
  return (
    <div>
    
      <h1>About Us</h1>
      <p>Welcome to our website! This is the About page.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
