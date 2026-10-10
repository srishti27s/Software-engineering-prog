
import TodayGoals from "./components/TodayGoals";
import ProgressCard from "./components/ProgressCard";
import ApiTasks from "./components/ApiTasks";
import "./App.css";

function App() {
  return (
    <main className="dashboard">
      <header>
        <h1>My 90-Day Software Engineer Bootcamp</h1>
        <p>Day 1: Building my developer journey.</p>
      </header>

      <section className="progress-grid">
        <ProgressCard
          title="Current Day"
          value="Day 1"
          description="Building strong foundations"
        />

        <ProgressCard
          title="DSA Problems"
          value="2"
          description="Today's target"
        />

        <ProgressCard
          title="Daily Study"
          value="8 hrs"
          description="Focused learning target"
        />
      </section>

      <TodayGoals />
      <ApiTasks />
    </main>
  );
}

export default App;
