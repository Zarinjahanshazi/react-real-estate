import { getAuth, updateEmail, updateProfile } from "firebase/auth";

const auth = getAuth();

export const getUserData = () => {
  return auth.currentUser;
};

export const updateUserData = async (obj) => {
  await updateProfile(auth.currentUser, {
    displayName: obj.displayName || undefined,
    photoURL: obj.photoURL || undefined,
  });

  if (obj.email && obj.email !== auth.currentUser.email) {
    await updateEmail(auth.currentUser, obj.email);
  }
};
