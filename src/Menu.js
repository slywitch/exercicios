import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex,
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'ListaFlex'}
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='Miguel' sobrenome='Slywitch' />
    },
    Evento: {
        screen: Evento,
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={20} />,
    },
    Plataforma: {
        screen: () => <Plataforma />,
    },
    Contador: {
        screen: () => <Contador numeroInicial={0} />,
    },
    MegaSena:{
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: 'Mega Sena '}
    },
    Inverter:{
        screen: () => <Inverter texto='React Native' />,
    },
    ParImpar:{
        screen: () => <ParImpar numeros={36} />,
        navigationOptions: { title: 'Par & Impar '}
    },
    Simples:{
        screen: () => <Simples texto='Flexivel!!!!' />,
    }
}, {drawerWidth: 300 })