export default function skillsFunction(technicalSkills){
    let latex=``;
    
    let header = String.raw`
    \section{Technical Skills}
    \begin{itemize}[leftmargin=0.15in, label={}]
     \small{\item{
  `

    technicalSkills.forEach(element => {
        let str=''

        element.skillSet.forEach(item=>{
        str = str+ String.raw`${item}, `
        });
        str = str.slice(0,-1);

        if(element.vis){
            latex = latex+String.raw`
             \textbf{${element.title}}{:${str}} \\
            `
        }
    });

    return header+latex+String.raw`
        }}
        \end{itemize}
        \vspace{-16pt}
    `;

}