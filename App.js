import React, { useRef ,useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Screen1 = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  const navigateToScreen2 = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Screen2');
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.title}> This is my first Screen </Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={navigateToScreen2}>
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Screen2 = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const navigateToScreen1 = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Screen1');
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.title}>This my second Screen </Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={navigateToScreen1}>
        <Text style={styles.buttonText}>Go to Screen 1</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

// const Screen1 = ({ navigation }) => {
//   const opacity = useRef(new Animated.Value(1)).current;

//   const navigateToScreen2 = () => {
//     Animated.timing(opacity, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: true,
//     }).start(() => {
//       navigation.navigate('Screen2');
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     });
//   };

  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Screen 1</Text>
//       <TouchableOpacity style={styles.buttonContainer} onPress={navigateToScreen2}>
//         <Text style={styles.buttonText}>Go to Screen 2</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Screen2 = ({ navigation }) => {
//   const opacity = useRef(new Animated.Value(1)).current;

//   const navigateToScreen1 = () => {
//     Animated.timing(opacity, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: true,
//     }).start(() => {
//       navigation.navigate('Screen1');
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Screen 2</Text>
//       <TouchableOpacity style={styles.buttonContainer} onPress={navigateToScreen1}>
//         <Text style={styles.buttonText}>Go to Screen 1</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Smooth Transitions</Text>
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#ff5e3a',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#ff5e3a',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
