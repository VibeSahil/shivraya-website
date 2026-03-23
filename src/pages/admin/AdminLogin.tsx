import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // Verify admin role before navigating
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        await supabase.auth.signOut();
        toast.error("You do not have admin access.");
        return;
      }

      toast.success("Welcome, Admin!");
      navigate("/admin");
    } catch (err: any) {
      toast.error(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Enter the admin email first.");
      return;
    }

    setResetLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      toast.success("Password reset email sent. Open the link in your email.");
    } catch (err: any) {
      toast.error(err.message || "Unable to send reset email.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="bg-card rounded-3xl shadow-card p-8 w-full max-w-md border border-border/50">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="font-display font-bold text-2xl">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Shivraya Group Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="admin-email" className="text-sm font-medium text-foreground">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="admin-email"
                type="email"
                placeholder="Admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl h-12 pl-11"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="admin-password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <Input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl h-12"
              required
              minLength={6}
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-full font-display font-semibold h-12"
            disabled={loading}
          >
            {loading ? "Please wait..." : (
              <><LogIn className="h-4 w-4 mr-2" /> Sign In</>
            )}
          </Button>
        </form>

        <div className="mt-4 space-y-3 text-center">
          <button
            type="button"
            onClick={handleResetPassword}
            disabled={resetLoading}
            className="text-sm text-primary hover:underline disabled:opacity-60"
          >
            {resetLoading ? "Sending reset email..." : "Forgot password? Reset Password"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
