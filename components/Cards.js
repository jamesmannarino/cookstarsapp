import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";


export default function Cards(props) {
  const { day, index, navigation, recipes } = props;
  // console.log({ recipes, rIndex: recipes[index], index });
  const img = recipes[index].image;
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("SingleRecipe", {
            index: index,
            day: day,
            recipe: recipes[index],
          })
        }
      >

        <View style={styles.imgContainer}>
          {/* {showRecipeImg()} */}
          <Image
            source={{
              uri: img,
            }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.recipeOfTheDay}>{day}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    width: "50%",
    height: 300,
    alignItems: "center",
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  labelContainer: {
    position: "absolute",
    top: 150,
    height: 37,
    width: 100,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,1)",
  },
  recipeOfTheDay: {
    opacity: 0.9,
    backgroundColor: "transparent",
    color: "rgba(35,40,58,1)",
    fontSize: 19,
    marginTop: 7,
    textAlign: "center",
  },
});
