import { error } from 'console';
import express, { Request, Response } from 'express';
import { sendAudioToWhisper } from '../services/whisperService';
import { sendTranscriptionToGPT } from '../services/gpt3Service';


const ytdl = require('ytdl-core');
const fs = require('fs');

export const downloadAudio = async (req: Request, res: Response) => {
    try {
      const videoId = req.query.videoId as string;
  
      if (!videoId) {
        return res.status(400).json({ error: 'URL do vídeo não fornecida' });
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
          if (req.originalUrl === `/revisao?videoId=${videoId}`) {
            const revisao = await sendTranscriptionToGPT(transcription.text, 'A seguinte video-aula aborda conteúdos relevantes para o ENEM? Por favor, explique porque sim e que tipo de conteudo é esse ou por que não cai.');
            res.status(200).send(revisao)
        } else if(req.originalUrl === `/resumo?videoId=${videoId}`){
            const resumo = await sendTranscriptionToGPT(transcription.text, 'Faça uma resumo academico desse texto separando os conteudos em subtopicos e dando um explicação detalhada do que foi abordado');
            res.status(200).send(resumo)
        }
        else { 
            res.status(200).send(`${transcription.text}`);
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