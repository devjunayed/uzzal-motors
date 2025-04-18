import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User as FirebaseUser,
  signOut,
} from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { useCookies } from "react-cookie";

// Define the shape of the AuthContext value
interface AuthContextType {
  user: FirebaseUser | null; // Firebase user object or null
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  cookies: { [key: string]: string }; // Object representing cookies
  setCookie: (name: string, value: string, options?: any) => void; // Function type for setting cookies
  removeCookie: (name: string, options?: any) => void; // Function type for removing cookies
}

// Creating context with the correct type or undefined as initial value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Main AuthProvider function
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  // Creating user
  const createUser = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // Signing in user
  const signInWithEmail = async (
    email: string,
    password: string
  ): Promise<void> => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Logging out user
  const logOut = async (): Promise<void> => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  // Values to provide via context
  const values: AuthContextType = {
    user,
    loading,
    createUser,
    signInWithEmail,
    logOut,
    cookies,
    setCookie,
    removeCookie,
  };

  // Observer auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        // Example: Set cookie when user is logged in
        setCookie("token", "exampleTokenValue", { path: "/" });
      } else {
        // Example: Remove cookie when user is logged out
        removeCookie("token");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [setCookie, removeCookie]);

  // Returning the children with access to the global values
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
