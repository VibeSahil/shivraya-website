import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AdminSettings = () => {
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async () => {
    if (!password.new || password.new !== password.confirm)
      return toast({ title: "Passwords don't match!", variant: "destructive" });
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: password.new });
    setLoading(false);
    if (error) return toast({ title: "Error: " + error.message, variant: "destructive" });
    toast({ title: "Password updated successfully!" });
    setPassword({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="font-bold text-2xl mb-6">Website Settings</h1>
      <div className="bg-white rounded-lg p-4 shadow space-y-3">
        <h2 className="font-semibold text-lg">Change Admin Password</h2>
        <Input type="password" placeholder="New Password" value={password.new} onChange={e => setPassword({ ...password, new: e.target.value })} />
        <Input type="password" placeholder="Confirm New Password" value={password.confirm} onChange={e => setPassword({ ...password, confirm: e.target.value })} />
        <Button onClick={handlePasswordChange} disabled={loading}>{loading ? "Updating..." : "Update Password"}</Button>
      </div>
    </div>
  );
};

export default AdminSettings;
