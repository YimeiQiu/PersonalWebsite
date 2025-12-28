import { sidebarData } from "@/lib/sidebarData";
import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-background h-screen sticky top-0 p-6 pt-12 pr-4 overflow-y-auto">
      <nav>
        <div className="space-y-4">
          {/* Research Section */}
          <SidebarSection
            title={sidebarData.research.title}
            links={sidebarData.research.links}
          />

          {/* Creation Section */}
          <SidebarSection
            title={sidebarData.creation.title}
            links={sidebarData.creation.links}
          />

          {/* Blog Section */}
          <div>
            <a
              href="#blog"
              className="font-semibold text-gray-900 hover:underline block"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}
