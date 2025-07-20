import { FACEBOOKLOGO, GOOGLELOGO } from '@/constants';
import { styles } from '@/styles/_joinstyle';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function JoinScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Join</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Join the community of professional developers</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput style={styles.formControl} placeholder="John Doe" />
        </View>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="johndoe@email.com" />
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} secureTextEntry={true} placeholder="******" />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupSubTitleText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
