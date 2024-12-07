
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="absolute top-0 left-0 w-full p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">My Brand</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-700 hover:text-blue-500">Features</a></li>
              <li><a href="#pricing" className="text-gray-700 hover:text-blue-500">Pricing</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="text-center p-8 mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Landing Page
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Build something amazing with Next.js and Tailwind CSS.
        </p>
        <div>
          <a
            href="#get-started"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-500 transition"
          >
            Get Started
          </a>
        </div>
      </main>

      <footer className="mt-auto w-full p-4 bg-white shadow-t-md">
        <p className="text-center text-sm text-gray-500">
          © 2024 My Brand. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

