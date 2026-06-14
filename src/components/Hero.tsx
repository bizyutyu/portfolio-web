import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-20"
    >
      <div className="max-w-3xl w-full text-center">
        <Image
          src="/images/profile.png"
          alt="bizyutyu"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-8 ring-2 ring-blue-500/30 object-cover"
          priority
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-mono tracking-tight">
          bizyutyu
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {/* TODO: キャッチコピーを記入 */}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/bizyutyu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
