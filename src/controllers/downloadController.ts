import { error } from 'console';
import express, { Request, Response } from 'express';
import { sendAudioToWhisper } from '../services/whisperService';


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
          res.status(200).send(`Áudio baixado e enviado com sucesso para o Whisper ${transcription.text}`);
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