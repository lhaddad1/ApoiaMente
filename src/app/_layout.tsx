import { Stack } from 'expo-router'
<<<<<<< HEAD
import { useEffect } from 'react'
import { createTables } from '@/database/db'

export default function Layout() {

    useEffect(() => {
        createTables();
    }, []);

    return (
        <Stack screenOptions={{ headerShown: false }}/>
    )
}
=======

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}/>
    )
}
>>>>>>> 44b12f7a7cb6454114ad925343166ae6471eac3f
