document.getElementById('calculate-btn').addEventListener('click', function() {
    // 1. Grab values from inputs and convert them to numbers
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    
    const resultSection = document.getElementById('result-section');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiStatusP = document.getElementById('bmi-status');

    // 2. Simple Validation Check
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid positive numbers for both weight and height.");
        return;
    }

    // 3. BMI Formula: weight (kg) / [height (m)]²
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    // 4. Determine status category and color code
    let status = "";
    let color = "";

    if (bmi < 18.5) {
        status = "Underweight";
        color = "#2196F3"; // Blue
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal Weight";
        color = "#4CAF50"; // Green
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
        color = "#FF9800"; // Orange
    } else {
        status = "Obese";
        color = "#F44336"; // Red
    }

    // 5. Update the UI layout dynamically
    bmiValueSpan.innerText = bmi;
    bmiStatusP.innerText = status;
    bmiStatusP.style.color = color;
    resultSection.style.borderLeftColor = color;
    
    // Reveal the results panel
    resultSection.classList.remove('hidden');
});