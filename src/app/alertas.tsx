import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useMission } from "../../context/MissionContext";
import { generateAlerts } from "../../utils/alertaRules";

export default function Alertas() {
  const { missionData, thresholds } = useMission();
  const alerts = generateAlerts(missionData, thresholds);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alertas da Missão</Text>
      <Text style={styles.subtitle}>
        Alertas gerados automaticamente com base nos limites configurados.
      </Text>

      {alerts.length === 0 ? (
        <View style={styles.successCard}>
          <Text style={styles.successText}>Nenhum alerta ativo</Text>
          <Text style={styles.successSubtext}>Todos os sistemas estão operando normalmente.</Text>
        </View>
      ) : (
        alerts.map((alert, index) => (
          <View key={index} style={styles.alertCard}>
            <Text style={styles.alertLevel}>{alert.level}</Text>
            <Text style={styles.alertTitle}>{alert.title}</Text>
            <Text style={styles.alertMessage}>{alert.message}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },
  title: {
    color: "#FF4D4D",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ccc",
    marginBottom: 20,
  },
  successCard: {
    backgroundColor: "#0F3D2E",
    padding: 20,
    borderRadius: 16,
  },
  successText: {
    color: "#00FF9C",
    fontSize: 22,
    fontWeight: "bold",
  },
  successSubtext: {
    color: "#fff",
    marginTop: 8,
  },
  alertCard: {
    backgroundColor: "#351018",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#FF4D4D",
  },
  alertLevel: {
    color: "#FFD166",
    fontWeight: "bold",
    marginBottom: 6,
  },
  alertTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  alertMessage: {
    color: "#ccc",
    marginTop: 8,
  },
});