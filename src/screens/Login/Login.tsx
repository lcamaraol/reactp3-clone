import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './LoginStyles';

const sampleImages = [
  require('../../../assets/images/sample1.png'),
  require('../../../assets/images/sample2.png'),
  require('../../../assets/images/sample3.png'),
  require('../../../assets/images/sample4.png'),
  require('../../../assets/images/sample5.png'),
];

interface Login {}

const Login: React.FC<Login> = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.topImageContainer}>
        <Image source={sampleImages[0]} style={styles.imgTopLeft} />
        <Image source={sampleImages[1]} style={styles.imgMidLeft} />
        <Image source={sampleImages[2]} style={styles.imgCenter} />
        <Image source={sampleImages[3]} style={styles.imgMidRight} />
        <Image source={sampleImages[4]} style={styles.imgBottomRight} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/pinterest_logo.png')}
          style={styles.logoP}
        />
      </View>

      <Text style={styles.headerText}>
        Crie uma vida{'\n'}com o que você ama
      </Text>

      <TextInput
        style={[styles.textInput, isFocused && styles.textInputFocused]}
        placeholder="Endereço de email"
        placeholderTextColor={styles.textInputPlaceholder?.color || '#AAAAAA'}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.buttonRed}>
        <Text style={styles.buttonRedText}>Continuar</Text>
      </View>

      <View style={styles.buttonBlack}>
        <Image
          source={require('../../../assets/google_logo.png')}
          style={styles.googleLogo}
        />
        <Text style={styles.buttonBlackText}>Continuar com o Google</Text>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.facebookText}>
          O login do Facebook não está mais disponível.{' '}
          <Text style={styles.linkText}>Recuperar sua conta</Text>
        </Text>
        <Text style={styles.legalText}>
          Você precisa ter pelo menos 13 anos de idade para usar o Pinterest. Ao
          continuar, você concorda com os{' '}
          <Text style={styles.linkText}>Termos de Serviço</Text> do Pinterest e confirma
          que leu nossa <Text style={styles.linkText}>Política de Privacidade</Text>.{' '}
          <Text style={styles.linkText}>Aviso na coleta de informações</Text>.
        </Text>
      </View>
    </View>
  );
};

export default Login;