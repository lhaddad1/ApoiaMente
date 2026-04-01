import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/input';
import { Link, useRouter } from 'expo-router';

<<<<<<< HEAD
import { useState } from 'react';
import { Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { updatePassword } from '@/database/userModel';



=======
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
//Tela de recuperação de senha, onde o usuário pode inserir um novo password para acessar sua conta.
//A tela so será acessada através do Link que foi mandado pelo e-mail.

export default function Index() {
<<<<<<< HEAD
    const { email } = useLocalSearchParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    function handleUpdatePassword() {
        if (!password || !confirmPassword) {
            return Alert.alert('Erro', 'Preencha todos os campos');
        }

        if (password !== confirmPassword) {
            return Alert.alert('Erro', 'As senhas não coincidem');
        }

        const success = updatePassword(email as string, password);

        if (success) {
            Alert.alert('Sucesso', 'Senha atualizada!');
            router.push('/');
        } else {
            Alert.alert('Erro', 'Não foi possível atualizar');
        }
}


=======
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
                Insira a sua senha para acessar sua conta.
            </Text>


            <View style={styles.form}>
<<<<<<< HEAD
                <Input placeholder='Senha' secureTextEntry onChangeText={setPassword}/>
                <Input placeholder='Confirmar Senha' secureTextEntry onChangeText={setConfirmPassword}/>
=======
                <Input placeholder='Senha' secureTextEntry/>
                <Input placeholder='Confirmar Senha' secureTextEntry/>
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
            </View>

            <View style={styles.Button}>
                <Link href='./index' style={{ width: '100%' }}>
<<<<<<< HEAD
                    <Button label='Alterar Senha' onPress={handleUpdatePassword}/>
                </Link>
=======
                    <Button label='Alterar Senha' onPress={() => router.push('/')}/>
                </Link>
                <Button label='Alterar Senha' onPress={() => router.push('/')}/>
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
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