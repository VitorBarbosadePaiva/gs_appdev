import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type Thresholds = {
  maxTemperature: number;
  minEnergy: number;
  minSignal: number;
  maxLatency: number;
};

type MissionData = {
  temperature: number;
  energy: number;
  signal: number;
  latency: number;
  orbitalStability: number;
  radiation: number;
  oxygen: number;
  pressure: number;
};

type MissionContextType = {
  missionData: MissionData;
  thresholds: Thresholds;
  updateThresholds: (data: Thresholds) => Promise<void>;
};

const MissionContext = createContext({} as MissionContextType);

export function MissionProvider({ children }: { children: React.ReactNode }) {
  const [missionData, setMissionData] = useState<MissionData>({
    temperature: 72,
    energy: 64,
    signal: 89,
    latency: 230,
    orbitalStability: 96,
    radiation: 24,
    oxygen: 98,
    pressure: 101,
  });

  const [thresholds, setThresholds] = useState<Thresholds>({
    maxTemperature: 80,
    minEnergy: 30,
    minSignal: 60,
    maxLatency: 500,
  });

  useEffect(() => {
    loadThresholds();

    const interval = setInterval(() => {
      setMissionData({
        temperature: Math.floor(Math.random() * 40) + 50,
        energy: Math.floor(Math.random() * 80) + 15,
        signal: Math.floor(Math.random() * 60) + 35,
        latency: Math.floor(Math.random() * 700) + 100,
        orbitalStability: Math.floor(Math.random() * 30) + 70,
        radiation: Math.floor(Math.random() * 30) + 10,
        oxygen: Math.floor(Math.random() * 10) + 90,
        pressure: Math.floor(Math.random() * 20) + 90,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  async function loadThresholds() {
    try {
      const saved = await AsyncStorage.getItem("@thresholds");

      if (saved) {
        setThresholds(JSON.parse(saved));
      }
    } catch (error) {
      console.log("Erro ao carregar configurações:", error);
    }
  }

  async function updateThresholds(data: Thresholds) {
    try {
      setThresholds(data);
      await AsyncStorage.setItem("@thresholds", JSON.stringify(data));
    } catch (error) {
      console.log("Erro ao salvar configurações:", error);
    }
  }

  return (
    <MissionContext.Provider
      value={{
        missionData,
        thresholds,
        updateThresholds,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}