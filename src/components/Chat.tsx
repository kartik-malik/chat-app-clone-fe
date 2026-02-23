import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useAxios } from "../Providers/AxiosProvider";
import { ChatWindow } from "./Chat/ChatWindow";
import { ChatUsersList } from "./Chat/ChatUsersList";

function Chat() {
  const { isAuthenticated } = useAuth0();

  const axios = useAxios();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Helperdebug: auth");
      axios.post("/api/user");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col bg-white md:flex-row">
      <ChatUsersList />
      <ChatWindow />
    </main>
  );
}

export default Chat;
