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