import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const GeneratePdf = () =>{

    const DownloadReort = () =>{

        const generatePdf = new jsPDF("p","px","a4")
        var head = [['ID', 'Country', 'Rank', 'Capital']]
        var body = [
            [1, 'Denmark', 7.526, 'Copenhagen'],
            [2, 'Switzerland', 7.509, 'Bern'],
            [3, 'Iceland', 7.501, 'Reykjavík'],
            [4, 'Norway', 7.498, 'Oslo'],
            [5, 'Finland', 7.413, 'Helsinki'],
        ]

        generatePdf.text(150,20,"hi"); // x,y,text
        
        generatePdf.addImage("data:image/jpeg;base64,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ZLxERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf/9k=",'JPEG', 20, 40, 100, 100)
        
        generatePdf.autoTable({  
            head: head, 
            body: body,
            startY: 200,  
            theme: 'grid',  
            columnStyles: {  
                0: {  
                    cellWidth: 80,  
                },  
                1: {  
                    cellWidth: 80,  
                },  
                2: {  
                    cellWidth: 80,  
                },
                3: {  
                    cellWidth: 80,  
                }   
            },  
            styles: {  
                minCellHeight: 20  
            }       
        })

        generatePdf.addPage()
        generatePdf.setPage(2);
        generatePdf.setFontSize(25);
        generatePdf.setFont('Monotype Baskerville Italic',"italic");
        generatePdf.setTextColor(255,0,0); // We need to pass decimal value of color
        generatePdf.text('I am on page 2', 100, 20);
        
        generatePdf.save("a1.pdf");
        
    } 

    return(
        <>
        <div>View Report</div>
        <button onClick={()=>DownloadReort()}>Download report</button>
        </>
    )
}

export default GeneratePdf;