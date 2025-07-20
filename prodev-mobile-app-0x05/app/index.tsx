import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';
import { styles } from '@/styles/_mainstyle';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Create your pro-dev account</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Join a community of professional developers today.
          </Text>
        </View>

        <View style={[styles.buttonGroup, { marginTop: 40 }]}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/join')}>
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/Sign')}>
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
