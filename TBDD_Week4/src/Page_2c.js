import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
function Page_2c() {
  return (
    <View style={styles.container}>
      <View style={[styles.container1, { flex: 1 }]}>
        <Text style={styles.text}>PASSWORD <br /> GENERATOR</Text>

        <TextInput
          style={{
            backgroundColor: 'rgba(21, 21, 55, 1)',
            width: '296px',
            height: '55px',
            top: '156px',
            margin: '12px',

          }} />
        <View style={[styles.container1, { flex: 2 }]}>

        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
  },
  container1: {
    backgroundColor: 'rgba(35, 35, 91, 1)',
    width: '322px',
    height: '605px',
    marginTop: '19px',
    marginBottom: '19px',
    borderRadius: '15px',

  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '25px',
    color: 'rgba(255, 255, 255, 1)',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 29.3,
    textAlign: 'center',
  }
});
export default Page_2c;