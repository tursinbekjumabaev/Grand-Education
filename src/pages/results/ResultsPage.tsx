import AppLayout from "@/widgets/layout/AppLayout";
import ResultsSummary from "@/widgets/results/ResultsSummary";
import StudentsGrowthChart from "@/widgets/results/StudentsGrowthChart";
import ApplicationsChart from "@/widgets/results/ApplicationsChart";
import CoursePopularityChart from "@/widgets/results/CoursePopularityChart";
import ExamAverageChart from "@/widgets/results/ExamAverageChart";

export default function ResultsPage() {
  return (
    <AppLayout>
      <ResultsSummary />
      <StudentsGrowthChart />
      <ApplicationsChart />
      <CoursePopularityChart />
      <ExamAverageChart />
    </AppLayout>
  );
}