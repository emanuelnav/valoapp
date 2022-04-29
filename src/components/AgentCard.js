import React from "react";
import { Link } from "react-router-dom";
import "../css/AgentCard.css";

function AgentCard({agent}) {
    return (
      <React.Fragment>
        {agent.isPlayableCharacter && (
          <div>
            <p>{agent.displayName}</p>
            <img className="icon-img" src={agent.displayIcon} alt={agent.displayName}></img>
            <Link to={`/agent/${agent.uuid}`}>Go to Agent page</Link>
          </div>
        )}
      </React.Fragment>
    );
}

export { AgentCard };
