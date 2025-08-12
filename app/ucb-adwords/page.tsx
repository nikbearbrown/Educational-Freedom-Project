import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UCB for Google Ads",
  description: "UCB Algorithm Application",
};

export default function UCBPage() {
  return (
    <div className="container px-4 mx-auto py-12">
      <h1 className="text-3xl font-bold">UCB for Google Ads</h1>
      <p>Test page to check compilation</p>
    </div>
  );
}
