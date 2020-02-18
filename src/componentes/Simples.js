import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

<<<<<<< HEAD
export default function(props) {
    return <Text>{props.texto}</Text>
}
=======
/* export default function(props) {
    return <Text>{props.texto}</Text>
} */

export default props => <Text style={Padrao.ex}>{props.texto}</Text>
>>>>>>> 660250c28cff1eb4c9d52efdbba3161ceeb3c1b5
