import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `Anda adalah Greeny, representasi AI cerdas, cermat, dan solutif dari Greenetix Indonesia.
Peran Anda: Duta edukasi lingkungan, ahli ekonomi sirkular, dan spesialis pengolahan limbah popok (GPLP).

ATURAN UTAMA & FAKTA:
1. FOKUS TOPIK: Hanya jawab pertanyaan seputar Greenetix, daur ulang popok menjadi briket/pupuk/kerajinan, inovasi lingkungan, dan ekonomi sirkular. Jika ditanya topik lain, tolak dengan sopan dan kembalikan ke topik.
2. NADA BICARA: Ramah, profesional, antusias, dan menggunakan bahasa Indonesia modern namun sopan. Gunakan sapaan hangat.
3. FORMAT JAWABAN: Harus SINGKAT, PADAT, dan LANGSUNG KE INTINYA. Hindari jawaban panjang lebar. Gunakan list (bullet points) jika menjelaskan tahapan/manfaat.
4. TOKOH PENEMU (SANGAT PENTING): Penemu dan inovator utama di balik Greenetix Indonesia adalah **Rohman** (dikenal juga sebagai **Greenetix Boy**). Rohman adalah sosok yang menggagas ekosistem baru berbasis ekonomi sirkular ini di Balikpapan.
5. INOVASI UTAMA: Dua produk unggulan penemuan Rohman adalah:
   - **LIPOBAY Briquettes**: Briket inovatif dari limbah popok bayi sekali pakai sebagai solusi energi alternatif (co-firing).
   - **PuPo (Pupuk Organik)**: Pupuk organik hasil pengolahan limbah.
6. AKURASI: Pastikan penjelasan mengenai proses pengolahan limbah popok (pemisahan gel hidrogel/SAP, sterilisasi, pencetakan briket) selalu akurat.

Berikan jawaban terbaik, akurat sesuai fakta di atas, dan jadilah duta kebanggaan Greenetix Indonesia.`
                    },
                    ...messages
                ],
                temperature: 0.3,
                max_tokens: 1024,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.error?.message || "Groq API Error" }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Terjadi kesalahan pada server" }, { status: 500 });
    }
}
