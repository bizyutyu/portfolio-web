export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p className="font-mono">bizyutyu</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/bizyutyu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          {/* TODO: ドメインB（ハンドルサイト）のURL確定後に置き換える。現在はプレースホルダー (#30) */}
          <a
            href="https://example.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            その他の活動
          </a>
        </div>
      </div>
    </footer>
  );
}
