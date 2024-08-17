import { ScrollView, Text, View, Linking, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { Screen } from "../../components/Screen";
import { LinkedInIcon, EmailIcon } from "../../components/Icons";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold text-2xl text-center">
          Welcome to Metacritic!
        </Text>
        <Text className="text-white mb-6 text-center">
          Here's how we help you find the stuff you love.
        </Text>
        <Image
          source={{
            uri: "https://www.metacritic.com/a/neutron/images/about/welcome-metacritic.jpg",
          }}
          className="w-full h-32 self-center rounded-lg"
        />
        <Text className="text-white mt-6 mb-6 font-bold text-xl text-center">
          Discover the Power of the Metascore
        </Text>
        <View className="flex-row space-x-4 justify-center mb-6">
          <View className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
            <Text className="text-xl font-bold">90</Text>
          </View>
          <View className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
            <Text className="text-xl font-bold">52</Text>
          </View>
          <View className="w-12 h-12 bg-red-500 rounded flex items-center justify-center">
            <Text className="text-white text-xl font-bold">24</Text>
          </View>
        </View>
        <Text className="text-white mb-6 text-center">
          The Metascore is a single score that represents the critical consensus
          for games, movies, TV shows and albums.
        </Text>
        <Image
          source={{
            uri: "https://www.metacritic.com/a/neutron/images/about/create-metascore.png",
          }}
          className="w-full h-56 self-center rounded-lg"
        />
        <Text className="text-white mt-6 mb-6 font-bold text-lg text-center">
          How we create the Metascore
        </Text>
        <View className="flex-row items-center">
          <View className="rounded-full bg-white w-8 h-8 flex items-center justify-center mr-2">
            <Text className="text-black font-bold">1</Text>
          </View>
          <Text className="text-white flex-shrink">
            We curate a diverse group of highly respected critics and assign
            scores to their reviews.
          </Text>
        </View>
        <View className="flex-row items-center">
          <View className="rounded-full bg-white w-8 h-8 flex items-center justify-center mr-2">
            <Text className="text-black font-bold">2</Text>
          </View>
          <Text className="text-white flex-shrink">
            The weighted average of those scores results in a single number and
            color, the Metascore.
          </Text>
        </View>
        <Image
          source={{
            uri: "https://www.metacritic.com/a/neutron/images/about/must-badges.png",
          }}
          className="w-full self-center rounded-lg mt-6"
          style={{
            height: 234
          }}
        />
        <Text className="text-white mt-6 mb-6 font-bold text-lg text-center">
          Find what is critically acclaimed
        </Text>
        <Text className="text-white mb-6 text-center">
          Our Must-Badges showcase the best entertainment as determined by the most respected critics.
        </Text>
        <Text className="text-white font-bold text-2xl text-center mb-6">
          Level Up Your Experience
        </Text>
        <Image
          source={{
            uri: "https://www.metacritic.com/a/neutron/images/about/rating-metascore.png",
          }}
          className="w-full self-center rounded-lg"
          style={{
            height: 181
          }}
        />
        <Text className="text-white mt-6 mb-6 font-bold text-lg text-center">
          Sound off with your own ratings and reviews
        </Text>
        <Text className="text-white text-center">
          Share your voice with our community by adding your own ratings and reviews.
        </Text>
        <Image
          source={{
            uri: "https://www.metacritic.com/a/neutron/images/about/where-to-watch.png",
          }}
          className="w-full h-56 self-center rounded-lg mt-6"
        />
        <Text className="text-white mt-6 mb-6 font-bold text-lg text-center">
          Find where to watch or play
        </Text>
        <Text className="text-white mb-6 text-center">
          Manage your preferred streaming and gaming platforms for your next choice of entertainment.
        </Text>
        <Text className="text-white mb-6 font-bold text-xl text-center">
          Join our Metacritic Community
        </Text>
        <Pressable className="bg-orange-500 mb-6 w-11/12 h-10 self-center items-center justify-center rounded active:opacity-70" onPressOut={() => Linking.openURL('https://www.metacritic.com/')}>
          <Text className="font-bold text-sm">
            Register
          </Text>
        </Pressable>
        <View className="flex-row">
          <View className="bg-green-500 w-1/3 h-4"></View>
          <View className="bg-orange-500 w-1/3 h-4"></View>
          <View className="bg-red-500 w-1/3 h-4"></View>
        </View>
        <View className="flex">
          <View className="items-center mt-6">
            <Image source={{
              uri: "https://github.com/VitorBittencourtOliveira.png",
              }}
              className="w-72 h-72 rounded-full border-8 border-white" />
            <Text className="text-white font-bold text-2xl mt-6 mb-6">
              Contact me
            </Text>
          </View>
          <View className="flex-row mb-6 justify-between">
            <TouchableOpacity className="flex-row justify-between space-x-1.5 space-y-1" onPress={() => Linking.openURL('https://www.linkedin.com/in/vitorbittencourtoliveira/')}>
              <LinkedInIcon />
              <Text className="text-white">
                vitorbittencourtoliveira
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between space-x-1.5 space-y-1" onPress={() => Linking.openURL('mailto:vitortte@outlook.com')}>
              <EmailIcon />
              <Text className="text-white">
                vitortte@outlook.com
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row">
          <View className="bg-green-500 w-1/3 h-4"></View>
          <View className="bg-orange-500 w-1/3 h-4"></View>
          <View className="bg-red-500 w-1/3 h-4"></View>
        </View>
      </ScrollView>
    </Screen>
  );
}