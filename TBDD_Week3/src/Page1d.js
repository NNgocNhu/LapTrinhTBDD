import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
function Page1d() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>LOGIN</Text>
      <input style={styles.boxE}>
        <Text style={styles.textEmail}>Email</Text>
      </input>
      <input style={styles.boxP}>
        <Text style={styles.textPass}>Password</Text>
        <Image style={styles.imageEye}
          source={require('../assets/eye1.png')}
        />
      </input>
      <button style={styles.button}> <text style={styles.buttonText}>LOGIN</text></button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundImage: '#30aa5130',

  },
  login: {
    width: '73px',
    height: '29px',
    position: 'absolute',
    top: '15%',
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: '25px',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  boxE: {
    position: 'absolute',
    top: '30%',
    height: '45px',
    width: '305px',
    backgroundColor: '#C4C4C4',
  },
  textEmail: {
    position: "absolute",
    left: '15px',
    top: '12px',
    fontSize: '15px',
    fontWeight: '400',
  },
  boxP: {
    position: 'absolute',
    top: '40%',
    height: '45px',
    width: '305px',
    backgroundColor: '#C4C4C4',
  },
  textPass: {
    position: "absolute",
    left: '15px',
    top: '12px',
    fontSize: '15px',
    fontWeight: '400',
  },
  imageEye: {
    left: 250,
    width: 38,
    height: 25,
    right: 0,
  },
  button: {
    position: 'absolute',
    top: '55%',
    height: '45px',
    width: '305px',
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
  },
  buttonText: {
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'Helvetica',
    fontWeight: '700'
  },
});
export default Page1d;