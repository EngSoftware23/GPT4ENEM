import { saveToFirestore } from '../database/firestoreDatabase';
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});

export const sendTranscriptionToGPT = async (uid: string, transcription: string, promptTemplate: string) => {
    try {
        const prompt = `${promptTemplate} \n ${transcription}`;

        const response = await openai.chat.completions.create({
            messages: [{ "role": "user", "content": prompt }],
            model: "gpt-3.5-turbo",
        });

        console.log(response.choices[0]);

        let gptResponseContent = response.choices[0]?.message?.content || 'O GPT-3.5 Turbo não forneceu uma resposta';


        await saveToFirestore(uid,transcription, gptResponseContent);

        return response.choices[0];

    } catch (error) {
        console.error('[ERROR_GPT_API]', error);
        throw new Error('Erro ao enviar a transcrição para o GPT-3.5 Turbo');
    }
};