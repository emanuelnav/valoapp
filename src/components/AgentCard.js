import React from "react";
import "../css/AgentCard.css";

function AgentCard({agent}) {
    return (
      <React.Fragment>
        {agent.isPlayableCharacter && (
          <div>
            <p>{agent.displayName}</p>
            <img className="icon-img" src={agent.displayIcon} alt={agent.displayName}></img>
          </div>
        )}
      </React.Fragment>
    );
}

export { AgentCard };
