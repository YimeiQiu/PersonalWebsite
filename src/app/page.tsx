import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground">
      <div className="grid grid-cols-[minmax(0,1fr)_256px_min(48rem,calc(100%-256px))_minmax(0,192px)_minmax(0,1fr)] min-h-screen">
        <div className="bg-foreground" />
        <Sidebar />
        <MainContent />
        <div className="bg-foreground" />
        <div className="bg-foreground" />
      </div>
    </div>
  );
}
