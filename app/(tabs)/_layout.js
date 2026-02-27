import { Tabs } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => <Icon name="add-circle" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => <Icon name="analytics" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="total"
        options={{
          title: "Total",
          tabBarIcon: ({ color, size }) => <Icon name="stats-chart" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
