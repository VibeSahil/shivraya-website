import { useState, useEffect } from "react";
import { Trash2, Mail, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  created_at: string | null;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load messages.");
      console.error(error);
    } else {
      setMessages(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Failed to delete message.");
    } else {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      toast.success("Message deleted.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl">Messages Inbox</h1>

        <Button
          variant="outline"
          size="sm"
          onClick={fetchMessages}
          disabled={loading}
        >
          <RefreshCw
            className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
          />
          Refresh
        </Button>
      </div>

      {loading ? (
        <p className="text-muted-foreground text-center py-16">Loading...</p>
      ) : messages.length === 0 ? (
        <div className="text-center py-16">
          <Mail className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className="bg-card rounded-xl p-5 shadow-card border border-border/50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-display font-semibold">{m.name}</h4>

                  <p className="text-xs text-muted-foreground">
                    {m.phone} {m.email && `• ${m.email}`}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {m.created_at
                      ? new Date(m.created_at).toLocaleString()
                      : "No date available"}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(m.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              <p className="text-sm text-foreground mt-3 bg-muted rounded-lg p-3">
                {m.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;