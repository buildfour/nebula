import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import { GAME_ASSETS, ASSET_CATEGORIES, GameAsset } from '@/constants/assets';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_GAP = 12;
const CARD_MARGIN = 16;
const CARD_WIDTH = (SCREEN_WIDTH - CARD_MARGIN * 2 - CARD_GAP) / 2;

const CATEGORY_COLORS: Record<string, string> = {
  ship: '#4488cc',
  enemy: '#dd4444',
  environment: '#44cc55',
  effect: '#ffcc00',
  powerup: '#aa44dd',
  ui: '#44ddff',
};

function AssetCard({ asset, index }: { asset: GameAsset; index: number }) {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 8,
        delay: index * 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, index]);

  const handlePress = useCallback(() => {
    router.push({ pathname: '/asset-detail', params: { id: asset.id } });
  }, [router, asset.id]);

  const categoryColor = CATEGORY_COLORS[asset.category] || Colors.primary;

  return (
    <Animated.View
      style={[
        styles.assetCard,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={styles.assetCardInner}
        testID={`asset-${asset.id}`}
      >
        <View style={styles.assetImageContainer}>
          {asset.url ? (
            <Image
              source={{ uri: asset.url }}
              style={styles.assetImage}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.assetPlaceholder}>
              <Text style={styles.placeholderText}>No Image</Text>
            </View>
          )}
        </View>
        <View style={styles.assetInfo}>
          <Text style={styles.assetName} numberOfLines={1}>{asset.name}</Text>
          <View style={styles.assetMeta}>
            <View style={[styles.categoryTag, { backgroundColor: categoryColor + '22', borderColor: categoryColor + '44' }]}>
              <Text style={[styles.categoryLabel, { color: categoryColor }]}>{asset.category}</Text>
            </View>
            <Text style={styles.dimensions}>{asset.dimensions}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function AssetsScreen() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredAssets = useMemo(() => {
    if (activeFilter === 'all') return GAME_ASSETS;
    return GAME_ASSETS.filter((a) => a.category === activeFilter);
  }, [activeFilter]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Game Assets</Text>
          <Text style={styles.headerCount}>{GAME_ASSETS.length} sprites</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
          style={styles.filterScroll}
        >
          {ASSET_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.key;
            return (
              <TouchableOpacity
                key={cat.key}
                style={[styles.filterChip, isActive && styles.filterChipActive]}
                onPress={() => setActiveFilter(cat.key)}
                activeOpacity={0.7}
                testID={`filter-${cat.key}`}
              >
                <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.grid}>
          {filteredAssets.map((asset, index) => (
            <AssetCard key={asset.id} asset={asset} index={index} />
          ))}
        </View>
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
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: CARD_MARGIN,
    paddingTop: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800' as const,
    color: Colors.text,
  },
  headerCount: {
    fontSize: 13,
    color: Colors.textMuted,
    fontWeight: '500' as const,
  },
  filterScroll: {
    marginTop: 12,
  },
  filterRow: {
    paddingHorizontal: CARD_MARGIN,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: Colors.surfaceLight,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  filterChipActive: {
    backgroundColor: 'rgba(68, 221, 255, 0.15)',
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.textMuted,
  },
  filterTextActive: {
    color: Colors.primary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: CARD_MARGIN,
    gap: CARD_GAP,
    marginTop: 16,
  },
  assetCard: {
    width: CARD_WIDTH,
  },
  assetCardInner: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
  },
  assetImageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetImage: {
    width: '85%',
    height: '85%',
  },
  assetPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: Colors.textMuted,
    fontSize: 12,
  },
  assetInfo: {
    padding: 10,
  },
  assetName: {
    fontSize: 13,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 6,
  },
  assetMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  categoryLabel: {
    fontSize: 10,
    fontWeight: '700' as const,
    textTransform: 'uppercase' as const,
  },
  dimensions: {
    fontSize: 10,
    color: Colors.textMuted,
    fontWeight: '500' as const,
  },
});
