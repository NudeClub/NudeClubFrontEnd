import Sidebar from "../sidebar";
import Feed from "../feed";
import Suggestions from "../suggestions";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <Feed />
      <Suggestions />
    </div>
  );
}
