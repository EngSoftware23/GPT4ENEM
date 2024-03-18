import admin from "../services/serviceFirebase";

const db = admin.firestore();

export const saveToFirestore = async (userId: string, transcription: string, gptResponse: string) => {
    const firstSentence = gptResponse.split('.')[0];
    
    //Gerar um ID único para cada registro do usuário
    const docId = db.collection('respostas').doc().id;

    /* Referência para o documento do usuário.
       Nesse caso, se o documento já existir, ele será atualizado,
       caso contrário, será criado automaticamente. */
    const userDocRef = db.collection('respostas').doc(userId);

    /* Em vez de criar uma coleção dentro do documento do usuário,
       vamos criar diretamente o documento sob o userId */
    const docRef = userDocRef.collection('registros').doc(docId);

    /* Agora a estrutura dos dados será:
    respostas
        - userId
            - docId
                - transcription: "..."
                - gptResponse: "..."
                - firstSentence: "..."
                - timestamp: ... */

    await docRef.set({
        transcription: transcription,
        gptResponse: gptResponse,
        firstSentence: firstSentence,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
};
