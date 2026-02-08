export default function Footer() {
  return (
    <footer className="bg-gray-500 border-t border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <p className="text-base font-semibold text-white">
          © {new Date().getFullYear()} WebSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
