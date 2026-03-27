import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import Colors from '@/constants/colors';
import { GAME_ASSETS } from '@/constants/assets';

const CATEGORY_COLORS: Record<string, string> = {
  ship: '#4488cc',
  enemy: '#dd4444',
  environment: '#44cc55',
  effect: '#ffcc00',
  powerup: '#aa44dd',
  ui: '#44ddff',
};

export default function AssetDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const asset = GAME_ASSETS.find((a) => a.id === id);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  if (!asset) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Not Found' }} />
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Asset not found</Text>
        </View>
      </View>
    );
  }

  const categoryColor = CATEGORY_COLORS[asset.category] || Colors.primary;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: asset.name }} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.imageSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.imageWrapper}>
            {asset.url ? (
              <Image
                source={{ uri: asset.url }}
                style={styles.assetImage}
                resizeMode="contain"
              />
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>No Preview</Text>
              </View>
            )}
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.detailsSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.assetTitle}>{asset.name}</Text>

          <View style={styles.tagRow}>
            <View style={[styles.tag, { backgroundColor: categoryColor + '22', borderColor: categoryColor + '44' }]}>
              <Text style={[styles.tagText, { color: categoryColor }]}>{asset.category}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{asset.dimensions}</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Filename</Text>
              <Text style={styles.infoValue}>{asset.filename}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Dimensions</Text>
              <Text style={styles.infoValue}>{asset.dimensions}px</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Category</Text>
              <Text style={[styles.infoValue, { color: categoryColor }]}>{asset.category}</Text>
            </View>
            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.infoLabel}>Format</Text>
              <Text style={styles.infoValue}>PNG (transparent)</Text>
            </View>
          </View>

          <View style={styles.descriptionCard}>
            <Text style={styles.descLabel}>Description</Text>
            <Text style={styles.descText}>{asset.description}</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: Colors.textMuted,
    fontSize: 16,
  },
  imageSection: {
    padding: 20,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetImage: {
    width: '90%',
    height: '90%',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: Colors.textMuted,
    fontSize: 14,
  },
  detailsSection: {
    paddingHorizontal: 20,
  },
  assetTitle: {
    fontSize: 24,
    fontWeight: '800' as const,
    color: Colors.text,
    marginBottom: 12,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: Colors.surfaceLight,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    textTransform: 'uppercase' as const,
  },
  infoCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 16,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(42, 48, 104, 0.4)',
  },
  infoLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500' as const,
  },
  infoValue: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '600' as const,
  },
  descriptionCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 16,
  },
  descLabel: {
    fontSize: 13,
    fontWeight: '700' as const,
    color: Colors.primary,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginBottom: 8,
  },
  descText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
});
