import { useState, useEffect } from "react";
import AgentCard from "./AgentCard";
import { supabase } from "../config/supabaseClient";

const MeetOurAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching agents:", error);
      } else {
        setAgents(data);
      }
      setLoading(false);
    };

    fetchAgents();
  }, []);

  if (loading) {
    return (
      <section className="py-20 flex justify-center">
        <div className="w-10 h-10 border-4 border-[#5856D6] border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A]">Meet Our Agents</h2>
          <p className="text-[#4B5563] mt-3">
            Our team of experienced professionals is dedicated to helping you
            navigate the real estate market with confidence and ease.
          </p>
        </div>

        {/* Grid */}
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurAgents;
