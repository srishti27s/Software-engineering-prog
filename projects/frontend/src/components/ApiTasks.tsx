
import { useEffect, useState } from "react";

type ApiTask = {
  id: number;
  title: string;
  completed: boolean;
};

function ApiTasks() {
  const [tasks, setTasks] = useState<ApiTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
async function loadTasks(signal?: AbortSignal) {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
      { signal }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const data: ApiTask[] = await response.json();
    setTasks(data);
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      return;
    }

    setError("Could not load tasks. Please try again.");
  } finally {
    if (!signal?.aborted) {
      setLoading(false);
    }
  }
}


  

useEffect(() => {
  const controller = new AbortController();

  loadTasks(controller.signal);

  return () => {
    controller.abort();
  };
}, []);


  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return (
      <section className="goals-section">
        <p role="alert">{error}</p>
        <button onClick={loadTasks}>Retry</button>
      </section>
    );
  }

  return (
    <section className="goals-section">
      <h2>Tasks from an API</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            {task.completed ? "✓ Completed" : "• Pending"}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ApiTasks;
