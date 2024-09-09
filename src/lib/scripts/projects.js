export default function projectFunction(projects){
    let latex=``;
    
    
    let header = String.raw`
    \section{Projects}
    \vspace{-5pt}
    \resumeSubHeadingListStart
  `
    projects.forEach(element => {
        if(element.vis){
            let skillset = ''
            element.skills.forEach(ele=>{
                skillset=skillset+ele+', '
            })
            skillset = skillset.slice(0,-1)
            latex = latex+String.raw`
            \resumeProjectHeading
                 {\textbf{Gym Reservation Bot} $|$ \emph{${skillset}}}{January 2021}
                \resumeItemListStart
                \resumeItem{${element.achievements[0]}}
                \resumeItem{${element.achievements[1]}}
                \resumeItem{${element.achievements[2]}}
                \resumeItemListEnd
            `
        }
    });

    return header+latex+String.raw`
    \resumeSubHeadingListEnd
    \vspace{-15pt}
    `;

}