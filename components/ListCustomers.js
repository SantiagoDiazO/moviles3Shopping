import {View, Text } from 'react-native'
import { styles } from '../assets/styles/styles.js'

export default function ListCustomers(){
    return(
        <View style={styles.container}>
            <Text>
                Aqui se mostraran los Clientes
            </Text>
        </View>
    )
}