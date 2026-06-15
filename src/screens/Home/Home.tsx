import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./HomeStyles";

const feedData = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Home() {
  const leftColumn = feedData.filter((_, index) => index % 2 === 0);
  const rightColumn = feedData.filter((_, index) => index % 2 !== 0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTabActive}>Para você</Text>
        <Text style={styles.headerTab}>Arte estética</Text>
        <Text style={styles.headerTab}>Copa do Mundo</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.feedContainer}>
          <View style={styles.column}>
            {leftColumn.map((id) => (
              <View key={id} style={styles.card}>
                <Image
                  source={{
                    uri: `https://picsum.photos/200/${200 + id * 20}?random=${id}`,
                  }}
                  style={[styles.image, { height: 200 + id * 10 }]}
                />
              </View>
            ))}
          </View>

          <View style={styles.column}>
            {rightColumn.map((id) => (
              <View key={id} style={styles.card}>
                <Image
                  source={{
                    uri: `https://picsum.photos/200/${200 + id * 20}?random=${id + 100}`,
                  }}
                  style={[styles.image, { height: 200 + id * 10 }]}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Image
          source={require("../../../assets/house-solid.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../../assets/magnifying-glass-solid.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../../assets/plus-solid.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../../assets/comment-dots-regular.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../../../assets/pinterest_logo.png")}
          style={styles.navIcon}
        />
      </View>
    </View>
  );
}
