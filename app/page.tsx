import { Metadata } from "next";

import Squircle from "@/components/Squircle";

export default function Home() {
  return (
    <div className="m-10">
      <Squircle width={300} height={400}>
        <Squircle color={"#333"} width={200} height={200}></Squircle>
      </Squircle>
    </div>
  );
}

export const metadata: Metadata = {
  icons: "🎧",
  title: "준의 블로그",
  description: "정준의 블로그임",
};
