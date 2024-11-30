import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Escolha o tipo de denúncia</Text>
      <Button
        title="Buracos"
        onPress={() => navigation.navigate('Denuncia', { tipo: 'Buracos' })}
      />
      <Button
        title="Roubo/Furto"
        onPress={() => navigation.navigate('Denuncia', { tipo: 'Roubo/Furto' })}
      />
      <Button
        title="Violência doméstica"
        onPress={() => navigation.navigate('Denuncia', { tipo: 'Violência doméstica' })}
      />
      <Button
        title="Incêndio"
        onPress={() => navigation.navigate('Denuncia', { tipo: 'Incêndio' })}
      />
      <Button
        title="Fórum"
        onPress={() => navigation.navigate('Forum')}
      />
    </View>
  );
}