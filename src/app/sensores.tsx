import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useMission } from "../../context/MissionContext";

const screenWidth = Dimensions.get("window").width;

export default function Sensores() {
  const { missionData } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard de Sensores</Text>
      <Text style={styles.subtitle}>Monitoramento térmico e ambiental da missão.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Temperatura Atual</Text>
        <Text style={styles.value}>{missionData.temperature}°C</Text>
      </View>

      <LineChart
        data={{
          labels: ["T-5", "T-4", "T-3", "T-2", "T-1", "Agora"],
          datasets: [
            {
              data: [62, 67, 70, 73, 69, missionData.temperature],
            },
          ],
        }}
        width={screenWidth - 40}
        height={240}
        yAxisSuffix="°C"
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Radiação Cósmica</Text>
        <Text style={styles.value}>Normal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Pressão Interna</Text>
        <Text style={styles.value}>1.02 atm</Text>
      </View>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#101935",
  backgroundGradientTo: "#101935",
  decimalPlaces: 0,
  color: () => "#7DF9FF",
  labelColor: () => "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },
  title: {
    color: "#7DF9FF",
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
    fontSize: 14,
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