        const extractStudentData = ()=> {
            const table = document.getElementById('ctl24_xgvAlunosTurma_DXMainTable');
            const rows = table.querySelectorAll('tr.dxgvDataRow_Edu, tr.dxgvDataRowAlt_Edu');
            const studentData = [];

            rows.forEach(row => {
                const ra = row.children[2].textContent.trim();
                const nome = row.children[3].textContent.trim();
                studentData.push({ ra, nome });
            });

            return studentData;
        }

        
        const downloadStudentData = ()=> {
            const students = extractStudentData();
            let textContent = "";

            students.forEach(student => {
                textContent += `${student.nome}\n`;
            });

            const blob = new Blob([textContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'student_data.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
downloadStudentData()
