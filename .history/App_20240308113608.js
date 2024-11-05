import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const LivrosLista = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/biblia_backend_v1/v1/books?page=2');
        if (response.data.data) {
          setLivros(response.data); // Atualizando o estado com os dados dos livros
          console.log(response.data);
        } else {
          console.error('Erro: Dados de livros não encontrados na resposta da API.');
          console.log(response.data);
        }
      } catch (error) {
        //console.error('Erro ao buscar livros:', error.message);
        console.log(response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {livros && livros.map(livro => (
       
        <Text>Título: {livro.liv_id}</Text>
        <Text>Título: {livro.liv_nome}</Text>
          {/* Adicione mais campos conforme necessário */}
        </View>
      ))}
  
  );
}
export default LivrosLista;
