import { useAuth0 } from "@auth0/auth0-react";
import axios, { type AxiosInstance } from "axios";
import { createContext, use, useMemo } from "react";

const AxiosContext = createContext<AxiosInstance | null>(null);

const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  // const [token, setToken] = useState<string | null>(null);

  const { getAccessTokenSilently } = useAuth0();

  const axiosInstance: AxiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use(
      async (config) => {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://test-chat-app-great-fe.com",
          },
        });
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    return instance;
  }, [getAccessTokenSilently]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

const useAxios = () => {
  const context = use(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AxiosProvider, useAxios };
