import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useMission } from "../../context/MissionContext";

const screenWidth = Dimensions.get("window").width;

export default function Comunicacao() {
  const { missionData } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard de Comunicação</Text>
      <Text style={styles.subtitle}>Monitoramento do sinal e telemetria da missão.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Força do Sinal</Text>
        <Text style={styles.value}>{missionData.signal}%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Latência Atual</Text>
        <Text style={styles.value}>{missionData.latency}ms</Text>
      </View>

      <LineChart
        data={{
          labels: ["T-5", "T-4", "T-3", "T-2", "T-1", "Agora"],
          datasets: [
            {
              data: [92, 88, 85, 81, 78, missionData.signal],
            },
          ],
        }}
        width={screenWidth - 40}
        height={240}
        yAxisSuffix="%"
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Status da Telemetria</Text>
        <Text style={styles.value}>
          {missionData.signal >= 60 ? "Estável" : "Instável"}
        </Text>
      </View>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#101935",
  backgroundGradientTo: "#101935",
  decimalPlaces: 0,
  color: () => "#FFD166",
  labelColor: () => "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },
  title: {
    color: "#FFD166",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ccc",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#101935",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
  },
  label: {
    color: "#aaa",
  },
  value: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 6,
  },
  chart: {
    borderRadius: 16,
    marginBottom: 20,
  },
});