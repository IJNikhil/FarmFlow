import React, { useState } from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux_store/store';
import { authenticateUser } from '../../services/authService';
import { login } from '../../redux_store/authSlice';
import { LoginStyles } from './LoginStyles';
import CustomTextInput from '../../components/CustomTextInput';


export default function LoginScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    authenticateUser(username, password, dispatch);
  };

  const handleSkip = () => {
    dispatch(login('Guest'));
  };

  return (
    <View style={LoginStyles.container}>
      <TouchableOpacity style={LoginStyles.skipButton} onPress={handleSkip}>
        <Text style={LoginStyles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Text style={LoginStyles.title}>Login</Text>

      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
