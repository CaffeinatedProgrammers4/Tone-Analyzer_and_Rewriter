import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tone Analyzer and Rewriter" },
    { name: "description", content: "Start here" },
  ];
}

export default function Home() {
  return <div>Start Writing Code here</div>;
}
