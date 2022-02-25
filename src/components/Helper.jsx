import "./Helper.css";

export const Button = ({ text, href }) => {
  return (
    <div id="btn">
      <a href={href}>
        <button class="btn__text">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button__text--main">{text}</span>
        </button>
      </a>
    </div>
  );
};

export const Heading = ({primary, secondary, tertiary, quad}) => {
  return (
    <h1 className="heading__main">
      <span className="whiteTxt">{primary}</span>
      <span className="blueTxt">
        {" "}
        <span className="whiteTxt">{secondary}</span>{tertiary}
        <span className="whiteTxt">{quad}</span>
      </span>
    </h1>
  );
};
