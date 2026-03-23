import { Package, Image, MessageSquare, Wrench } from "lucide-react";

const stats = [
  { icon: Package, label: "Products", value: "2", color: "bg-aqua/30 text-primary" },
  { icon: Image, label: "Gallery Images", value: "4", color: "bg-aqua/30 text-primary" },
  { icon: MessageSquare, label: "Messages", value: "—", color: "bg-aqua/30 text-primary" },
  { icon: Wrench, label: "Services", value: "8", color: "bg-aqua/30 text-primary" },
];

const AdminDashboard = () => (
  <div>
    <h1 className="font-display font-bold text-2xl mb-6">Dashboard Overview</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card rounded-xl p-6 shadow-card border border-border/50">
          <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center mb-3`}>
            <s.icon className="h-5 w-5" />
          </div>
          <p className="text-2xl font-display font-bold">{s.value}</p>
          <p className="text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AdminDashboard;
