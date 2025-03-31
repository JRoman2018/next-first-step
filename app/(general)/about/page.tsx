import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About Page", "José", "información"],
};

export default function page() {
  return <span className="text-7xl">About</span>;
}
