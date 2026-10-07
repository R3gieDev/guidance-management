
        // ==============================
        // SEARCH STUDENTS
        // ==============================

        const searchInput =
            document.getElementById("studentSearch");

        const searchButton =
            document.getElementById("searchButton");

        const tableBody =
            document.getElementById("studentTableBody");


        function searchStudents() {

            const searchValue =
                searchInput.value.toLowerCase().trim();

            const rows =
                tableBody.querySelectorAll("tr");


            rows.forEach(function(row) {

                const studentData =
                    row.textContent.toLowerCase();

                if (studentData.includes(searchValue)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        }


        // Search button

        searchButton.addEventListener(
            "click",
            searchStudents
        );


        // Search while typing

        searchInput.addEventListener(
            "input",
            searchStudents
        );


        // Press Enter

        searchInput.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    searchStudents();

                }

            }
        );



        // ==============================
        // ADD STUDENT
        // ==============================

        const studentForm =
            document.getElementById("studentForm");


        studentForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const lastName =
                    document.getElementById("lastname").value.trim();

                const firstName =
                    document.getElementById("firstname").value.trim();

                const grade =
                    document.getElementById("grade").value;

                const account =
                    document.getElementById("account").value;


                if (!lastName || !firstName || !grade) {

                    alert("Please complete the required fields.");

                    return;

                }


                // Get next student ID

                const studentCount =
                    tableBody.querySelectorAll("tr").length + 1;

                const studentID =
                    String(studentCount).padStart(3, "0");


                // Create new row

                const newRow =
                    document.createElement("tr");


                newRow.innerHTML = `

                    <td class="p-4 border-bottom">
                        ${studentID}
                    </td>

                    <td class="p-4 border-bottom">
                        ${lastName}
                    </td>

                    <td class="p-4 border-bottom">
                        ${firstName}
                    </td>

                    <td class="p-4 border-bottom">
                        ${grade}
                    </td>

                    <td class="p-4 border-bottom">
                        <span class="text-primary font-bold">
                            ${account}
                        </span>
                    </td>

                `;


                tableBody.appendChild(newRow);


                // Update total students

                document.getElementById(
                    "totalStudents"
                ).textContent =
                    String(
                        tableBody.querySelectorAll("tr").length
                    ).padStart(2, "0");


                // Clear form

                studentForm.reset();


                alert("Student added successfully!");

            }
        );



        // ==============================
        // CLOSE FORM
        // ==============================

        document
            .getElementById("closeForm")
            .addEventListener(
                "click",
                function() {

                    studentForm.reset();

                }
            );

