import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Title",
  description: "Contact Description",
  keywords: ["Contact Page"],
};

export default function page() {
  return <div className="text-5xl">Contact</div>;
}
