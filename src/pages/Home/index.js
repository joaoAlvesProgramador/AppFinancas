import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import Balance from '../../components/balence';

const list=[
  {
    id:1,
    label:'Boleto luz',
    value:'300,90',
    date:'17/09/2022',
    type:0 //despesas
  },
  {
    id:2,
    label:'Pix Cliente X',
    value:'2500,00',
    date:'20/01/2023',
    type:1 //receita /entradas
  }
  {
    id:3,
    label:'Salario',
    value:'6500,00',
    date:'15/03/2023',
    type:1 //receita /entradas
  }
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={"João Gabriel"} />
      
      <Balance saldo="10.000,00" gastos="-500,00" />

      <Text style={styles.title}>Ultimas movimentações</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight:"bold",
    marginLeft:14,
    marginRight:14,
  },
});
