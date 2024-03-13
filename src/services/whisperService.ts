import fs from "fs";
import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
});

export const sendAudioToWhisper = async (audioPath: string) => {
  try {
    const audioData = fs.readFileSync(audioPath);
    const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(audioPath),
        model: 'whisper-1'
    })
    console.log('Resposta da API do Whisper:', transcription);
    fs.unlinkSync(audioPath);
    return transcription;
  } catch (error) {
    console.error('[ERROR_WHISPER_API]', error);
    throw new Error('Erro ao enviar o áudio para o Whisper');
  }
};
