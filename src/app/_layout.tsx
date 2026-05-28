import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MissionProvider } from "../../context/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#0B1026" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#0B1026" },
          tabBarActiveTintColor: "#7DF9FF",
          tabBarInactiveTintColor: "#888",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <Ionicons name="planet" size={22} color={color} />,
          }}
        />

        <Tabs.Screen
          name="sensores"
          options={{
            title: "Sensores",
            tabBarIcon: ({ color }) => <Ionicons name="thermometer" size={22} color={color} />,
          }}
        />

        <Tabs.Screen
          name="energia"
          options={{
            title: "Energia",
            tabBarIcon: ({ color }) => <Ionicons name="battery-charging" size={22} color={color} />,
          }}
        />

        <Tabs.Screen
          name="comunicacao"
          options={{
            title: "Comunicação",
            tabBarIcon: ({ color }) => <Ionicons name="radio" size={22} color={color} />,
          }}
        />

        <Tabs.Screen
          name="alertas"
          options={{
            title: "Alertas",
            tabBarIcon: ({ color }) => <Ionicons name="warning" size={22} color={color} />,
          }}
        />

        <Tabs.Screen
          name="configuracoes"
          options={{
            title: "Config",
            tabBarIcon: ({ color }) => <Ionicons name="settings" size={22} color={color} />,
          }}
        />
      </Tabs>
    </MissionProvider>
  );
}