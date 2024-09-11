import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import '../styles/sidebar.css';

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>

      <TouchableOpacity onPress={() => navigation.navigate('FrutosRojos')}>
        <Text style={styles.item}>🍒 Frutos Rojos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Mermeladas')}>
        <Text style={styles.item}>🍯 Mermeladas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pulpas')}>
        <Text style={styles.item}>💜 Pulpas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('QuienesSomos')}>
        <Text style={styles.item}>📜 Quiénes somos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.item}>👤 Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
        <Text style={styles.item}>📁 Editar mi Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ComprasPendientes')}>
        <Text style={styles.item}>Compras pendientes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
        <Text style={styles.item}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Historial')}>
        <Text style={styles.item}>Historial</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AdminBerrychill')}>
        <Text style={styles.item}>Admin. para Berrychill</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditarProductos')}>
        <Text style={styles.item}>Editar Productos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PersonalizarTienda')}>
        <Text style={styles.item}>Personalizar tienda</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CerrarSesion')}>
        <Text style={styles.item}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // tus estilos aquí
  },
  title: {
    // tus estilos aquí
  },
  item: {
    // tus estilos aquí
  }
});

export default Sidebar;
