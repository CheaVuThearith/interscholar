import React from "react";

type Props = { className: string };

const ConsultantIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 611.999 612"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M416.5,497.25v40.627c0,6.021-4.434,13.02-9.935,15.468c-21.321,9.486-79.477,28.905-198.315,28.905
		c-118.839,0-176.995-19.419-198.316-28.905C4.433,550.897,0,543.898,0,537.876V497.25c0-60.88,46.353-111.387,105.5-118.15
		c1.797-0.206,4.462,0.563,5.927,1.624c27.271,19.743,60.658,31.526,96.824,31.526c36.167,0,69.553-11.783,96.824-31.526
		c1.465-1.061,4.131-1.83,5.928-1.624C370.147,385.863,416.5,436.37,416.5,497.25z M85,246.5c0-68.069,55.181-123.25,123.25-123.25
		c68.069,0,123.25,55.181,123.25,123.25c0,68.068-55.181,123.25-123.25,123.25C140.181,369.75,85,314.568,85,246.5z
		 M149.935,295.417c5.607,18.538,29.624,32.474,58.409,32.474c28.785,0,52.803-13.936,58.41-32.474H149.935z M586.5,29.75h-204
		c-14.025,0-25.5,11.475-25.5,25.5v119.255c0,13.885,11.36,25.245,25.245,25.245h0.255v34c0,7.004,7.996,11.003,13.601,6.8
		l52.133-39.1c1.247-0.935,3.542-1.7,5.1-1.7H586.5c14.025,0,25.499-11.475,25.499-25.5v-119C612,41.225,600.525,29.75,586.5,29.75z
		"
        />
      </g>
    </svg>
  );
};

export default ConsultantIcon;