import Image from "next/image";

const skills = [
  "Haskell",
  "形式手法",
  "TypeScript",
  "Next.js",
  "React",
  "関数型プログラミング",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/profile.png"
              alt="bizyutyu"
              width={320}
              height={320}
              className="rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              宮崎大学在学中のエンジニアです。Haskell や Coq などの関数型言語・形式手法に興味があり、プログラムの正確性を数学的に保証することに魅力を感じています。
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Web 開発では Next.js / TypeScript を中心に制作を行っています。
            </p>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                Skills &amp; Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
