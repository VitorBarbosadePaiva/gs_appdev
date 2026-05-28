import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useMission } from "../../context/MissionContext";
import { generateAlerts } from "../../utils/alertaRules";

export default function Home() {
  const { missionData, thresholds } = useMission();
  const alerts = generateAlerts(missionData, thresholds);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Space Predictive Analytics</Text>
      <Text style={styles.subtitle}>Dashboard Principal da Missão</Text>

      <View style={styles.grid}>
        <Card title="Temperatura" value={`${missionData.temperature}°C`} />
        <Card title="Energia" value={`${missionData.energy}%`} />
        <Card title="Sinal" value={`${missionData.signal}%`} />
        <Card title="Latência" value={`${missionData.latency}ms`} />
        <Card title="Estabilidade Orbital" value={`${missionData.orbitalStability}%`} />
        <Card title="Alertas Ativos" value={`${alerts.length}`} danger={alerts.length > 0} />
      </View>
    </ScrollView>
  );
}

function Card({ title, value, danger }: any) {
  return (
    <View style={[styles.card, danger && styles.cardDanger]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },
  title: {
    color: "#7DF9FF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 20,
  },
  grid: {
    gap: 14,
  },
  card: {
    backgroundColor: "#101935",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1F2A44",
  },
  cardDanger: {
    borderColor: "#FF4D4D",
  },
  cardTitle: {
    color: "#aaa",
    fontSize: 14,
  },
  cardValue: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
});