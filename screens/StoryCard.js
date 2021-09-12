import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  Ionicons,
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image sources={require('../assets/story_image_1.png')}
            style={styles.storyImage}>
            </Image>
      
          <View style={styles.titleContainer}>
            <Text style={styles.storyTitleText}>
              this.props.story.title
            </Text>

            <Text style={styles.storyAuthorText}>
              this.props.story.author
            </Text>

            <Text style={styles.storydescriptionText}>
              this.props.story.description
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likebutton}>
              <Ionicons name={'heart'}size={RFValue(30)}color={'white'}></Ionicons>
                <Text style={styles.likeText}>
                  12k
                </Text>
            </View>
          </View>
        </View>
      </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer:{
    margin:RFValue(13),
    backgroundColor:"#2f345d",
    borderRadius:RFValue(20),
  },

  storyImage:{
    resizeMode:"contained",
    width:'95%',
    alignSelf:'center',
    height:RFValue(250),
    
  },
  titleContainer:{
    paddingLeft: RFValue(20),
     justifyContent: "center"
  },
  storyTitleText:{
    fontSize: RFValue(25), 
    fontFamily: "Bubblegum-Sans",
     color: "white"
  },

  storyAuthorText:{
    fontSize: RFValue(18), 
    fontFamily: "Bubblegum-Sans",
     color: "white" ,
  },
  storydescriptionText:{
    fontFamily: "Bubblegum-Sans", 
    fontSize: 13,
    color: "white",
     paddingTop: RFValue(10) 
  },
    
  likebutton:{
    width: RFValue(160),
     height: RFValue(40),
      justifyContent: "center", 
      alignItems: "center",
       flexDirection: "row", 
       backgroundColor: "#eb3948", 
       borderRadius: RFValue(30) ,
  },

  likeText:{
    color: "white",
     fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
       marginLeft: RFValue(5) ,
  },

});
