import { useChatFriendsList } from "@/hooks/useChatFriends";
import { AddFriendDialog } from "../AddFriendDialog";
import type { ChatFriend } from "@/types";
import cx from "clsx";

const ChatListItem = ({ friend }: { friend: ChatFriend }) => {
  const isActive = true;

  return (
    <button
      className={cx(
        "w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100",
        isActive && "bg-slate-900 text-white",
      )}
    >
      {friend.email}
    </button>
  );
};

const ChatUsersList = () => {
  const { data: friendsList, error } = useChatFriendsList();

  console.log("Helperdebug", error);

  return (
    <aside className="flex w-full flex-col border-b border-slate-200 bg-slate-50 md:w-72 md:border-r md:border-b-0">
      <div className="border-b border-slate-200 p-4">
        <h2 className="text-lg font-semibold text-slate-900">Chats</h2>
        <p className="text-sm text-slate-500">Recent conversations</p>
      </div>
      <nav className="space-y-2 p-3">
        {friendsList?.map((friend) => (
          <ChatListItem key={friend.id} friend={friend} />
        ))}
      </nav>
      <div className="mt-auto border-t border-slate-200 p-3">
        <AddFriendDialog />
      </div>
    </aside>
  );
};

export { ChatUsersList };
