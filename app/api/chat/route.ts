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
                        content: "Anda adalah Greeny, AI Assistant cerdas untuk Greenetix Indonesia. Anda ramah, profesional, dan sangat ahli dalam ekonomi sirkular, pengolahan limbah popok (GPLP), dan keberlanjutan. Greenetix Boy adalah inisiator gerakan ini. Gunakan bahasa Indonesia yang sopan dan informatif. Bantu pengguna memahami bagaimana limbah popok diubah menjadi briket, pupuk, dan produk bermanfaat lainnya."
                    },
                    ...messages
                ],
                temperature: 0.7,
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
