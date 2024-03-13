import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});

export const sendTranscriptionToGPT = async (transcription: string) => {
    try {
        
        const prompt = `Faça uma resumo academico desse texto separando os conteudos em subtopicos e dando um explicação detalhada do que foi abordado \n ${transcription}`;

       
        const response = await openai.chat.completions.create({
            messages: [{ "role": "user", "content": prompt }],
            model: "gpt-3.5-turbo",
        });

        console.log(response.choices[0]);
        return response.choices[0];
    } catch (error) {
        console.error('[ERROR_GPT_API]', error);
        throw new Error('Erro ao enviar a transcrição para o GPT-3.5 Turbo');
    }
};
