import mongoose from "mongoose";

/**
 * 0 - disconnected
 * 1 - connected
 * 2 - connecting
 * 3 - disconnecting
 */
const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) return;

  if (mongoose.connections.length) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) return;

    await mongoose.disconnect();
  }
  await mongoose.connect(process.env.MONGO_URL ?? "");
  mongoConnection.isConnected = 1;
};

export const disconnect = async () => {
  if (mongoConnection.isConnected === 0 || process.env.NODE_ENV === "development") return;
  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
};
