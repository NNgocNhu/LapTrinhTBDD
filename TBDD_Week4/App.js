import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    < View style={styles.container} >
      <View style={[styles.star, { flex: 1, marginTop: 20 }]}>
        <Image style={
          { width: '48px', height: '45px', }}
          source={require('./assets/usb.png')}
        />
        <View >
          < Text style={styles.text1} > USB Bluetooth Music Receiver </Text>
          <Text style={styles.text1} > HJX - 001 - Biến loa thường thành loa
          </Text>
          <Text style={styles.text1} > bluetooth </Text>
        </View>
      </View>
      <View style={[{ flex: 4 }]} >
        <View style={{ flex: 1.5 }}>
          <Text style={[styles.text2]} > Cực kỳ hài lòng </Text>
          <View style={[styles.star, { marginTop: 20 }]} >
            <Image style={{ width: '48px', height: '45px', }}
              source={require('./assets/Star1.png')} />
            <Image style={{ width: '48px', height: '45px', }}
              source={require('./assets/Star1.png')} />
            <Image style={{ width: '48px', height: '45px', }}
              source={require('./assets/Star1.png')} />
            <Image style={{ width: '48px', height: '45px', }}
              source={require('./assets/Star1.png')} />
            <Image style={{ width: '48px', height: '45px', }}
              source={require('./assets/Star1.png')} />
          </View>
        </View>
        <View style={{ flex: 1, marginBottom: 10 }}>
          <View style={[{
            flexDirection: 'row', justifyContent: 'center',
            borderWidth: 1, borderColor: '#1410ea',
            borderRadius: 5, height: 68, width: 293,
          }]}>
            <Image style={
              { width: '39px', height: '32px', margin: 15 }}
              source={require('./assets/camera.png')}
            />
            <Text style={[styles.text2, { marginRight: 50, marginTop: 20 }]} > Thêm hình ảnh </Text>
          </View>
        </View>
        <View style={{ flex: 3, marginTop: 5, height: '527px' }}>

          <TextInput
            style={{
              borderWidth: 1, borderRadius: 5, borderColor: '#c4c4c4', height: 222,
            }} />
          <Text style={{
            fontFamily: 'Roboto',
            fontSize: '18px', color: '#c4c4c4',
            fontStyle: 'normal',
            fontWeight: '700', marginTop: '-210px', marginLeft: 10
          }}>Hãy chia sẻ những điều mà bạn
            <br />thích về sản phẩm</Text>
          <Text style={{ fontSize: 12, fontWeight: 700, marginTop: '145px', marginLeft: 70 }}>https://meet.google.com/nsj-ojwi-xpp</Text>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Button style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 700 }} title='Gửi' />
        </View>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    left: 0,
    lineHeight: 'normal',
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  upload: {
    width: '305px',
    height: '45px',
    fontSize: '15px',
    borderColor: '#1511EB',
    borderWidth: 1,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
