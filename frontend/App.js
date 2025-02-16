import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const MESSAGE_API_URL = (process.env.EXPO_PUBLIC_API_URL || process.env.EXPO_PRIVATE_API_URL) + "/message";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(MESSAGE_API_URL)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
