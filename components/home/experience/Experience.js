import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Client Project",
    position: "Web Developer",
    time: "2022 - Present",
    location: "Anywhere",
    description:
      "Worked independently with a diverse range of clients to develop custom websites tailored to their specific needs. Collaborated closely with clients to gather requirements, design user interfaces, and implement responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Sanity", "Tailwind"],
  },
  {
    title: "E-commerce",
    position: "Web Developer ",
    time: "2021 - 2022",
    location: "Client",
    description:
      "Led the development and maintenance of an e-commerce platform, ensuring smooth functionality and optimal user experience.Integrated payment gateways, shopping carts, and inventory management systems to facilitate seamless online transactions",
    tech: [ "PHP", "MySQL","JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web App",
    position: "Web Developer",
    time: "2022 - 2022",
    location: "Client",
    description:
      "Played a key role helping clients to do prototyping for web applications.",
    tech: [
      "Node Js",
      "Express",
      "React",

    ],
  },
];
