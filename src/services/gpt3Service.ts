import { saveToFirestore } from '../database/firestoreDatabase';
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});

export const sendTranscriptionToGPT = async (transcription: string, promptTemplate: string) => {
    try {
        const prompt = `${promptTemplate} \n ${transcription}`;

        const response = await openai.chat.completions.create({
            messages: [{ "role": "user", "content": prompt }],
            model: "gpt-3.5-turbo",
        });

        console.log(response.choices[0]);

        // Verificar se response.choices[0].message.content é null
        if (response.choices[0].message.content === null) {
            throw new Error('A resposta do GPT-3.5 Turbo é nula');
        }

        // Salvar a resposta no Firestore
        await saveToFirestore(transcription, response.choices[0].message.content);

        return response.choices[0];

    } catch (error) {
        console.error('[ERROR_GPT_API]', error);
        throw new Error('Erro ao enviar a transcrição para o GPT-3.5 Turbo');
    }
};