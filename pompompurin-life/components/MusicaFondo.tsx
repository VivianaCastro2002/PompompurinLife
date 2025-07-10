
import { Audio } from 'expo-av';
import { useEffect } from 'react';
import cancionFondo from '../assets/sounds/MusicadeFondo.mp3';

export default function MusicaFondo(): null {
  useEffect(() => {
    let sound: Audio.Sound;

    const reproducirMusica = async () => {
      sound = new Audio.Sound();
      try {
        await sound.loadAsync(cancionFondo);
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
      } catch (error) {
        console.error('Error al reproducir música de fondo', error);
      }
    };

    reproducirMusica();

    return () => {
      if (sound) sound.unloadAsync();
    };
  }, []);

  return null; // No renderiza nada
}
