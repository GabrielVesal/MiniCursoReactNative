import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

import Ionicons from "react-native-vector-icons/Ionicons"

export function Button({ handleClick, color, icon, name }){
  return(
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleClick}
    >
      <View style={styles.container}>
        <Ionicons name={icon} size={30} color={color} />
        <Text style={styles.linkText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: '#3c3c3c',
    padding: 10,
    margin: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  linkText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
})