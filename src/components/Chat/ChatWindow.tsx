const mockMessages = [
  { id: 1, role: "assistant", text: "Hi, how can I help you today?" },
  { id: 2, role: "user", text: "I need a basic chat page layout." },
  {
    id: 3,
    role: "assistant",
    text: "Done. This is a static UI scaffold for now.",
  },
] as const;

const ChatWindow = () => {
  return (
    <section className="flex min-h-[70vh] flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          <h1 className="text-base font-semibold text-slate-900">
            Product Support
          </h1>
          <p className="text-sm text-slate-500">3 participants</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Online
        </span>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto bg-slate-100 p-4">
        {mockMessages.map((message) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <article
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                  isUser ? "bg-slate-900 text-white" : "bg-white text-slate-800"
                }`}
              >
                {message.text}
              </article>
            </div>
          );
        })}
      </div>

      <footer className="border-t border-slate-200 bg-white p-3">
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900"
          />
          <button
            type="button"
            className="h-11 rounded-lg bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
          >
            Send
          </button>
        </form>
      </footer>
    </section>
  );
};

export { ChatWindow };
