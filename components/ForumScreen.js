import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { db } from '../firebase';

export default function ForumScreen({ navigation }) {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    // Obter as denúncias do Firebase
    const unsubscribe = db.collection('denuncias')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        const listaDenuncias = snapshot.docs.map(doc => doc.data());
        setDenuncias(listaDenuncias);
      });

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Fórum de Denúncias</Text>
      <FlatList
        data={denuncias}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}>
            <Text><strong>Tipo de denúncia:</strong> {item.tipo}</Text>
            <Text><strong>Horário:</strong> {item.horario}</Text>
            <Text><strong>Local:</strong> {item.local}</Text>
            <Text><strong>Descrição:</strong> {item.descricao}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}