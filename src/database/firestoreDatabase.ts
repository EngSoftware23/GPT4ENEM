import admin from "../services/serviceFirebase";

const db = admin.firestore();

export const saveToFirestore = async (userId: string, transcription: string, gptResponse: string) => {
    const firstSentence = gptResponse.split('.')[0];
    
    //Gerar um ID único para cada registro do usuário
    const docId = db.collection('usuarios').doc().id;

    //Referência para o documento do usuário
    const userDocRef = db.collection('usuarios').doc(userId);

    //Criar uma coleção dentro do documento do usuário
    const userCollectionRef = userDocRef.collection('respostas');

    //Criar um documento dentro da coleção do usuário
    const docRef = userCollectionRef.doc(docId);

    /*ex:
    respostas
        - userId
            - registros
                - docId
                    - gptResponse: "..."
                    - firstSentence: "..."
    
    
    */

    await docRef.set({
        gptResponse: gptResponse,
        firstSentence: firstSentence,
    });
};
