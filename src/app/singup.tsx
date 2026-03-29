import { Link } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/input';

export default function SingUp() {
  return (

<KeyboardAvoidingView 
  style={{ flex: 1, backgroundColor: '#cee8fa' }} 
  behavior={Platform.select({ ios: 'padding', android: 'height' })}
>
    <ScrollView 
    contentContainerStyle={{ flexGrow: 1, backgroundColor: '#cee8fa' }}   
    keyboardShouldPersistTaps='handled'
    showsVerticalScrollIndicator={false}
    >
        <View style={styles.container}>
                
                <Image
                source={require('@/assets/logoP2.png')} 
                style={styles.illustration}
                />

            <Text style={styles.title}>Cadastre-se
            </Text>

            <Text style={styles.subtitle}>
                Crie sua conta para começar a jornada de bem-estar!
            </Text>


            <View style={styles.form}>
                <Input placeholder='Nome' />            
                <Input placeholder='E-mail' keyboardType='email-address'/> 
                <Input placeholder='Senha' secureTextEntry/>
                <Input placeholder='Confirmar Senha' secureTextEntry/>
            </View>

            <View style={styles.Button}>
                <Button label='Cadastrar'/>
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
        color: '#007BFF',
        fontWeight: 700,
    }
});