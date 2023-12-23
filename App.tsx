import {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setBackgroundColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity
          onPress={() => {
            generateColor();
          }}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  actionBtn: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#6A1B4D',
  },
  actionBtnText: {
    fontSize: 24,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default App;
