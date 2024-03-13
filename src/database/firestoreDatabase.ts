import admin from "../services/serviceFirebase";

const db = admin.firestore();

//Salvar os dados no banco de dados Firestore
export async function createTestData() {
    const testData = [
        { name: 'Test Name 1', description: 'Test Description 1' },
        { name: 'Test Name 2', description: 'Test Description 2' },
        // Adicione mais objetos aqui se quiser criar mais documentos
    ];

    for (const data of testData) {
        const docRef = db.collection('testCollection').doc();

        await docRef.set({
            ...data,
            created: admin.firestore.FieldValue.serverTimestamp(),
        });

        console.log(`Test document created with ID: ${docRef.id}`);
    }
}

export default createTestData().catch(console.error);