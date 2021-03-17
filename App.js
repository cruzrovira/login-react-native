import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import InputTextField from "./component/InputTextField";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* logo start  */}
        <View
          style={{
            marginTop: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("./assets/logo.png")} />
          <Text
            style={[
              styles.text,
              { marginTop: 10, fontSize: 22, fontWeight: "500" },
            ]}
          >
            Vermo
          </Text>
        </View>
        {/* logo end  */}
        {/* socila button  start */}
        <View
          style={{
            marginTop: 48,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require("./assets/facebook.png")}
                style={styles.socialLogo}
              />
              <Text style={styles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require("./assets/google.png")}
                style={styles.socialLogo}
              />
              <Text style={styles.text}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* socila button  end */}
        <Text
          style={[
            styles.text,
            {
              color: "#ABB4BD",
              fontSize: 14,
              textAlign: "center",
              marginVertical: 20,
            },
          ]}
        >
          or
        </Text>
        {/* Email  */}
        <InputTextField text={"Email"} />
        {/* password  */}
        <InputTextField
          styleInput={{ marginTop: 32, marginBottom: 8 }}
          text={"Password"}
          isSecure={true}
        />
        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
          Fogot password?
        </Text>
        <TouchableOpacity style={styles.submitContainer}>
          <Text
            style={[
              styles.text,
              { color: "#fff", fontWeight: "600", fontSize: 16 },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              color: "#ABB4BD",
              textAlign: "center",
              marginTop: 24,
            },
          ]}
        >
          Don't have an account ?
          <Text style={[styles.text, styles.link]}>Register Now</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: "Avenir Next",
    color: "#1D2029",
  },
  socialButton: {
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderColor: "rgba(171,180,189,0.65)",
    backgroundColor: "#fff",
    shadowOpacity: 1,
    shadowColor: "rgba(171,180,189,.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: "#ff1654",
    fontSize: 14,
  },
  submitContainer: {
    backgroundColor: "#ff1654",
    borderRadius: 4,
    fontSize: 16,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    shadowOpacity: 1,
    shadowColor: "rgba(255,22,84,0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowRadius: 20,
  },
});
