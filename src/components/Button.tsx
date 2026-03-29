import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}{...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#428cc9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    label: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    }
})