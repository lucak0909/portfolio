export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Basketball Shooting Form Analyser",
    description:
      "A computer vision system that uses pose estimation and a custom-trained model to track a basketball in real time, analyse shooting form, and give players exact degree corrections to improve their technique, mounted on a servo-controlled auto-tracking camera.",
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
  },
  {
    title: "Corporate Transcript AI Pipeline",
    description:
      "A backend system that ingests hundreds of thousands of corporate meeting and conference transcripts and uses AI to determine whether companies followed through on their stated commitments, used in real financial analysis.",
    tags: ["Python", "AI", "NLP", "Backend"],
  },
  {
    title: "FishingConditions",
    description:
      "A Python app that aggregates live weather, tide, and water data from multiple APIs to give anglers real-time fishing recommendations.",
    tags: ["Python", "APIs", "Data Aggregation"],
  },
  {
    title: "ISE Residency System",
    description:
      "A TypeScript-based residency management system built for university use.",
    tags: ["TypeScript"],
  },
  {
    title: "System Resource Monitoring System",
    description:
      "A Java-based system for monitoring and displaying real-time system resource usage, built as part of a university module.",
    tags: ["Java", "Systems Programming"],
  },
];
