import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Answer = ({ ans, totalResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, []);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={dark}
          pretag="div"
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };
  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="pt-2 text-xl block text-white">{answer}</span>
      ) : heading ? (
        <span className={"pb-1 text-lg block text-white"}>{answer}</span>
      ) : (
        <div className={type == "q" ? "pl-1" : "pl-5 pt-0"}>
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default Answer;
