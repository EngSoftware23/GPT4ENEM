import { Request, Response } from 'express';
import { sendAudioToWhisper } from '../services/whisperService';
import { sendTranscriptionToGPT } from '../services/gpt3Service';
const ytdl = require('ytdl-core');
const fs = require('fs');

export const downloadAudio = async (req: Request, res: Response) => {
    try {
        const { uid, videoId } = req.body; 

        if (!uid || !videoId) {
          return res.status(400).json({ error: 'UID do usuário ou URL do vídeo não fornecidos' });
      }

        const videoURL = `https://youtube.com/watch?v=${videoId}`;

        console.log('[START_DOWNLOAD] ', videoURL);

        const audioFileName = 'audio.mp3';
        const audioPath = `./${audioFileName}`;

        ytdl(videoURL, {
            quality: 'lowestaudio',
            filter: 'audioonly',
            format: 'mp3'
        })
            .on('end', async () => {
                console.log('[FINISHED_DOWNLOAD]');
                try {
                    const transcription = await sendAudioToWhisper(audioPath);
                    if (req.originalUrl === `/revisao`) {
                        const revisao = await sendTranscriptionToGPT(uid, transcription.text, 'A seguinte video-aula aborda conteúdos relevantes para o ENEM? Por favor, explique porque sim e que tipo de conteudo é esse ou por que não cai.');
                        res.status(200).send(revisao);
                    } else if (req.originalUrl === `/resumo`) {
                        const resumo = await sendTranscriptionToGPT(uid, transcription.text, 'Faça uma resumo academico desse video que foi transcrito separando os conteudos em subtopicos e dando um explicação detalhada do que foi abordado');
                        res.status(200).send(resumo);
                    }
                    else {
                      const transcricao = await sendTranscriptionToGPT(uid, transcription.text, 'Repita o que escrevi');
                      res.status(200).send(transcricao);
                    }

                } catch (error) {
                    console.error('[ERROR_WHISPER_API]', error);
                    res.status(500).json({ error: 'Erro ao enviar o áudio para o Whisper' });
                }
            })
            .on('error', (err: Error) => {
                console.error('[ERROR_DOWNLOAD]', err);
                res.status(500).json({ error: 'Erro ao baixar o áudio' });
            })
            .pipe(fs.createWriteStream(audioPath));
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
