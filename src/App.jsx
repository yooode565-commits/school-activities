import { useEffect } from "react";
import { supabase } from "./supabase";
import SchoolActivities from "./school-activities";

function App() {
  useEffect(() => {
    async function testConnection() {
      const { error } = await supabase
        .from("students")
        .select("id")
        .limit(1);

      if (error) {
     console.error("Supabase error:", error.message, error.details, error.hint);
      } else {
        console.log("Supabase connected ✅");
      }
    }

    testConnection();
  }, []);

  return <SchoolActivities />;
}

export default App;