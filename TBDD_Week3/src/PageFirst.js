import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

function PageFirst() {
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
      <View style={styles.ButtonsContainer}>
        <Button style={styles.Button}> <text style={styles.ButtonText}>LOGIN</text></Button>
        <Button style={styles.Button}> <text style={styles.ButtonText}>SIGN UP</text></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundImage: 'linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%)',

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
    top: '460px',
    position: 'absolute',
    textAlign: 'center',
  },
  ButtonsContainer: {
    top: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    height: '45px',
    width: '125px',
    backgroundColor: '#e3c000',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    borderRadius: '10px',
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
export default PageFirst;



