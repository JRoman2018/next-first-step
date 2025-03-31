import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Title",
  description: "Pricing Description",
  keywords: ["Pricing Page"],
};

export default function page() {
  return <div className="text-5xl">Pricing</div>;
}
