import admin from "../services/serviceFirebase";

const db = admin.firestore();

export const saveToFirestore = async (userId: string, transcription: string, gptResponse: string) => {
    const firstSentence = gptResponse.split('.')[0];
    
    //Gerar um ID único para cada registro do usuário
    const docId = db.collection('respostas').doc().id;

    //Referência para o documento do usuário
    const userDocRef = db.collection('respostas').doc(userId);

    //Criar uma coleção dentro do documento do usuário
    const userCollectionRef = userDocRef.collection('registros');

    //Criar um documento dentro da coleção do usuário
    const docRef = userCollectionRef.doc(docId);

    /*ex:
    respostas
        - userId
            - registros
                - docId
                    - transcription: "..."
                    - gptResponse: "..."
                    - firstSentence: "..."
                    - timestamp: ...
    */

    await docRef.set({
        transcription: transcription,
        gptResponse: gptResponse,
        firstSentence: firstSentence,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
};
