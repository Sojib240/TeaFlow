// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// export const journalsContext = createContext();

// const JournalContext = (props) => {
//     const [journalApiData, setjournalApiData] = useState([]);
//     //
//     const calljournals = () => {
//         const journalapi =
//             "https://tea-flows-journal-default-rtdb.firebaseio.com/journalData.json";
//         axios
//             .get(journalapi)
//             .then((response) => {
//                 const formatedValueOfJournal = Object.values(response.data);
//                 setjournalApiData(formatedValueOfJournal[0]);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     useEffect(() => {
//         calljournals();
//     }, []);
//     //
//     return (
//         <journalsContext.Provider value={[journalApiData, setjournalApiData]}>
//             {props.children}
//         </journalsContext.Provider>
//     );
// };

// export default JournalContext;
