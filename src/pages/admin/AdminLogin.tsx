import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sgLogo from "@/assets/sg-logo.jpeg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Login failed: " + error.message);
      } else if (data.session) {
        window.location.href = "/admin";
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
            <img src={sgLogo} alt="Shivraya Group" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-gray-500">Shivraya Group Dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleLogin()}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleLogin()}
        />
        <Button
          className="w-full bg-green-800 hover:bg-green-900"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;