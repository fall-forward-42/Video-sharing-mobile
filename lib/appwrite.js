import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.lihi.share.video",
  projectId: "663b3af9001eaeb725e6",
  databaseId: "663b3d4a001d8bff9e48",
  userCollectionId: "663b3d85002e929c5af5",
  videoCollectionId: "663b3e3e003ae7707f91",
  storageId: "663b41cd003e5131679c",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (username, email, pwd) => {
  // Register User
  try {
    const newAcc = await account.create(ID.unique(), email, pwd, username);
    if (!newAcc) throw Error;

    //init avatar
    const avatarUrl = avatars.getInitials(username);

    //log in
    await signIn(email, pwd);

    //create user
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAcc.$id,
        username: username,
        email: email,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};
export const signIn = async (email, pwd) => {
  try {
    const session = await account.createEmailPasswordSession(email, pwd);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
