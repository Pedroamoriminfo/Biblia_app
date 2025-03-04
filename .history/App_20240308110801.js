import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const LivrosLista = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/biblia_backend_v1/v1/books');
        if (response.data.data) {
          setLivros(response.data.data); // Atualizando o estado com os dados dos livros
        } else {
          console.error('Erro: Dados de livros não encontrados na resposta da API.');
          console.log(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar livros:', error.message);
        console.log(response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {livros && livros.map(livro => (
        <View key={livro.liv_id}>
          <Text>Id: {livro.liv_id} Título: {livro.liv_nome}</Text>
          {/* Adicione mais campos conforme necessário */}
        </View>
      ))}
    </View>
  );
}
export default LivrosLista;
