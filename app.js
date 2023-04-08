document.addEventListener("DOMContentLoaded", () => {
    const AddBtn = document.querySelector(".add-task-btn");
    const TaskBox = document.getElementById("all-tasks");
    var TaskContainer = document.querySelector(".home-container");


    const EditBtn = document.querySelectorAll("#fourth");
    const RemoveBtn = document.querySelectorAll("#remove");
    var increase = 30;


    AddBtn.addEventListener("click", () => {
        const myTask = document.querySelector("#myTask").value;
        var Taskdate = document.querySelector("#mydate").value;
        var TaskTime = document.querySelector("#myTime").value;

        if (Taskdate == "") {
            Taskdate = "01 Jan";

        } else {
            var Months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
            ];
            var DateData = Taskdate.split("-");
            var onlyMonth = DateData[1];
            var onlyDate = DateData[2];

            // console.log(onlyMonth);
            // console.log(onlyDate);

            for (i = 1; i < 13; i++) {
                if (i < 10) {
                    var element = "0" + i;
                }
                if (element == onlyMonth) {
                    onlyMonth = Months[i - 1];
                }
            }
        }

        if (TaskTime == "") {
            TaskTime = "00:00 AM";
        } else {
            var TimeArray = TaskTime.split(":");
            let FirstNum = TimeArray[0];
            let SecondNum = TimeArray[1];
            let AmPm = "PM";

            if (FirstNum > 12) {
                FirstNum -= 12;
                if (FirstNum < 10) {
                    FirstNum = "0" + FirstNum;

                }
                TaskTime = FirstNum + ":" + SecondNum + " " + AmPm;
            } else {
                AmPm = "AM";

                TaskTime = FirstNum + ":" + SecondNum + " " + AmPm;
            }
        }

        if (myTask == "") {
            alert("Enter the Task First");
        }
        else {
            let ul = document.createElement("ul");
            ul.setAttribute("id", "all-tasks");

            let li1 = document.createElement("li");
            li1.setAttribute("id", "first");
            let completed = document.createElement("p");
            completed.textContent = "completed";
            let input = document.createElement("input");
            input.type = "checkbox";
            input.name = "TaskCompleted";
            input.setAttribute("id", "TaskCompleted");
            li1.appendChild(completed);
            li1.appendChild(input);

            let li2 = document.createElement("li");
            li2.setAttribute("id", "second");
            let secondPara = document.createElement("p");
            secondPara.setAttribute("id", "task-para");
            secondPara.textContent = myTask;
            li2.appendChild(secondPara);

            let li3 = document.createElement("li");
            li3.setAttribute("id", "third");
            let DatePara = document.createElement("p");
            DatePara.setAttribute("id", "date");
            let TimePara = document.createElement("p");
            TimePara.setAttribute("id", "time");

            TimePara.textContent = TaskTime;
            if (onlyDate != undefined) {
                DatePara.textContent = onlyDate + " " + onlyMonth;
            } else {
                DatePara.textContent = Taskdate;
            }
            li3.appendChild(DatePara);
            li3.appendChild(TimePara);

            let li4 = document.createElement("li");
            li4.setAttribute("id", "fourth");
            let FourthEditBtn = document.createElement("button");
            FourthEditBtn.setAttribute("id", "edit");
            FourthEditBtn.textContent = "Edit";
            let editIcon = document.createElement("i");
            editIcon.setAttribute("class", "fa-solid fa-pen-to-square");

            FourthEditBtn.appendChild(editIcon);
            li4.appendChild(FourthEditBtn);

            let li5 = document.createElement("li");
            li5.setAttribute("id", "fifth");
            let fifthEditBtn = document.createElement("button");
            fifthEditBtn.setAttribute("id", "remove");
            fifthEditBtn.textContent = "Remove";
            let RemoveIcon = document.createElement("i");
            RemoveIcon.setAttribute("class", "fa-sharp fa-solid fa-trash");

            fifthEditBtn.appendChild(RemoveIcon);
            li5.appendChild(fifthEditBtn);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);

            increase = increase + 10;
            document.querySelector(
                ".home-container"
            ).style.height = `${increase}rem`;

            
            TaskContainer.appendChild(ul);

            let  min = 0;
            let  max = 10;
            let  random = Math.floor(Math.random() * (max - min) + min);
             
            const colors = ['#F4C5BB', "#E8F4BB", "#BBD0F4","fuchsia","antiquewhite","darkgrey","darkseagreen","lightskyblue", "#BFB6B7", "#A3FA45"]

            ul.style.backgroundColor = colors[random];

            li4.addEventListener("click", (e) => {
                const editTarget = e.target.parentNode.parentNode;
                const inputTextval =
                    editTarget.querySelector("#second #task-para").textContent;

                document.getElementById("myTask").value = inputTextval;

                var Parent = li4.parentNode;
                TaskContainer.removeChild(Parent);
            });

            li5.addEventListener("click", () => {
                var Parent = li5.parentNode;
                TaskContainer.removeChild(Parent);
            });

            var TaskCompleted = document.querySelectorAll("#TaskCompleted");
            
            TaskCompleted.forEach((checkbox) => {
                checkbox.addEventListener('change', (e) => {
                    const TargetCheckbox = e.target;
                    const checkboxTask = TargetCheckbox.parentNode.parentNode;

                    if (TargetCheckbox.checked) {
                        checkboxTask.querySelector("#second #task-para").style.textDecoration = "line-through";
                        checkboxTask.querySelector("#third #date").style.textDecoration = "line-through";
                        checkboxTask.querySelector("#third #time").style.textDecoration = "line-through";
                    } 
                    else {
                        checkboxTask.querySelector("#second #task-para").style.textDecoration = "none";
                        checkboxTask.querySelector("#third #date").style.textDecoration = "none";
                        checkboxTask.querySelector("#third #time").style.textDecoration = "none";
                    }



                })
            })

            document.getElementById("myTask").value = "";
            document.getElementById("mydate").value = "";
            document.getElementById("myTime").value = "";


        }
    });
});
