import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  description: string;
  size: string;
  image: string;
}

const defaultProducts: Product[] = [
  { id: 1, name: "BeNew Premium Packaged Drinking Water", description: "Safe drinking water with modern purification", size: "1 Liter", image: "" },
  { id: 2, name: "BeNew Packaged Drinking Water", description: "Portable, ideal for travel", size: "500 ml", image: "" },
];

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("admin_products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", size: "", image: "" });

  const save = (list: Product[]) => {
    setProducts(list);
    localStorage.setItem("admin_products", JSON.stringify(list));
  };

  const handleAdd = () => {
    if (!form.name) return toast.error("Product name required");
    const newP: Product = { ...form, id: Date.now() };
    save([...products, newP]);
    setForm({ name: "", description: "", size: "", image: "" });
    setShowForm(false);
    toast.success("Product added!");
  };

  const handleUpdate = () => {
    if (!editing) return;
    save(products.map((p) => (p.id === editing.id ? { ...editing, ...form } : p)));
    setEditing(null);
    setShowForm(false);
    toast.success("Product updated!");
  };

  const handleDelete = (id: number) => {
    save(products.filter((p) => p.id !== id));
    toast.success("Product deleted.");
  };

  const startEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, description: p.description, size: p.size, image: p.image });
    setShowForm(true);
  };

  const startAdd = () => {
    setEditing(null);
    setForm({ name: "", description: "", size: "", image: "" });
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl">Products Manager</h1>
        <Button onClick={startAdd} className="rounded-full font-display">
          <Plus className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </div>

      {showForm && (
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 mb-6 space-y-4">
          <h3 className="font-display font-semibold">{editing ? "Edit Product" : "Add Product"}</h3>
          <Input placeholder="Product Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl" />
          <Textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="rounded-xl" />
          <Input placeholder="Size (e.g. 500ml)" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="rounded-xl" />
          <Input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="rounded-xl" />
          <div className="flex gap-2">
            <Button onClick={editing ? handleUpdate : handleAdd} className="rounded-full font-display">
              {editing ? "Update" : "Add"}
            </Button>
            <Button variant="outline" onClick={() => setShowForm(false)} className="rounded-full">Cancel</Button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {products.map((p) => (
          <div key={p.id} className="bg-card rounded-xl p-4 shadow-card border border-border/50 flex items-center justify-between">
            <div>
              <h4 className="font-display font-semibold">{p.name}</h4>
              <p className="text-sm text-muted-foreground">{p.size} — {p.description}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => startEdit(p)}><Pencil className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
