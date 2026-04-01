
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/input';
import { Link, useRouter } from 'expo-router';

<<<<<<< HEAD
import { useState } from 'react';
import { Alert } from 'react-native';
import { createUser } from '@/database/userModel';

export default function SingUp() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignUp() {
  if (!name || !email || !password || !confirmPassword) {
    return Alert.alert('Erro', 'Preencha todos os campos');
  }

  if (password !== confirmPassword) {
    return Alert.alert('Erro', 'As senhas não coincidem');
  }

  const success = createUser(name, email, password);

  if (success) {
    Alert.alert('Sucesso', 'Usuário criado!');
    router.push('/');
  } else {
    Alert.alert('Erro', 'Email já existe');
  }
}

=======
export default function SingUp() {
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

            <Text style={styles.title}>Cadastre-se
            </Text>

            <Text style={styles.subtitle}>
                Crie sua conta para começar a jornada de bem-estar!
            </Text>


            <View style={styles.form}>
<<<<<<< HEAD
                <Input placeholder='Nome' onChangeText={setName} />            
                <Input placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail}/> 
                <Input placeholder='Senha' secureTextEntry onChangeText={setPassword}/>
                <Input placeholder='Confirmar Senha' secureTextEntry onChangeText={setConfirmPassword}/>
=======
                <Input placeholder='Nome' />            
                <Input placeholder='E-mail' keyboardType='email-address'/> 
                <Input placeholder='Senha' secureTextEntry/>
                <Input placeholder='Confirmar Senha' secureTextEntry/>
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
            </View>

            <View style={styles.Button}>
                <Link href='./' style={{ width: '100%' }}>
<<<<<<< HEAD
                    <Button label='Cadastrar' onPress={handleSignUp}/>
=======
                    <Button label='Cadastrar' onPress={() => router.push('/')}/>
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
                </Link>
            </View>

            <View style={styles.footerText}>
                <Text style={styles.subtitle}>Já tem uma conta ?{' '}

                    <Link href='./' style={styles.footerLink}>
                        Entre aqui!
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
        marginTop: 22,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: -60,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center'
    },
    form: {
        marginTop: 30,
        gap: 16,
    },
    Button: {
        marginTop: 32,
    },
    footerText: {
        marginTop: 16,
        alignItems: 'center',
    },
    footerLink: {
        color: '#3b78a5',
        fontWeight: 700,
    }
});