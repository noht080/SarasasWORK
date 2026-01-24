import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I am a software engineering student preparing for university. I love
            building projects that help me learn new technologies and solve real
            problems.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            My current focus is on web development with React and Next.js, along
            with TypeScript for safer code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I believe in learning by doing and sharing what I learn along the
            way.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
