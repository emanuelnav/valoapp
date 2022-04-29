import React, { useEffect } from "react";
import { AgentCard } from "./AgentCard";

function Home() {
    const [agentsData, setAgentsData] = React.useState(null);

    useEffect(() => {
        fetchAgentsData();

        async function fetchAgentsData() {
            const result = await fetch(`https://valorant-api.com/v1/agents`);
            const data = await result.json();
            setAgentsData(data);
        }
    }, []);

    if (!agentsData) return <div></div>

    return (
        <React.Fragment>
            { agentsData.data.map( agent =>
                <AgentCard agent={agent} key={agent.uuid}/>
            )}
        </React.Fragment>
    );
}

export { Home };
