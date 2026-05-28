export type AlertLevel = "Baixo" | "Médio" | "Alto" | "Crítico";

export type MissionAlert = {
  id: string;
  title: string;
  message: string;
  level: AlertLevel;
  createdAt: string;
};

export function generateAlerts(missionData: any, thresholds: any): MissionAlert[] {
  const alerts: MissionAlert[] = [];

  if (missionData.temperature > thresholds.maxTemperature) {
    alerts.push({
      id: "temp-critical",
      title: "Temperatura crítica",
      message: `Temperatura atual em ${missionData.temperature}°C. Limite: ${thresholds.maxTemperature}°C.`,
      level: "Crítico",
      createdAt: new Date().toLocaleTimeString("pt-BR"),
    });
  }

  if (missionData.energy < thresholds.minEnergy) {
    alerts.push({
      id: "energy-low",
      title: "Energia baixa",
      message: `Energia atual em ${missionData.energy}%. Mínimo recomendado: ${thresholds.minEnergy}%.`,
      level: "Alto",
      createdAt: new Date().toLocaleTimeString("pt-BR"),
    });
  }

  if (missionData.signal < thresholds.minSignal) {
    alerts.push({
      id: "signal-low",
      title: "Sinal de comunicação fraco",
      message: `Sinal atual em ${missionData.signal}%. Mínimo esperado: ${thresholds.minSignal}%.`,
      level: "Médio",
      createdAt: new Date().toLocaleTimeString("pt-BR"),
    });
  }

  if (missionData.latency > thresholds.maxLatency) {
    alerts.push({
      id: "latency-high",
      title: "Latência elevada",
      message: `Latência atual em ${missionData.latency}ms. Limite: ${thresholds.maxLatency}ms.`,
      level: "Médio",
      createdAt: new Date().toLocaleTimeString("pt-BR"),
    });
  }

  if (missionData.orbitalStability < 80) {
    alerts.push({
      id: "orbit-instability",
      title: "Instabilidade orbital",
      message: `Estabilidade orbital em ${missionData.orbitalStability}%. Verificação recomendada.`,
      level: "Alto",
      createdAt: new Date().toLocaleTimeString("pt-BR"),
    });
  }

  return alerts;
}