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
        image: "/yafet.png"
    },
    {
        name: "Rohman",
        role: "Co-Founder",
        image: "/rohman.png"
    },
    {
        name: "Arief F",
        role: "Co-Founder",
        image: "/arief.png"
    }
];

export default function Team() {
    return (
        <section id="team" className="py-12 md:py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-5xl font-bold text-center text-primary-800 mb-2 md:mb-4">
                    Tim Kami
                </h2>
                <p className="text-center text-primary-600 text-sm md:text-xl mb-10 md:mb-16 max-w-3xl mx-auto">
                    Bersama membangun masa depan berkelanjutan
                </p>

                {/* Group Photo */}
                <div className="max-w-4xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative w-full aspect-[4/3] md:h-[600px]">
                        <Image
                            src="/team-bersama.png"
                            alt="Tim Greenetix Boy"
                            fill
                            className="object-contain md:object-cover bg-white"
                            priority
                        />
                    </div>
                </div>

                {/* Team Success Banner */}
                <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-3xl shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                                <Star size={40} fill="currentColor" className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">SELAMAT & SUKSES</h3>
                                <p className="text-white/90">LOLOS DAN MAJU TAHAP BOOTCAMP 2</p>
                            </div>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full">
                            <p className="text-primary-700 font-bold text-lg">SHELL LIVE WIRE 2025</p>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-primary-50 to-cream-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                        >
                            <div className="p-6 md:p-8">
                                <div className="relative w-full h-64 md:h-80 mx-auto mb-4 md:mb-6 rounded-2xl overflow-hidden bg-white group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-primary-800 text-center mb-0.5 md:mb-2 text-clip">
                                    {member.name}
                                </h3>
                                <p className="text-primary-600 text-center font-medium text-[10px] md:text-base">
                                    {member.role}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Achievement Badge */}
                <div className="mt-10 md:mt-16 text-center px-4">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <Trophy size={20} className="md:w-6 md:h-6" />
                        <p className="font-bold text-sm md:text-lg uppercase md:normal-case tracking-wide md:tracking-normal">Shell LiveWire Bootcamp 2 Participants 2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
