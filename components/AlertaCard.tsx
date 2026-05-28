import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MissionAlert } from "../utils/alertaRules";

type Props = {
  alert: MissionAlert;
};

export default function AlertaCard({ alert }: Props) {
  const colorByLevel: Record<string, string> = {
    Baixo: "#7DF9FF",
    Médio: "#FFD166",
    Alto: "#FF9F1C",
    Crítico: "#FF6B6B",
  };

  const color = colorByLevel[alert.level] || "#7DF9FF";

  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={styles.header}>
        <Ionicons name="warning" size={24} color={color} />

        <View style={styles.titleBox}>
          <Text style={styles.title}>{alert.title}</Text>
          <Text style={[styles.level, { color }]}>{alert.level}</Text>
        </View>

        <Text style={styles.time}>{alert.createdAt}</Text>
      </View>

      <Text style={styles.message}>{alert.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titleBox: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  level: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 2,
  },
  time: {
    color: "#AAB2D5",
    fontSize: 12,
  },
  message: {
    color: "#D1D5DB",
    fontSize: 14,
    lineHeight: 20,
  },
});