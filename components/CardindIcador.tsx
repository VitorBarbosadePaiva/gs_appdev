import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  value: string | number;
  unit?: string;
  icon: keyof typeof Ionicons.glyphMap;
  status?: "normal" | "warning" | "danger";
};

export default function CardIndicador({
  title,
  value,
  unit,
  icon,
  status = "normal",
}: Props) {
  const statusColor = {
    normal: "#7DF9FF",
    warning: "#FFD166",
    danger: "#FF6B6B",
  }[status];

  return (
    <View style={styles.card}>
      <View style={[styles.iconBox, { borderColor: statusColor }]}>
        <Ionicons name={icon} size={24} color={statusColor} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={[styles.value, { color: statusColor }]}>
        {value}
        {unit ? <Text style={styles.unit}> {unit}</Text> : null}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 18,
    padding: 16,
    width: "48%",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#26304D",
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  title: {
    color: "#AAB2D5",
    fontSize: 13,
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
  },
  unit: {
    color: "#AAB2D5",
    fontSize: 14,
  },
});