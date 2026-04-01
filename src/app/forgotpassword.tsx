import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/input';
import { Link, useRouter } from 'expo-router';

<<<<<<< HEAD
import { useState } from 'react';
import { Alert } from 'react-native';
import { findUserByEmail } from '@/database/userModel';


export default function Index() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    function handleForgotPassword() {
        if (!email.trim()) {
            return Alert.alert('Erro', 'Digite um email');
        }

    const user = findUserByEmail(email);

        if (!user) {
            return Alert.alert('Erro', 'Email não encontrado');
        }

  // envia email pra próxima tela
    router.push({
        pathname: '/enterpassword',
        params: { email }
    });
}
=======

export default function Index() {
    const router = useRouter();
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f

  return (
    
<KeyboardAvoidingView 
  style={{ flex: 1, backgroundColor: '#a3d4f4' }} 
  behavior={Platform.select({ ios: 'padding', android: 'height' })}
>
<ScrollView 
  contentContainerStyle={{ flexGrow: 1 }}
  keyboardShouldPersistTaps='handled'
  showsVerticalScrollIndicator={false}
>
    <View style={styles.container}>
            
                <Image
                source={require('@/assets/logoP3.png')} 
                style={styles.illustration}
                />

            <Text style={styles.title}>Esqueceu a senha ?
            </Text>

            <Text style={styles.subtitle}>
                Insira seu e-mail para receber as instruções de recuperação de senha.
            </Text>


            <View style={styles.form}>
<<<<<<< HEAD
                <Input placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail}/> 
=======
                <Input placeholder='E-mail' keyboardType='email-address'/> 
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
            </View>

            <View style={styles.Button}>
                <Link href='./index' style={{ width: '100%' }}>
<<<<<<< HEAD
                    <Button label='Enviar' onPress={handleForgotPassword}/>
=======
                    <Button label='Enviar' onPress={() => router.push('/')}/>
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
                </Link>
            </View>

        </View>

    </ScrollView>
</KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#a3d4f4',

    },
    illustration: {
        width: '100%',
        height: 350,
        resizeMode: 'contain',
        marginTop: 62,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: -50,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center'
    },
    form: {
        marginTop: 50,
        gap: 16,
    },
    Button: {
        marginTop: 40,
    },
    footerText: {
        marginTop: 16,
        alignItems: 'center',
    },
    footerLink: {
        color: '#3b78a5',
        fontWeight: 700,
    },
    forgotPassword: {
        marginTop: 10,
        alignItems: 'flex-end',
    },
});