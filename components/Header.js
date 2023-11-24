import {View, Image, Text, StyleSheet} from "react-native";

const Header = ({image, name, description}) => (
<View style={styles.header}>
<Image style={styles.image}
source={{uri:image}} />
<Text style={styles.name}> {name} </Text>
<Text style={styles.description}> {description} </Text>
</View>
);

const styles = StyleSheet.create({
  header: {
    marginTop:20,
    alignItems: 'center'
    },
  image: { 
    height: 100,
    width: 100,
    borderRadius: 50,
    marginVertical: 10,
    },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
    },
  description: {
    color: "white",   
    },


});
export default Header;