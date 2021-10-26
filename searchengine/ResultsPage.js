import React from "react";
import ResultContent from "./ResultContent";

function ResultsPage({ state }) {
  var temp = [
    {
      name: 1,
      difficulty: 1,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 2,
      difficulty: 2,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 3,
      difficulty: 3,
      platform:
        "https://lh3.googleusercontent.com/WsR_f03nbqW3qZjCZeXUYmnmhSWXo3hQhLX9hgl9QHydCgbXQi_VJeAwnmtuIgTHKdQ=s200",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 4,
      difficulty: 4,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 5,
      difficulty: 5,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 6,
      difficulty: 6,
      platform:
        "https://lh3.googleusercontent.com/WsR_f03nbqW3qZjCZeXUYmnmhSWXo3hQhLX9hgl9QHydCgbXQi_VJeAwnmtuIgTHKdQ=s200",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 7,
      difficulty: 7,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 8,
      difficulty: 8,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 9,
      difficulty: 9,
      platform:
        "https://lh3.googleusercontent.com/WsR_f03nbqW3qZjCZeXUYmnmhSWXo3hQhLX9hgl9QHydCgbXQi_VJeAwnmtuIgTHKdQ=s200",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 10,
      difficulty: 10,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 11,
      difficulty: 11,
      platform: "https://leetcode.com/static/images/LeetCode_logo.png",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      name: 12,
      difficulty: 12,
      platform:
        "https://lh3.googleusercontent.com/WsR_f03nbqW3qZjCZeXUYmnmhSWXo3hQhLX9hgl9QHydCgbXQi_VJeAwnmtuIgTHKdQ=s200",
      link: "https://leetcode.com/problems/invert-binary-tree/",
    },
  ];
  return (
    <div>
      <p>{state}</p>
      {temp.map((result) => {
        return <ResultContent result={result} key={result} />;
      })}
    </div>
  );
}

export default ResultsPage;
