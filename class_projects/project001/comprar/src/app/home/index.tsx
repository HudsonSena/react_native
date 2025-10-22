import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

const ITEMS = [
  {
    id: "1", status: FilterStatus.DONE, description: "1 pascote de café"
  },
  {
    id: "2", status: FilterStatus.PENDING, description: "3 pacotes de macarrão"
  },
  {
    id: "3", status: FilterStatus.PENDING, description: "3 cebolas"
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")}/>
      <StatusBar style="auto" />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' />
        <Button
          title='Adicionar'
          onPress={() => console.log('Adicionar')}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive/>
            ))
        }
        <TouchableOpacity style={styles.clarButton}>
          <Text style={styles.clearText}>Limpar</Text>
        </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Item
                data={item}
                onRemove={() => console.log("Remover")}
                onStatus={() => console.log("Mudar o status")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => 
            <View style={styles.separator}></View>
          }
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => 
            <Text style={styles.empty}>Nenhum item aqui</Text>
          }
        />       
      </View>
    </View>
  );
}
