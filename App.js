import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';

import Header from './components/Header';
import {Button} from './components/Button';

const LINKS =  [
    {
        "name": "GitHub",
        "icon": "logo-github",
        "color": "#56067F",
        "url": "https://github.com/gabrielvesal"
    },
    {
        "name": "Instagram",
        "icon": "logo-instagram",
        "color": "#8C306C",
        "url": "https://www.instagram.com/gabrielvesal/"
    },
    {
        "name": "Linkedin",
        "icon": "logo-linkedin",
        "color": "#2464E3",
        "url": "https://www.linkedin.com/in/gabrielvesal/"
    },
    {
        "name": "Twitch",
        "icon": "logo-twitch",
        "color": "#202359",
    },
]

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        image="https://static.vecteezy.com/ti/vetor-gratis/p1/15154439-simples-do-icone-do-agente-secreto-ligar-para-pessoa-vetor.jpg"
        name="Gabriel"
        description="Web developer"
      />

      <View style={styles.body}>
      <FlatList
      data={LINKS}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) =>  (
      <Button icon={item.icon} name={item.name} color={item.color} />
      )}
      />
      <Text style={styles.text}>IFINTEGRA - Salinas 2023</Text>
      <Text style={styles.text}>Criado por Gabriel Alves</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: "#f8f8ff",
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 50
    },
  text: {
    marginBottom: 20,
    color: 'black',
  },

});

