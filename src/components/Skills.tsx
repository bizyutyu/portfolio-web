import { skills } from "@/data/skills";

export default function Skills() {
  if (skills.length === 0) return null;

  const categories = Array.from(
    new Set(skills.map((skill) => skill.category ?? "その他"))
  );

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">Skills</h2>
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 font-mono uppercase tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => (skill.category ?? "その他") === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
