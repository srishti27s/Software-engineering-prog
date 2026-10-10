
import { useEffect, useState } from "react";


type Goal = {
  id: number;
  title: string;
  category: "DSA" | "Frontend" | "Setup";
  difficulty: "Easy" | "Medium";
};

const initialGoals: Goal[] = [
  {
    id: 1,
    title: "Learn Big-O notation",
    category: "DSA",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Solve Two Sum in Java",
    category: "DSA",
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Practice Contains Duplicate",
    category: "DSA",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Set up my development environment",
    category: "Setup",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Understand React components",
    category: "Frontend",
    difficulty: "Medium",
  },
];



const STORAGE_KEY = "bootcamp-completed-goals";

function TodayGoals() {
  const [completedGoals, setCompletedGoals] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as number[]) : [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completedGoals)
    );
  }, [completedGoals]);

  function toggleGoal(id: number) {
    setCompletedGoals((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  const filteredGoals =
    selectedCategory === "All"
      ? initialGoals
      : initialGoals.filter(
          (goal) => goal.category === selectedCategory
        );

  const progress = Math.round(
    (completedGoals.length / initialGoals.length) * 100
  );

  return (
    <section className="goals-section">
      <h2>Today's Goals</h2>
      <p>
        Completed: {completedGoals.length} / {initialGoals.length}
        {" "}({progress}%)
      </p>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <label>
        Filter by category:{" "}
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="All">All</option>
          <option value="DSA">DSA</option>
          <option value="Frontend">Frontend</option>
          <option value="Setup">Setup</option>
        </select>
      </label>

      <ul className="goals-list">
        {filteredGoals.map((goal) => (
          <li key={goal.id}>
            <label>
              <input
                type="checkbox"
                checked={completedGoals.includes(goal.id)}
                onChange={() => toggleGoal(goal.id)}
              />
              <span
                className={
                  completedGoals.includes(goal.id) ? "completed" : ""
                }
              >
                {goal.title}
              </span>
              {" "}
              <small>
                {goal.category} · {goal.difficulty}
              </small>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodayGoals;
