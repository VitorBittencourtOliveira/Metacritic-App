import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import { Screen } from "../components/Screen";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";
import { StatusBar } from "expo-status-bar";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <StatusBar style="black" />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: "Description",
        }}
      />
      <View>
        {gameInfo == null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded w-56 h-80"
                source={{ uri: gameInfo.img }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold mb-8 text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
