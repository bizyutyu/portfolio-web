import { skills } from "@/data/skills";

export default function Skills() {
  if (skills.length === 0) return null;
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
