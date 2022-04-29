import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/AgentPage.css"

function AgentPage() {
  let params = useParams();

  const [agentData, setAgentData] = React.useState(null);

    useEffect(() => {
        fetchAgentData();

        async function fetchAgentData() {
            const result = await fetch(`https://valorant-api.com/v1/agents/${params.agentId}`);
            const data = await result.json();
            setAgentData(data);
        }
    }, [params.agentId]);

    if (!agentData) return <div></div>

  return (
    <div>
      <h1>{agentData.data.displayName}</h1>
      <p>{agentData.data.description}</p>
      <img className="portrait-img" src={agentData.data.fullPortraitV2} alt={agentData.data.displayName}></img>
    </div>
  );
}

export { AgentPage };