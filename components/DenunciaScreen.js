import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { db } from '../firebase';

export default function DenunciaScreen({ route, navigation }) {
  const { tipo } = route.params;
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleEnviarDenuncia = () => {
    // Enviar os dados para o Firebase
    db.collection('denuncias').add({
      tipo,
      local,
      horario,
      descricao,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      navigation.navigate('Home');
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{tipo}</Text>
      <TextInput
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
        style={{ borderBottomWidth: 1, width: 200, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
        style={{ borderBottomWidth: 1, width: 200, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={{ borderBottomWidth: 1, width: 200, marginBottom: 10 }}
      />
      <Button title="Enviar denúncia" onPress={handleEnviarDenuncia} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}