import * as Network from "expo-network";

export const isOnline = async (): Promise<boolean> => {
  const res = await Network.getNetworkStateAsync();
  return !!res.isConnected;
};
