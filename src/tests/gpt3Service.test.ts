// gpt3Service.test.ts
/*
import { sendTranscriptionToGPT } from '../services/gpt3Service';
import { saveToFirestore } from '../database/firestoreDatabase';
import OpenAI from 'openai';

jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => {
    return {
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [{
              message: {
                content: 'Resposta simulada do GPT-3.5 Turbo'
              }
            }]
          })
        }
      }
    };
  });
});

jest.mock('../database/firestoreDatabase', () => {
  return {
    saveToFirestore: jest.fn()
  };
});

describe('sendTranscriptionToGPT', () => {
  it('deve enviar a transcrição para o GPT-3.5 Turbo e salvar a resposta no Firestore', async () => {
    const transcription = 'Transcrição de teste';
    const promptTemplate = 'Template de prompt de teste';

    const response = await sendTranscriptionToGPT(transcription, promptTemplate);

    expect(OpenAI).toHaveBeenCalled();
    expect(saveToFirestore).toHaveBeenCalledWith(transcription, 'Resposta simulada do GPT-3.5 Turbo');
    expect(response).toEqual({
      message: {
        content: 'Resposta simulada do GPT-3.5 Turbo'
      }
    });
  });
});
*/