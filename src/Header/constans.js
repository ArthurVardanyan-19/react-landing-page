import dashboard from "../assets/icons/dashboard.svg";
import sections from "../assets/icons/sections.svg";
import documents from "../assets/icons/documents.svg";
import github from "../assets/icons/github.svg";

export const headerInfo = [
     {
        icon: {
            src: dashboard,
            alt: "Dashboard"
        },
        title: "Pages",
        multi: true
     },
     {
        icon: {
            src: sections,
            alt: "Sections"
        },
        title: "Sections",
        multi: true

     },
     {
        icon:{
            src: documents,
            alt: "Docs"
        },
        title: "Docs",
        multi: true
     },
     {
        icon:{
            src: github,
            alt: "Github"
        },
        title: "Github",
        multi: false
     }
]