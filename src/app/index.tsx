import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/input';

import { loginUser } from '@/database/userModel';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn() {
        if (!email.trim() || !password.trim()) {
            return Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }

        const user = await loginUser(email, password);

        if (user) {
            Alert.alert('Bem Vindo', `Olá ${user.name}!`);
        } else {
            Alert.alert('Erro', 'Email ou senha inválidos');
        }
    }

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

                <Text style={styles.title}>Bem-vindo ao ApoiaMente.
                </Text>

                <Text style={styles.subtitle}>
                    Sua jornada de bem-estar começa aqui!
                </Text>


                <View style={styles.form}>
                    <Input placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail}/> 
                    <Input placeholder='Senha' secureTextEntry onChangeText={setPassword}/>
                </View>

                <View style ={ styles.forgotPassword}>
                    <Link href='./forgotpassword' style={styles.footerLink}>
                        Esqueceu a senha?
                    </Link>
                </View>

                <View style={styles.Button}>
                    <Button label='Entrar' onPress={handleSignIn}/>
                </View>

                <View style={styles.footerText}>
                    <Text style={styles.subtitle}>Não tem uma conta?{' '}

                        <Link href='./singup' style={styles.footerLink}>
                            Cadastre-se
                        </Link>
                    </Text>
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
        marginTop: 70,
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