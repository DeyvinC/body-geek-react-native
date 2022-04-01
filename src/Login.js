import { StyleSheet} from 'react-native';
import { View, TextInput, Text } from "react-native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Login () {
       return(
           <>
              <Text style={styles.header}> Body Geek</Text>
            
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Email"
                    placeholderTextColor="white"
                    onChangeText={(email) => setEmail(email)}
                    />
                </View>
           
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder=" Enter Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    />
                </View>
          </View>
          </>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    inputView: {
        backgroundColor: "#d4772a",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      header: {
          fontSize: 40,
          textAlign: 'center',
          marginTop: 20,
          backgroundColor: 'white'
      }
  });
  