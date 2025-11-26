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
    </Tabs>
  );
}
