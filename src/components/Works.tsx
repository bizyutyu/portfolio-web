import Image from "next/image";
import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work) => (
            <article
              key={work.id}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              {work.image && (
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{work.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {work.github && (
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      Site →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
