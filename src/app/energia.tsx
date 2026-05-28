import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useMission } from "../../context/MissionContext";

const screenWidth = Dimensions.get("window").width;

export default function Energia() {
  const { missionData } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard de Energia</Text>
      <Text style={styles.subtitle}>Controle da bateria, painéis solares e consumo.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Bateria Atual</Text>
        <Text style={styles.value}>{missionData.energy}%</Text>
      </View>

      <LineChart
        data={{
          labels: ["T-5", "T-4", "T-3", "T-2", "T-1", "Agora"],
          datasets: [
            {
              data: [82, 76, 71, 68, 65, missionData.energy],
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
        <Text style={styles.label}>Geração Solar</Text>
        <Text style={styles.value}>42 kW</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Consumo dos Sistemas</Text>
        <Text style={styles.value}>36 kW</Text>
      </View>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#101935",
  backgroundGradientTo: "#101935",
  decimalPlaces: 0,
  color: () => "#00FF9C",
  labelColor: () => "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },
  title: {
    color: "#00FF9C",
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