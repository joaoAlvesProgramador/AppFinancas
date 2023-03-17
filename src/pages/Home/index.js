import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import Balance from '../../components/balence';


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={"João Gabriel"} />
      
      <Balance saldo="10.000,00" gastos="-500,00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
