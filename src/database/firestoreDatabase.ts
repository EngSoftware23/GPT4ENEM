import admin from "../services/serviceFirebase";

const db = admin.firestore();

export const saveToFirestore = async (transcription: string, gptResponse: string) => {
    const firstSentence = gptResponse.split('.')[0];
    const docRef = db.collection('respostas').doc(); // Cria um novo documento com um ID gerado automaticamente
    await docRef.set({
        transcription: transcription,
        gptResponse: gptResponse,        
        firstSentence: firstSentence, // Salva a primeira frase

        timestamp: admin.firestore.FieldValue.serverTimestamp() // Adiciona um timestamp do servidor
    });
};