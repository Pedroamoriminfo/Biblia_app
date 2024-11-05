import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const LivrosLista = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api2.novainfortel.dev.br/v1/products-and-services/list/2782?type=product');
        if (response.data && response.data.data) {
          setLivros(response.data.data); // Atualizando o estado com os dados dos livros
        } else {
          console.error('Erro: Dados de livros não encontrados na resposta da API.');
        }
      } catch (error) {
        console.error('Erro ao buscar livros:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {livros.map(livro => (d
        <View key={livro.id}>
          <Text>Id: {livro.id}</Text>
          <Text>Título: {livro.title}</Text>
          <Text>Descrição: {livro.description}</Text>
          <Text>Nome da Empresa: {livro.company_name}</Text>
          {livro.media.length > 0 && <Image source={{ uri: livro.media[0].file }} style={{ width: 100, height: 100 }} />}
          {/* Adicione mais campos conforme necessário */}
        </View>
      ))}
    </View>
  );
};

export default LivrosLista;
