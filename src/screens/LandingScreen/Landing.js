
import React, {Component} from 'react';
import {Text, View ,ImageBackground ,Image ,Animated,StyleSheet,ActivityIndicator} from 'react-native';

import Logo from '../../assets/img/logo-removebg-preview.png'
import BackImg from '../../assets/img/backgroundimg.jpg'

class Landing extends Component {

  state = {
    LogoAnime : new Animated.Value(0),
    LogoText : new Animated.Value(0),
    LoadingSpinner : false,
    navigation : this.props
  };

  componentDidMount(){
    const {LogoAnime,LogoText,LoadingSpinner} = this.state;

    Animated.parallel([
      Animated.spring(LogoAnime,{
        toValue :1,
        tension:10  ,
        friction:2,
        duration :1000,
        useNativeDriver : false
      }).start(),

      Animated.timing(LogoText , {
        toValue :1,
        duration : 1500,
        useNativeDriver : false
      })
    ]).start( () => {
      this.setState({
        LoadingSpinner : true
      });
      setTimeout( () => { this.switchAuth(this.state.navigation)},1500)
    })
  }

  switchAuth = ( {navigation} ) => {
    navigation.navigate('Main');
  };



  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BackImg} resizeMode="cover" style={styles.backImage}>

          <Animated.View style={{
            opacity : this.state.LogoAnime,
            top : this.state.LogoAnime.interpolate({
              inputRange : [0,1],
              outputRange : [80 ,0]
            })
          }}>
            <Image source={Logo} style={styles.image}/>
          </Animated.View>

          <Animated.View style={{
            opacity : this.state.LogoText
          }}>
            <View><Text style={styles.text}>WhatsApp</Text></View>
          </Animated.View>
          <Animated.View style={{ opacity : this.state.LogoText ,position: 'absolute',
            bottom : 0,}}>
            <Text style={styles.logoText}>Powerd by Dew Copartion</Text>
          </Animated.View>
        </ImageBackground>

      </View>
    );
  }
}

export default Landing;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {

  },
  text : {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoText : {
    color : '#ffffff',
    fontSize : 15,
    fontWeight : '700'
  }
});
