import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, button } from 'react-native';
function Page1a() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={require('../assets/Ellipse1.png')}
      />
      <Text style={styles.text1}>
        GROW
        <br />
        YOUR BUSINESS
      </Text>
      <Text style={styles.text2}>
        We will help you to grow your business using
        <br />
        online server
      </Text>
      <View style={styles.buttonsContainer}>
        <button style={styles.button}> <text style={styles.ButtonText}>SIGN IN</text></button>
        <button style={styles.button}> <text style={styles.ButtonText}>SIGN UP</text></button>
      </View>
      <Text style={styles.text3}>
        HOW WE WORK?
      </Text>
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
    width: '142px',
    height: '142px',
    position: 'absolute',
    top: '15%',


  },

  text1: {
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
    top: '410px',
    position: 'absolute',
    textAlign: 'center',
  },
  buttonsContainer: {
    top: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: '45px',
    width: '125px',
    backgroundColor: '#e3c000',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    margin: '10px',
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
  text3: {
    top: '30%',
    fontSize: '18px',
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 'normal',
    textAlign: 'center',
  }
});
export default Page1a;


