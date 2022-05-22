import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AgentCard } from "./AgentCard";
import "../css/AgentPage.css";

function AgentPage() {
  let params = useParams();

  const [agentsData, setAgentsData] = React.useState(null);

    useEffect(() => {
        fetchAgentData();

        async function fetchAgentData() {
          const result = await fetch(`https://valorant-api.com/v1/agents`);
          const data = await result.json();
          setAgentsData(data);
        }
    }, [params.agentId]);

    if (!agentsData) return <div></div>

  return (
    <div className="flex">
      { agentsData.data.map( agent =>
        <AgentCard agent={agent} key={agent.uuid}/>
      )}
    </div>
  );
}

export { AgentPage };



