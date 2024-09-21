import { useState, Suspense, lazy } from "react";

import "./App.css";

const Inbox = lazy(() => import("./components/Inbox"));

function App() {
  const [showInbox, setShowInbox] = useState(false);

  return (
    <>
      {showInbox ? (
        <Suspense>
          <Inbox name="Martin" />
        </Suspense>
      ) : (
        <button type="button" onClick={() => setShowInbox(true)}>
          Show inbox
        </button>
      )}
    </>
  );
}

export default App;
