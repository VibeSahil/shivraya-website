import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", description: "", icon: "" });
  const [editId, setEditId] = useState(null);

  const fetchServices = async () => {
    const { data } = await supabase.from("services").select("*").order("created_at", { ascending: false });
    setServices(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchServices(); }, []);

  const handleSave = async () => {
    if (!form.title) return toast({ title: "Title is required", variant: "destructive" });
    if (editId) {
      await supabase.from("services").update(form).eq("id", editId);
      toast({ title: "Service updated!" });
    } else {
      await supabase.from("services").insert(form);
      toast({ title: "Service added!" });
    }
    setForm({ title: "", description: "", icon: "" });
    setEditId(null);
    fetchServices();
  };

  const handleDelete = async (id) => {
    await supabase.from("services").delete().eq("id", id);
    toast({ title: "Service deleted!" });
    fetchServices();
  };

  const handleEdit = (s) => { setForm({ title: s.title, description: s.description, icon: s.icon || "" }); setEditId(s.id); };

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="font-bold text-2xl mb-6">Services Manager</h1>
      <div className="bg-white rounded-lg p-4 shadow mb-6 space-y-3">
        <h2 className="font-semibold text-lg">{editId ? "Edit Service" : "Add New Service"}</h2>
        <Input placeholder="Service Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <Textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <Input placeholder="Icon name (optional)" value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} />
        <div className="flex gap-2">
          <Button onClick={handleSave}>{editId ? "Update" : "Add Service"}</Button>
          {editId && <Button variant="outline" onClick={() => { setEditId(null); setForm({ title: "", description: "", icon: "" }); }}>Cancel</Button>}
        </div>
      </div>
      {loading ? <p>Loading...</p> : services.length === 0 ? <p className="text-muted-foreground">No services yet. Add one above!</p> : (
        <div className="space-y-3">
          {services.map(s => (
            <div key={s.id} className="bg-white rounded-lg p-4 shadow flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(s)}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(s.id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminServices;
