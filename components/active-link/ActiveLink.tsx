"use client"; // Ensure this is a Client Component
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname(); // Get current route

  const isActive = pathname === path; // Check if link is active
  return (
    <Link
      prefetch={false}
      className={`hover:underline hover:text-blue-400 mr-2 transition-all ${
        isActive ? "text-blue-500" : ""
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
