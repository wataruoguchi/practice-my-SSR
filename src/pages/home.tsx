export function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header class="w-full px-6 py-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-2xl font-bold text-gray-800 dark:text-white">
            My Personal Blog
          </div>
          <nav class="space-x-6">
            <a
              class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              href="#"
              rel="ugc"
            >
              Home
            </a>
            <a
              class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              href="#"
              rel="ugc"
            >
              About
            </a>
            <a
              class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              href="#"
              rel="ugc"
            >
              Blog
            </a>
            <a
              class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              href="#"
              rel="ugc"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main class="flex flex-grow">
        <div class="container mx-auto px-6 py-4 flex flex-col md:flex-row md:space-x-6">
          <div class="w-full md:w-2/3">
            <div class="flex items-center space-x-4">
              <h2 class="text-xl font-bold text-gray-800 dark:text-white">
                Latest Blogs
              </h2>
              <div class="h-1 w-full bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div class="mt-6 space-y-6">
              <article class="bg-white dark:bg-gray-800 rounded-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="blog post image"
                  height="200"
                  width="500"
                  class="object-cover w-full h-64"
                  style="aspect-ratio:500/200;object-fit:cover"
                />
                <div class="p-6 space-y-4">
                  <div>
                    <span class="text-sm font-medium text-indigo-500">
                      Category
                    </span>
                    <a
                      href="#"
                      class="block mt-2 text-3xl font-bold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
                      rel="ugc"
                    >
                      Blog Post 1
                    </a>
                  </div>
                  <p class="text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna.
                  </p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                      <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                      <div class="text-sm text-gray-500 dark:text-gray-200">
                        Author Name
                      </div>
                      <div class="text-sm text-gray-500 dark:text-gray-200">
                        21 SEP 2023
                      </div>
                    </div>
                    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <aside class="w-full md:w-1/3 mt-8 md:mt-0">
            <div class="mb-8">
              <h5 class="text-lg font-bold text-gray-800 dark:text-white">
                Search
              </h5>
              <div class="mt-2 relative rounded-md shadow-sm">
                <input
                  type="text"
                  class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search posts..."
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5 text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mb-8">
              <h5 class="text-lg font-bold text-gray-800 dark:text-white">
                Categories
              </h5>
              <ul class="mt-4 space-y-2">
                <li>
                  <a
                    class="text-gray-600 dark:text-gray-300 hover:underline"
                    href="#"
                    rel="ugc"
                  >
                    Category 1
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 dark:text-gray-300 hover:underline"
                    href="#"
                    rel="ugc"
                  >
                    Category 2
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 dark:text-gray-300 hover:underline"
                    href="#"
                    rel="ugc"
                  >
                    Category 3
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 class="text-lg font-bold text-gray-800 dark:text-white">
                Recent Posts
              </h5>
              <ul class="mt-4 space-y-2">
                <li>
                  <a
                    class="text-gray-600 dark:text-gray-300 hover:underline"
                    href="#"
                    rel="ugc"
                  >
                    Recent Post 1
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 dark:text-gray-300 hover:underline"
                    href="#"
                    rel="ugc"
                  >
                    Recent Post 2
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 dark:text-gray-300 hover:underline"
                    href="#"
                    rel="ugc"
                  >
                    Recent Post 3
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <footer class="w-full bg-gray-800">
        <div class="container mx-auto px-6 py-4 text-center text-gray-200">
          <ul class="flex flex-wrap justify-center space-x-6 md:order-2">
            <li>
              <a class="hover:underline" href="#" rel="ugc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a class="hover:underline" href="#" rel="ugc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span class="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a class="hover:underline" href="#" rel="ugc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a class="hover:underline" href="#" rel="ugc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
          <div class="mt-4 md:mt-0 md:order-1">
            <p class="text-sm text-gray-300">
              © 2023 by My Personal Blog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
