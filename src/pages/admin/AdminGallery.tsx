import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  category: string;
}

const AdminGallery = () => {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem("admin_gallery");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ url: "", caption: "", category: "Product" });
  const [showForm, setShowForm] = useState(false);

  const save = (list: GalleryItem[]) => {
    setItems(list);
    localStorage.setItem("admin_gallery", JSON.stringify(list));
  };

  const handleAdd = () => {
    if (!form.url) return toast.error("Image URL required");
    save([...items, { ...form, id: Date.now() }]);
    setForm({ url: "", caption: "", category: "Product" });
    setShowForm(false);
    toast.success("Image added!");
  };

  const handleDelete = (id: number) => {
    save(items.filter((i) => i.id !== id));
    toast.success("Image removed.");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl">Gallery Manager</h1>
        <Button onClick={() => setShowForm(!showForm)} className="rounded-full font-display">
          <Plus className="h-4 w-4 mr-2" /> Add Image
        </Button>
      </div>

      {showForm && (
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 mb-6 space-y-4">
          <Input placeholder="Image URL" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} className="rounded-xl" />
          <Input placeholder="Caption" value={form.caption} onChange={(e) => setForm({ ...form, caption: e.target.value })} className="rounded-xl" />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-xl border border-input bg-background px-3 h-10 text-sm"
          >
            <option>Product</option>
            <option>Brand</option>
            <option>Lifestyle</option>
            <option>Marketing</option>
          </select>
          <div className="flex gap-2">
            <Button onClick={handleAdd} className="rounded-full font-display">Add</Button>
            <Button variant="outline" onClick={() => setShowForm(false)} className="rounded-full">Cancel</Button>
          </div>
        </div>
      )}

      {items.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">No gallery images yet. Add your first one!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50">
              <img src={item.url} alt={item.caption} className="w-full h-40 object-cover" />
              <div className="p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{item.caption || "Untitled"}</p>
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
