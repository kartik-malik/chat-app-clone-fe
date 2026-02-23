import { useAxios } from "@/Providers/AxiosProvider";
import type { ChatFriendsList } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

const useChatFriendsList = () => {
  const axios = useAxios();

  const fetchChatFriendsList = useCallback(async () => {
    console.log("Helperdebug: fetching list");
    const response = await axios.get<ChatFriendsList>("/api/friends");
    return response.data;
  }, [axios]);

  return useQuery({
    queryKey: ["chat-friends-list"],
    queryFn: fetchChatFriendsList,
  });
};

export { useChatFriendsList };
