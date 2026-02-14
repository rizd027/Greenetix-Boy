"use client";

import Image from "next/image";
import { Star, Trophy } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Yafet",
        role: "Co-Founder",
        image: "yafet.png"
    },
    {
        name: "Rohman",
        role: "Co-Founder",
        image: "rohman.png"
    },
    {
        name: "Arief F",
        role: "Co-Founder",
        image: "arief.png"
    }
];

export default function Team() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-5xl font-black text-center text-primary-800 mb-3 md:mb-4 uppercase tracking-tight">
                    Tim Kami
                </h2>
                <p className="text-center text-primary-600 text-sm md:text-xl mb-12 md:mb-16 max-w-3xl mx-auto font-medium">
                    Bersama membangun masa depan berkelanjutan
                </p>

                {/* Group Photo */}
                <div className="max-w-4xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full aspect-[4/3] md:h-[600px]">
                        <Image
                            src="team-bersama.png"
                            alt="Tim Greenetix Boy"
                            fill
                            className="object-contain md:object-cover bg-white"
                            priority
                            sizes="(max-width: 1024px) 100vw, 896px"
                        />
                    </div>
                </div>

                {/* Team Success Banner */}
                <div className="max-w-4xl mx-auto mb-12 md:mb-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full">
                                <Star size={24} fill="currentColor" className="text-white md:hidden" />
                                <Star size={40} fill="currentColor" className="text-white hidden md:block" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-2xl font-black uppercase">SELAMAT & SUKSES</h3>
                                <p className="text-white/90 text-xs md:text-base font-medium">LOLOS DAN MAJU TAHAP BOOTCAMP 2</p>
                            </div>
                        </div>
                        <div className="bg-white px-5 py-2 md:px-6 md:py-3 rounded-full">
                            <p className="text-primary-700 font-black text-sm md:text-lg">SHELL LIVE WIRE 2025</p>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-primary-50 to-cream-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
                        >
                            <div className="p-6 md:p-8">
                                <div className="relative w-full h-64 md:h-80 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden bg-white group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-primary-800 text-center mb-1 md:mb-2 uppercase">
                                    {member.name}
                                </h3>
                                <p className="text-primary-600 text-center text-xs md:text-base font-bold uppercase tracking-wider">
                                    {member.role}
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Achievement Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <Trophy size={24} />
                        <p className="font-bold text-lg">Shell LiveWire Bootcamp 2 Participants 2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
