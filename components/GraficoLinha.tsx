import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

type Props = {
  title: string;
  data: {
    labels: string[];
    datasets: {
      data: number[];
    }[];
  };
  suffix?: string;
};

export default function GraficoLinha({ title, data, suffix = "" }: Props) {
  const width = Dimensions.get("window").width - 40;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <LineChart
        data={data}
        width={width}
        height={220}
        yAxisSuffix={suffix}
        chartConfig={{
          backgroundColor: "#111827",
          backgroundGradientFrom: "#111827",
          backgroundGradientTo: "#111827",
          decimalPlaces: 0,
          color: () => "#7DF9FF",
          labelColor: () => "#AAB2D5",
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "#FFFFFF",
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#26304D",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  chart: {
    borderRadius: 16,
  },
});