import { Project } from "@/data/portfolio"
import Image from "next/image"

export default function Portfolio({ categories, filteredProjects, setSelectedCategory, selectedCategory }: { categories: string[], filteredProjects: Project[], setSelectedCategory: (category: string) => void, selectedCategory: string }) {
    return (
        <section id="portfolio" className="py-24 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 transition-colors">
            <div className="container">
                {/* Header */}
                <div className="max-w-xl mx-auto text-center mb-12">
                    <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Selected Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        A collection of enterprise-grade applications, internal tools, and scalable systems I&apos;ve engineered.
                    </p>
                </div>

                {/* Filtering buttons */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${selectedCategory === cat
                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                : "border-slate-200 dark:border-slate-800 hover:border-primary/50 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950"
                                }`}
                        >
                            {cat === "All" ? "All Projects" : cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white dark:bg-slate-950 rounded-2xl shadow-xl hover:shadow-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                        >
                            {/* Project Image Panel */}
                            <div className="relative overflow-hidden aspect-video bg-slate-900 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800">
                                {/* Decorative background color overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-cyan-500/10 opacity-30 group-hover:scale-105 transition-transform duration-500" />

                                {/* Image wrapper */}
                                <div className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain rounded-md shadow-lg"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Project Content Panel */}
                            <div className="p-8 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-800">
                                            {project.client}
                                        </span>
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, idx_t) => (
                                            <span
                                                key={idx_t}
                                                className="px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary dark:bg-primary/5 rounded-full border border-primary/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify mb-6 text-sm sm:text-base whitespace-pre-line">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                                    {project.liveUrl || project.githubUrl ? (
                                        <>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold border border-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base block"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base block"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <button
                                            className="flex-1 text-center bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-semibold border border-slate-200 dark:border-slate-800 transition cursor-default text-sm sm:text-base"
                                            disabled
                                        >
                                            {project.type}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}