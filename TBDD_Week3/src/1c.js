import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.CODE}>CODE</Text>
      <Text style={styles.text1}>
        VERIFICATION
      </Text>
      <Text style={styles.text2}>
        Enter ontime password sent on <br />
        ++849092605798
      </Text>
      <View style={styles.rectangle}>
        <input style={styles.rectangle1}></input>
        <input style={styles.rectangle1}></input>
        <input style={styles.rectangle1}></input>
        <input style={styles.rectangle1}></input>
        <input style={styles.rectangle1}></input>
        <input style={styles.rectangle1}></input>
      </View>
      <button style={styles.button}> <text style={styles.ButtonText}>VERIFY CODE</text></button>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',

  },
  CODE: {
    width: '180px',
    height: '70px',
    position: 'absolute',
    top: '15%',
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: '60px',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 'normal',
    textAlign: 'center',


  },

  text1: {
    top: '40%',
    height: '53px',
    width: '302px',
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
  },
  text2: {
    height: '53px',
    width: '302px',
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: '15px',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 'normal',
    top: '48%',
    position: 'absolute',
    textAlign: 'center',
  },

  rectangle: {
    top: '60%',
    position: 'absolute',
    flexDirection: 'row',
  },
  rectangle1: {
    width: 50,
    height: 50,
    border: '1 Solid',
    borderColor: '#000',
  },

  button: {
    position: 'absolute',
    top: '75%',
    height: '45px',
    width: '305px',
    backgroundColor: '#e3c000',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
  },
  ButtonText: {
    fontSize: '18px',
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 'normal',
    textAlign: 'center',

  },
});



