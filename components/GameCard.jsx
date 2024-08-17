import { useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";

import { Score } from "./Score";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View className="flex-row gap-4" key={game.slug}>
          <Image source={{ uri: game.image }} className="w-28 h-40 rounded-lg"/>
          <View className="flex-shrink">
            <Text className="mb-1 text-white font-bold mt-2.5" style={{ fontSize: 20 }}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink text-white" style={{ fontSize: 16 }}>
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}