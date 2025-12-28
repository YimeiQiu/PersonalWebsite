export default function MainContent() {
  return (
    <main className="p-12 pl-6">
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          I recently graduated from the University of Pittsburgh with a major in
          Philosophy and a certificate in Asian Studies.
        </p>

        {/* Philosophy Section */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-gray-800 mb-4">
            My philosophy researches mostly focus on epistemology and human
            rights, with additional interests in ethics and Asian philosophy.
            But I have always been drawn to a wide range of questions. Recently,
            I have been exploring the connections between David Lewis's
            arguments about knowledge and epistemic challenges in social
            epistemology.
          </p>
          <a
            href="#philosophy-essays"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            View Philosophy Essays →
          </a>
        </div>

        {/* Anthropology Section */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-gray-800 mb-4">
            Another field I am passionate about is anthropology. Most of my
            projects have taken the form of ethnography researches. My fieldwork
            experiences have shown me how valuable it is to immerse myself into
            people's lives. I am specially interested in people's interactions
            with spaces and buildings. My latest research is on how people
            interacts with books, space, and each other in bookstores, utilizing
            participant observation.
          </p>
          <a
            href="#social-science"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            View Social Science Researches →
          </a>
        </div>

        {/* Books Section */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-gray-800 mb-4">
            I have also conducted archival research and book design project.
            Books are the indispensable spice of my life. They captivate me both
            as objects of study and as creative works. I am intrigued by how
            people experience reading, and enjoy contributing to that experience
            through both research and design.
          </p>
          <div className="flex gap-4">
            <a
              href="#archival-research"
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Archival Research →
            </a>
            <a
              href="#crafted-books"
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Crafted Books →
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder sections for content */}
      <section id="philosophy-essays" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Philosophy Essays</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>

      <section id="social-science" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Social Science Researches</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>

      <section id="archival-research" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Archival Research</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>

      <section id="crafted-books" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Crafted Books</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>

      <section id="writing" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Writing</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>

      <section id="photography" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Photography</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>

      <section id="blog" className="mb-12 pt-8 border-t">
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <p className="text-gray-600">Content coming soon...</p>
      </section>
    </main>
  );
}
