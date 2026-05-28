import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useMission } from "../../context/MissionContext";

export default function Configuracoes() {
  const { thresholds, updateThresholds } = useMission();

  const [maxTemperature, setMaxTemperature] = useState(
    String(thresholds.maxTemperature)
  );
  const [minEnergy, setMinEnergy] = useState(String(thresholds.minEnergy));
  const [minSignal, setMinSignal] = useState(String(thresholds.minSignal));
  const [maxLatency, setMaxLatency] = useState(String(thresholds.maxLatency));

  const [errors, setErrors] = useState({
    maxTemperature: "",
    minEnergy: "",
    minSignal: "",
    maxLatency: "",
  });

  function validate() {
    const newErrors = {
      maxTemperature: "",
      minEnergy: "",
      minSignal: "",
      maxLatency: "",
    };

    const temp = Number(maxTemperature);
    const energy = Number(minEnergy);
    const signal = Number(minSignal);
    const latency = Number(maxLatency);

    if (!maxTemperature || temp <= 0) {
      newErrors.maxTemperature = "Informe uma temperatura maior que 0.";
    }

    if (!minEnergy || energy < 0 || energy > 100) {
      newErrors.minEnergy = "A energia deve estar entre 0 e 100.";
    }

    if (!minSignal || signal < 0 || signal > 100) {
      newErrors.minSignal = "O sinal deve estar entre 0 e 100.";
    }

    if (!maxLatency || latency <= 0) {
      newErrors.maxLatency = "Informe uma latência maior que 0.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  }

  function handleSave() {
    if (!validate()) return;

    updateThresholds({
      maxTemperature: Number(maxTemperature),
      minEnergy: Number(minEnergy),
      minSignal: Number(minSignal),
      maxLatency: Number(maxLatency),
    });

    Alert.alert("Configurações salvas", "Os novos limites foram aplicados.");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Configurações de Alerta</Text>
      <Text style={styles.subtitle}>
        Defina os limites críticos da missão espacial.
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Temperatura máxima permitida (°C)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={maxTemperature}
          onChangeText={setMaxTemperature}
          placeholder="Ex: 80"
          placeholderTextColor="#777"
        />
        {errors.maxTemperature ? (
          <Text style={styles.error}>{errors.maxTemperature}</Text>
        ) : null}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Energia mínima (%)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={minEnergy}
          onChangeText={setMinEnergy}
          placeholder="Ex: 30"
          placeholderTextColor="#777"
        />
        {errors.minEnergy ? (
          <Text style={styles.error}>{errors.minEnergy}</Text>
        ) : null}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Sinal mínimo (%)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={minSignal}
          onChangeText={setMinSignal}
          placeholder="Ex: 60"
          placeholderTextColor="#777"
        />
        {errors.minSignal ? (
          <Text style={styles.error}>{errors.minSignal}</Text>
        ) : null}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Latência máxima (ms)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={maxLatency}
          onChangeText={setMaxLatency}
          placeholder="Ex: 500"
          placeholderTextColor="#777"
        />
        {errors.maxLatency ? (
          <Text style={styles.error}>{errors.maxLatency}</Text>
        ) : null}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Configurações</Text>
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Limites atuais</Text>
        <Text style={styles.infoText}>Temperatura máxima: {thresholds.maxTemperature}°C</Text>
        <Text style={styles.infoText}>Energia mínima: {thresholds.minEnergy}%</Text>
        <Text style={styles.infoText}>Sinal mínimo: {thresholds.minSignal}%</Text>
        <Text style={styles.infoText}>Latência máxima: {thresholds.maxLatency}ms</Text>
      </View>
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
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#AAB2D5",
    fontSize: 15,
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    color: "#E5E7EB",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#111827",
    borderColor: "#26304D",
    borderWidth: 1,
    borderRadius: 12,
    color: "#FFFFFF",
    padding: 14,
    fontSize: 16,
  },
  error: {
    color: "#FF6B6B",
    fontSize: 13,
    marginTop: 6,
  },
  button: {
    backgroundColor: "#7DF9FF",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#050816",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoBox: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 18,
    marginTop: 24,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#26304D",
  },
  infoTitle: {
    color: "#7DF9FF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoText: {
    color: "#E5E7EB",
    fontSize: 14,
    marginBottom: 6,
  },
});