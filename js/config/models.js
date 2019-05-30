import AsyncStorage from "@react-native-community/async-storage";

export const createFave = async id => {
  try {
    await AsyncStorage.setItem(
      `${id}`,
      JSON.stringify({ id, faveOn: new Date() })
    );
    console.log("created");
  } catch (e) {
    return false;
  }
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    console.log("keys", keys);
    return await AsyncStorage.multiGet(keys);
  } catch (e) {
    return false;
  }
};

export const removeFave = async id => {
  try {
    await AsyncStorage.removeItem(`${id}`);
  } catch (e) {
    return false;
  }
};
