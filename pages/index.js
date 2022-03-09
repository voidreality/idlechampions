import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tags: 'ams',
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

const hew = `$
\\begin{equation}
\\begin{split} 
0.25 * 
(1+\\alpha) * 
(1 +
(
  (0.1 * 
    (1 + 
      (\\beta * 
        (1 + 
          (0.004 * (\\gamma - 1)
        )
      ) * 
      ( 1 + \\delta )
    )
  ) * 
  ( 1+\\epsilon ) *
  ( 1+\\zeta ) *
) * \\eta
)
)
\\end{split} 
\\end{equation}
$`;

function CalculateHew(){
  let specBuff = 1;
  let itemRarity = 150/100;
  let itemLevel = 100;
  let itemShiny = 0;
  let featBuff1 = 40/100;
  let featBuff2 = 0/100;
  let adjChampions = 4;
  let formula = 0.25 
  * (1+specBuff) 
  * (1+((0.1 * (1+(itemRarity * (1+((0.4/100) * (itemLevel-1))) 
  * (1+itemShiny))) 
  * (1+featBuff1)
  * (1+featBuff2)) 
  * adjChampions));
  return (formula*100).toLocaleString(
    undefined, 
    { maximumFractionDigits: 2 }
  ) + "%";
}

export default function Hew() {
  return (
    <div>
      <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>
          {hew}
        </MathJax>
      </MathJaxContext>
    </div>
  )
}
