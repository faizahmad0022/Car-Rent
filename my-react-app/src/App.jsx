

import { useState } from "react";
import AppRoutes from "./routes/app-routes";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <AppRoutes />
    </div>
  );
}

export default App;
