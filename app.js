const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const loanTerm = parseFloat(document.getElementById("loanTerm").value);
  
  if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTerm)) {
    const monthlyInterestRate = interestRate / 1200;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 / (1 + monthlyInterestRate), loanTerm * 12));
    const totalPayment = monthlyPayment * loanTerm * 12;
    const totalInterest = totalPayment - loanAmount;
    
    document.getElementById("result").innerHTML = `
      <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: ${totalPayment.toFixed(2)}</p>
      <p>Total Interest: ${totalInterest.toFixed(2)}</p>
    `;
  } else {
    document.getElementById("result").innerHTML = "Please enter valid values.";
  }
});
