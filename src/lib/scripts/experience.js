export default function experienceFunction(experience){
    let latex=``;
    let header = String.raw`
    \section{Experience}
  \resumeSubHeadingListStart
  `
    experience.forEach(element => {
        if(element.vis){
            latex = latex+String.raw`
            \resumeSubheading
                {${element.companyName}}{${element.startMonth} ${element.startYear} -- ${element.endMonth} ${element.endYear}}
                {${element.designation}}{${element.city}, ${element.state}}
                \resumeItemListStart
                \resumeItem{${element.achievements[0]}}
                \resumeItem{${element.achievements[1]}}
                \resumeItem{${element.achievements[2]}}
                \resumeItem{${element.achievements[3]}}
                \resumeItemListEnd
            `
        }
    });

    return header+latex+String.raw`
    \resumeSubHeadingListEnd
    \vspace{-16pt}
    `;

}