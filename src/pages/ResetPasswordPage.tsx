import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, KeyRound, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const hasRecoveryToken = hashParams.get("type") === "recovery" || hashParams.has("access_token");

    if (hasRecoveryToken) {
      setReady(true);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setReady(true);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || (hasRecoveryToken && session)) {
        setReady(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      toast.success("Password updated. You can now sign in.");
      navigate("/admin/login");
    } catch (err: any) {
      toast.error(err.message || "Unable to update password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="bg-card rounded-3xl shadow-card p-8 w-full max-w-md border border-border/50">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
          <Lock className="h-6 w-6 text-primary-foreground" />
        </div>

        <div className="text-center mb-6">
          <h1 className="font-display font-bold text-2xl">Set New Password</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Open the reset link from your email, then create a new admin password.
          </p>
        </div>

        {ready ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl h-12"
              minLength={6}
              required
            />
            <Input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-xl h-12"
              minLength={6}
              required
            />
            <Button type="submit" className="w-full rounded-full font-display font-semibold h-12" disabled={loading}>
              {loading ? "Saving..." : (
                <>
                  <KeyRound className="h-4 w-4 mr-2" />
                  Save New Password
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 text-center">
            <div className="rounded-2xl border border-border bg-muted/60 p-4 text-sm text-muted-foreground">
              To reset the admin password, first click <span className="font-medium text-foreground">Reset Password</span> on the admin login page and open the email link.
            </div>
            <Button asChild className="w-full rounded-full font-display font-semibold h-12">
              <Link to="/admin/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin Login
              </Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ResetPasswordPage;
