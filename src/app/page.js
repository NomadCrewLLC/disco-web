// "use client"
import {Navigation} from './ui/Navigation.js'
import {HeroSection} from './ui/HeroSection.js'


export default function Home() {
  return (
    <main className="overflow-y- min-h-screen scroll-smooth bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">

      {/* NavBar */}
      <Navigation />
      <HeroSection
        theme="light"
        headlineNode={<h1>This is your <span className="text-accent">product headline</span>, AKA your main value prop</h1>}
        subheadlineText={'This should contain a supporting statement that explains more specifically what the product is or does and for who.'}
        imageSrc="https://ampire-lite.tailus.io/images/team.svg"
        primaryCTAText="Primary CTA"
        secondaryCTAText="Secondary CTA"
      />

      <section id="features" class="dark bg-background text-foreground relative pb-32 pt-32">
            <div aria-hidden="true" class="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                <div class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div class="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="text-center">
                    <h2 class="text-4xl font-bold text-gray-800 dark:text-white xl:text-5xl">A technology-first approach</h2>
                    <p class="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn&apos;t need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>
                </div>
                <div class="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
                    <div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                        <div class="space-y-12 text-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/584/584796.png" class="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                            <div class="space-y-6">
                                <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">First feature</h3>
                                <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                                <a aria-label="read more" href="#" class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="-transtransition-transform relative h-5 w-5 text-gray-600 duration-300 group-hover:translate-x-1 dark:text-white">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                        <div class="space-y-12 text-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png" class="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                            <div class="space-y-6">
                                <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">Second feature</h3>
                                <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                                <a aria-label="read more" href="#" class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                        <div class="space-y-12 text-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" class="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                            <div class="space-y-6">
                                <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">Third feature</h3>
                                <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                                <a aria-label="read more" href="#" class="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
  );
}
