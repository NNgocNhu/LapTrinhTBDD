import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, button } from 'react-native';

function Page1b() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={require('../assets/lock-1528791.png')}
      />
      <Text style={styles.text1}>
        FORGET <br />
        PASSWORD
      </Text>
      <Text style={styles.text2}>
        Provide your account’s email for which  <br />
        want to reset your password
      </Text>
      <View style={styles.boxE}>
        <Image style={styles.imageEmail}
          source={require('../assets/mail-2935365.png')}
        />
        <Text style={styles.textEmail}>Email</Text>
      </View>
      <button style={styles.button}> <text style={styles.ButtonText}>NEXT</text></button>

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
  image: {
    width: '105px',
    height: '117px',
    position: 'absolute',
    top: '15%',


  },

  text1: {
    top: '40%',
    height: '58px',
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: '25px',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
  },
  text2: {
    height: '36px',
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
  boxE: {
    position: 'absolute',
    top: '62%',
    height: '45px',
    width: '305px',
    backgroundColor: '#C4C4C4',
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
export default Page1b;


