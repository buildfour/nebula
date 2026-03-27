import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import {
  Sparkles,
  Gamepad2,
  Bug,
  Crosshair,
  Map,
  Zap,
  Monitor,
  Cpu,
  ChevronDown,
  ChevronUp,
  Rocket,
} from 'lucide-react-native';
import Colors from '@/constants/colors';
import { GDD_SECTIONS } from '@/constants/gdd';

const ICON_MAP: Record<string, React.ComponentType<{ color: string; size: number }>> = {
  Sparkles,
  Gamepad2,
  Bug,
  Crosshair,
  Map,
  Zap,
  Monitor,
  Cpu,
};

function SectionCard({ section, index }: { section: typeof GDD_SECTIONS[number]; index: number }) {
  const [expanded, setExpanded] = useState<boolean>(index === 0);
  const animValue = useRef(new Animated.Value(index === 0 ? 1 : 0)).current;

  const toggle = useCallback(() => {
    const toValue = expanded ? 0 : 1;
    Animated.spring(animValue, {
      toValue,
      useNativeDriver: false,
      tension: 80,
      friction: 12,
    }).start();
    setExpanded(!expanded);
  }, [expanded, animValue]);

  const IconComponent = ICON_MAP[section.icon] || Sparkles;

  const renderContent = () => {
    if ('items' in section && section.id === 'names') {
      return (
        <View style={styles.contentInner}>
          {section.items.map((item, i) => (
            <View key={i} style={styles.nameOption}>
              <View style={styles.nameRow}>
                <Rocket color={Colors.warning} size={16} />
                <Text style={styles.nameBold}>{item.label}</Text>
              </View>
              <Text style={styles.nameDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>
      );
    }

    if ('details' in section) {
      return (
        <View style={styles.contentInner}>
          {section.details.map((d, i) => (
            <View key={i} style={styles.detailRow}>
              <Text style={styles.detailKey}>{d.key}</Text>
              <Text style={styles.detailValue}>{d.value}</Text>
            </View>
          ))}
        </View>
      );
    }

    if ('enemies' in section) {
      return (
        <View style={styles.contentInner}>
          {section.enemies.map((e, i) => (
            <View key={i} style={[styles.enemyCard, { borderLeftColor: e.color }]}>
              <Text style={styles.enemyName}>{e.name}</Text>
              <View style={styles.enemyStats}>
                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>HP</Text>
                  <Text style={styles.statValue}>{e.health}</Text>
                </View>
                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>Score</Text>
                  <Text style={styles.statValue}>{e.score}</Text>
                </View>
              </View>
              <Text style={styles.enemyBehavior}>{e.behavior}</Text>
            </View>
          ))}
        </View>
      );
    }

    if ('primary' in section) {
      return (
        <View style={styles.contentInner}>
          <Text style={styles.subHeader}>Primary Weapons</Text>
          {section.primary.map((w, i) => (
            <View key={i} style={styles.weaponRow}>
              <Text style={styles.weaponName}>{w.name}</Text>
              <Text style={styles.weaponDesc}>{w.desc}</Text>
            </View>
          ))}
          <Text style={[styles.subHeader, { marginTop: 16 }]}>Secondary Weapons</Text>
          {section.secondary.map((w, i) => (
            <View key={i} style={styles.weaponRow}>
              <Text style={styles.weaponName}>{w.name}</Text>
              <Text style={styles.weaponDesc}>Cooldown: {w.cooldown}</Text>
            </View>
          ))}
        </View>
      );
    }

    if ('levels' in section) {
      return (
        <View style={styles.contentInner}>
          {section.levels.map((lvl, i) => (
            <View key={i} style={[styles.levelCard, { borderLeftColor: lvl.color }]}>
              <View style={styles.levelHeader}>
                <Text style={styles.levelNumber}>L{i + 1}</Text>
                <Text style={styles.levelName}>{lvl.name}</Text>
              </View>
              <Text style={styles.levelTheme}>{lvl.theme}</Text>
              <Text style={styles.levelMechanic}>{lvl.mechanic}</Text>
            </View>
          ))}
        </View>
      );
    }

    if ('items' in section && section.id === 'powerups') {
      return (
        <View style={styles.contentInner}>
          {section.items.map((p, i) => (
            <View key={i} style={styles.powerupRow}>
              <View style={[styles.powerupDot, { backgroundColor: p.color }]} />
              <View style={styles.powerupInfo}>
                <Text style={styles.powerupName}>{p.name}</Text>
                <Text style={styles.powerupEffect}>{p.effect}</Text>
              </View>
            </View>
          ))}
        </View>
      );
    }

    if ('elements' in section) {
      return (
        <View style={styles.contentInner}>
          {section.elements.map((el, i) => (
            <View key={i} style={styles.hudElement}>
              <View style={styles.hudBullet} />
              <Text style={styles.hudText}>{el}</Text>
            </View>
          ))}
        </View>
      );
    }

    if ('specs' in section) {
      return (
        <View style={styles.contentInner}>
          {section.specs.map((s, i) => (
            <View key={i} style={styles.detailRow}>
              <Text style={styles.detailKey}>{s.key}</Text>
              <Text style={styles.detailValue}>{s.value}</Text>
            </View>
          ))}
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.cardHeader}
        onPress={toggle}
        activeOpacity={0.7}
        testID={`section-${section.id}`}
      >
        <View style={styles.cardHeaderLeft}>
          <View style={styles.iconContainer}>
            <IconComponent color={Colors.primary} size={18} />
          </View>
          <Text style={styles.cardTitle}>{section.title}</Text>
        </View>
        {expanded ? (
          <ChevronUp color={Colors.textSecondary} size={20} />
        ) : (
          <ChevronDown color={Colors.textSecondary} size={20} />
        )}
      </TouchableOpacity>
      {expanded && renderContent()}
    </View>
  );
}

export default function GDDScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.hero, { opacity: fadeAnim }]}>
          <Image
            source={{ uri: 'https://r2-pub.rork.com/generated-images/f0f027c8-4981-465a-8ac6-2411d445b3f4.png' }}
            style={styles.heroBg}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>NEBULA STRIKE</Text>
            <Text style={styles.heroSubtitle}>Game Design Document</Text>
            <View style={styles.heroBadges}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2D Shooter</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Web Game</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>12 Assets</Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {GDD_SECTIONS.map((section, index) => (
          <SectionCard key={section.id} section={section} index={index} />
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>v1.0 — Last updated 2026-03-06</Text>
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
  hero: {
    height: 200,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  heroBg: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 14, 42, 0.6)',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900' as const,
    color: Colors.white,
    letterSpacing: 4,
    textShadowColor: Colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  heroSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
  },
  heroBadges: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  badge: {
    backgroundColor: 'rgba(68, 221, 255, 0.15)',
    borderColor: Colors.primaryDim,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: '600' as const,
  },
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(68, 221, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  contentInner: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  nameOption: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  nameBold: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: Colors.warning,
  },
  nameDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginLeft: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(42, 48, 104, 0.5)',
  },
  detailKey: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500' as const,
    flex: 1,
  },
  detailValue: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '600' as const,
    flex: 1.5,
    textAlign: 'right' as const,
  },
  enemyCard: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    borderLeftWidth: 3,
  },
  enemyName: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  enemyStats: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  statBadge: {
    backgroundColor: 'rgba(68, 221, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 11,
    color: Colors.textMuted,
    fontWeight: '600' as const,
  },
  statValue: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '700' as const,
  },
  enemyBehavior: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  subHeader: {
    fontSize: 13,
    fontWeight: '700' as const,
    color: Colors.primary,
    marginBottom: 8,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
  weaponRow: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(42, 48, 104, 0.3)',
  },
  weaponName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  weaponDesc: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  levelCard: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    borderLeftWidth: 3,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  levelNumber: {
    fontSize: 11,
    fontWeight: '800' as const,
    color: Colors.primary,
    backgroundColor: 'rgba(68, 221, 255, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  levelName: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  levelTheme: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  levelMechanic: {
    fontSize: 12,
    color: Colors.accent,
    marginTop: 2,
    fontWeight: '500' as const,
  },
  powerupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(42, 48, 104, 0.3)',
  },
  powerupDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  powerupInfo: {
    flex: 1,
  },
  powerupName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  powerupEffect: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  hudElement: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 6,
  },
  hudBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
    marginTop: 5,
  },
  hudText: {
    fontSize: 13,
    color: Colors.textSecondary,
    flex: 1,
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});
