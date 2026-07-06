import { Skill } from "@/data/portfolio"
import Image from "next/image"
export default function Skills({ skillsData }: { skillsData: Skill[] }) {
    return (
        <section id="skills" className="py-24 bg-slate-950 text-white relative overflow-hidden transition-all">
            {/* Glow decoration */}
            <div className="absolute -bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[120px]" />

            <div className="container">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
                        Stack
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        My Tech Stack
                    </h2>
                    <p className="text-slate-400">
                        The technologies and frameworks I leverage to engineer robust backend systems and interactive frontends.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                    {skillsData.map((skill, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center justify-center p-6 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-primary/30 rounded-2xl shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1.5"
                        >
                            <div className="relative w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </div>
                            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}