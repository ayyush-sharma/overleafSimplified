export default function achievementsFunction(achievements){
    if(achievements.title==' '){
        return ' ';
    }

    let latex=``;
    
    let header = String.raw`
    \section{${achievements.title}}
     \resumeSubHeadingListStart
     \resumeItemListStart
  `
    achievements.lists.forEach(element => {
        latex = latex +String.raw`
         \resumeItem{${element}}
        `
    });
    return header+latex+String.raw`
       \resumeItemListEnd
    \resumeSubHeadingListEnd
    `;

}