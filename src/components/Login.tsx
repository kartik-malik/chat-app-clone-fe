import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();

  console.log(isAuthenticated, user, isLoading);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Welcome</h1>
        <p className="mt-2 text-sm text-slate-600">
          Sign in with Auth0 to continue.
        </p>

        <div className="mt-6">
          {isLoading ? (
            <p className="text-sm text-slate-500">Checking authentication...</p>
          ) : isAuthenticated ? (
            <div className="space-y-4">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-sm font-medium text-slate-900">
                  {user?.name ?? "Authenticated user"}
                </p>
                <p className="text-xs text-slate-500">
                  {user?.name ?? "No email available"}
                </p>
              </div>
              <button
                type="button"
                className="h-11 w-full rounded-lg bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="h-11 w-full rounded-lg bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
              onClick={() => loginWithRedirect()}
            >
              Log in with Auth0
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Login;
