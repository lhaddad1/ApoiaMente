import { Stack } from 'expo-router'
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
