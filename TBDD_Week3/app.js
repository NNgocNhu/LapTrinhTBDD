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
      <TextInput
        keyboardType='numeric'
        value={number}
        style={styles.input}
        maxLength={10}
      />
      {/* <View style={styles.rootStyle}>
        <Cell style={styles.cell}></Cell>
        <Cell style={styles.cell}></Cell>
        <Cell style={styles.cell}></Cell>
        <Cell style={styles.cell}></Cell>
        <Cell style={styles.cell}></Cell>
        <Cell style={styles.cell}></Cell>
      </View> */}
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
    width: '200px',
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
    top: '53%',
    position: 'absolute',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    borderColor: '#c7c3c3',
    padding: 10,
  },
  rootStyle: {
    position: 'absolute',
    flex: 1, padding: 20
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  imageEmail: {
    height: '45px',
    width: '48px',
  },
  textEmail: {
    position: "absolute",
    left: '50px',
    top: '12px',
    fontSize: '15px',
    fontWeight: '400',
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



