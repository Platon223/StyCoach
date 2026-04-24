import { ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const NAVY = '#0a1f44';
const NAVY_LIGHT = '#e8edf5';
const GRAY_BG = '#f5f5f5';
const WHITE = '#ffffff';
const GRAY_TEXT = '#888888';
const BORDER = '#e5e5e5';
const BLACK = '#111111';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.coachName}>Coach Mike 👋</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CM</Text>
          </View>
        </View>

        {/* Next Game Card */}
        <View style={styles.section}>
          <View style={styles.nextGameCard}>
            <Text style={styles.nextGameLabel}>Next game</Text>
            <Text style={styles.nextGameTitle}>Woodbury Warriors vs. Eagan Eagles</Text>
            <View style={styles.nextGameDetails}>
              <Text style={styles.nextGameDetailText}>📅 Sat Apr 19</Text>
              <Text style={styles.nextGameDetailText}>⏰ 7:00 AM</Text>
              <Text style={styles.nextGameDetailText}>📍 Woodbury Ice Arena</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>QUICK ACTIONS</Text>
          <View style={styles.grid}>
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <Text style={styles.actionIcon}>🏒</Text>
              <Text style={styles.actionTitle}>Line builder</Text>
              <Text style={styles.actionSub}>Set tonight's lines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <Text style={styles.actionIcon}>🤖</Text>
              <Text style={styles.actionTitle}>AI practice plan</Text>
              <Text style={styles.actionSub}>Generate drills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <Text style={styles.actionIcon}>👥</Text>
              <Text style={styles.actionTitle}>Roster</Text>
              <Text style={styles.actionSub}>18 players active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
              <Text style={styles.actionIcon}>📊</Text>
              <Text style={styles.actionTitle}>Game recap</Text>
              <Text style={styles.actionSub}>AI insights</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Season Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>SEASON STATS</Text>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: NAVY }]}>8</Text>
              <Text style={styles.statLabel}>Wins</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: BLACK }]}>3</Text>
              <Text style={styles.statLabel}>Losses</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: BLACK }]}>1</Text>
              <Text style={styles.statLabel}>Ties</Text>
            </View>
          </View>
        </View>

        {/* AI Insight */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>AI INSIGHT</Text>
          <View style={styles.insightCard}>
            <Text style={styles.insightText}>
              Your team loses <Text style={styles.insightBold}>65% of faceoffs</Text> in the 2nd period. Consider running a faceoff drill at your next practice.
            </Text>
            <Text style={styles.insightSource}>Generated from last 3 games</Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: GRAY_BG,
  },
  header: {
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 13,
    color: GRAY_TEXT,
  },
  coachName: {
    fontSize: 20,
    fontWeight: '500',
    color: BLACK,
    marginTop: 2,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: NAVY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: GRAY_TEXT,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  nextGameCard: {
    backgroundColor: NAVY,
    borderRadius: 16,
    padding: 18,
  },
  nextGameLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: 4,
  },
  nextGameTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: WHITE,
    marginBottom: 10,
  },
  nextGameDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  nextGameDetailText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionCard: {
    backgroundColor: WHITE,
    borderRadius: 14,
    padding: 16,
    borderWidth: 0.5,
    borderColor: BORDER,
    width: '48%',
  },
  actionIcon: {
    fontSize: 22,
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: BLACK,
  },
  actionSub: {
    fontSize: 12,
    color: GRAY_TEXT,
    marginTop: 3,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 14,
    borderWidth: 0.5,
    borderColor: BORDER,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '500',
  },
  statLabel: {
    fontSize: 12,
    color: GRAY_TEXT,
    marginTop: 4,
  },
  insightCard: {
    backgroundColor: WHITE,
    borderRadius: 14,
    padding: 16,
    borderWidth: 0.5,
    borderColor: BORDER,
    borderLeftWidth: 3,
    borderLeftColor: NAVY,
  },
  insightText: {
    fontSize: 13,
    color: BLACK,
    lineHeight: 20,
  },
  insightBold: {
    fontWeight: '500',
    color: BLACK,
  },
  insightSource: {
    fontSize: 12,
    color: NAVY,
    fontWeight: '500',
    marginTop: 8,
  },
  tabBar: {
    backgroundColor: WHITE,
    borderTopWidth: 0.5,
    borderTopColor: BORDER,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 24,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 20,
  },
  tabLabel: {
    fontSize: 11,
    color: GRAY_TEXT,
    marginTop: 3,
  },
  tabLabelActive: {
    color: NAVY,
    fontWeight: '500',
  },
});