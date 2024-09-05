"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import TopProjectCard from "./TopProjectCard";

export default function TopProject() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // prjects
  const projects = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary...",
      src: "tree.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D",
    },
    {
      title: "Zissou",
      description:
        "Though he views photography as a medium for storytelling...",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
    },
  ];

  return (
    <main ref={container} className="min-h-screen relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <TopProjectCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
