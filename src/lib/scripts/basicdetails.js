export default function basicDetails(firstName,lastName,contact,email,city,state,pincode,linkedinUsername,gitUsername){
    return String.raw `
        \begin{center}
            {\Huge \scshape ${firstName} ${lastName}} \\ \vspace{1pt}
            ${city}, ${state}, ${pincode} \\ \vspace{1pt}
            \small \raisebox{-0.1\height}\faPhone\ ${contact} ~ \href{mailto:${email}}{\raisebox{-0.2\height}\faEnvelope\  \underline{${email}}} ~ 
            \href{https://linkedin.com/in/${linkedinUsername}}{\raisebox{-0.2\height}\faLinkedin\ \underline{linkedin.com/in/${linkedinUsername}}}  ~
            \href{https://github.com/${gitUsername}}{\raisebox{-0.2\height}\faGithub\ \underline{github.com/${gitUsername}}}
            \vspace{-8pt}
        \end{center}
    `
}