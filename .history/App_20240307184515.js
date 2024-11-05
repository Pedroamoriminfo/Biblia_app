import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const LivrosLista = () => {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/');
        if (response.data && response.data.data) {
          setLivros(response.data); // Atualizando o estado com os dados dos livros
          console.log(response.data); // Atualizando o estado com os dados dos livros
        } else {
          console.error('Erro: Dados de livros não encontrados na resposta da API.');
          console.log(response.data.data); // Atualizando o estado com os dados dos livros
        }
      } catch (error) {
        console.error('Erro ao buscar livros:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      
    
    </View>
  );
};

export default LivrosLista;
