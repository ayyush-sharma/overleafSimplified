export default function educateFunction(education){
    let latex=``;
    let header = String.raw`
    \section{Education}
  \resumeSubHeadingListStart
  
  `
    education.forEach(element => {
            latex = latex+String.raw`
            \resumeSubheading
                {${element.name}}{${element.city}, ${element.state}}
                {${element.degree}}{${element.endMonth} ${element.endYear}}
                \\
                {${element.gradeTitle}: ${element.grade}}
            `
    });

    return header+latex+String.raw`
    \resumeSubHeadingListEnd
    `;

}