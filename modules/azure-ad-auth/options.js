import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#fff"
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  titleContainer: {
    paddingLeft: 10,
    marginVertical: 10
  },
  fontSize20: {
    fontSize: 20
  },
  azureTitle: {
    color: "#E60001"
  },
  azureDescription: {
    color: "#000",
    fontWeight: "500"
  },
  bannerImage: {
    width: "100%",
    height: 220
  },
  indicationText: {
    width: 270,
    marginTop: "10%"
  },
  textCenter: {
    textAlign: "center"
  },
  lineHeight22: {
    lineHeight: 22
  },
  lineHeight18: {
    lineHeight: 18
  },
  safeArea: {
    height: "100%"
  },
  container: {
    flex: 1
  },
  header: {
    height: 50,
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  alignCenter: {
    alignItems: "center"
  },
  button: {
    backgroundColor: "#E60001"
  },
  commonPadding: {
    padding: 10,
    margin: 10
  },
  backgroundWhite: {
    backgroundColor: "#fff"
  },
  responseSection: {
    flex: 1
  },
  infoHeading: {
    paddingRight: 5
  },
  fontBold: {
    fontWeight: "bold"
  },
  fontSixteen: {
    fontSize: 16
  },
  infoColor: {
    color: "#333333"
  },
  title: {
    color: "#E60001",
    marginLeft: 10
  },
  btnTitle: {
    color: "#fff",
  },
  listItem: {
    padding: 5,
    marginVertical: 2,
    backgroundColor: "lightgray"
  },
  sectionHeaderTitle: {
    color: "#000",
    fontSize: 22
  },
  commonRadius: {
    borderRadius: 3
  }
});

export default {
  styles: styles,
  AZURE_AUTH_OPTIONS_TENANT: "",
  AZURE_AUTH_OPTIONS_CLIENT_ID: "",
  AZURE_AUTH_OPTIONS_REDIRECT_URI: "",
  AUTHORIZE_OPTIONS_PROMPT: "login",
  AUTHORIZE_OPTIONS_SCOPE: "openid profile User.Read"
};
