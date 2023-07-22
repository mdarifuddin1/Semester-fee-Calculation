document.getElementById("calculate-btn").addEventListener("click", function () {
    const admission = parseFloat(document.getElementById("admission").value);
    const perCredit = parseFloat(document.getElementById("per-credit").value);
    const totalCredit = parseFloat(document.getElementById("total-credit").value);
    const labThesis = parseFloat(document.getElementById("lab-thesis").value);
    const other = parseFloat(document.getElementById("other").value);
    const regi = parseFloat(document.getElementById("regi").value);
    const late = parseFloat(document.getElementById("late").value);
    
    if (isNaN(perCredit) || isNaN(totalCredit)) {
      alert("Please enter valid numbers .");
      return;
    }
    
    const semesterTuition = perCredit * totalCredit + labThesis +  other + admission + regi + late;
    
    document.getElementById("result").textContent = `Total Semester Tuition Fee: ${semesterTuition.toFixed(4)}`;
  });
  