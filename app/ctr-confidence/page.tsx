import type { Metadata } from "next";
import CtrConfidenceClient from "./CtrConfidenceClient";

export const metadata: Metadata = {
  title: "CTR Bounds & Confidence Intervals",
  description: "Interactive page to compare Hoeffding, Wilson, and UCB for keyword CTR decisions.",
};

export default function Page() {
  return <CtrConfidenceClient />;
}
