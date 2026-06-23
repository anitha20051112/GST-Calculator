function calculateGST() {

  let amount = parseFloat(
    document.getElementById("amount").value
  );

  let gstRate = parseFloat(
    document.getElementById("gst").value
  );

  if(isNaN(amount)){
    alert("Enter a valid amount");
    return;
  }

  let gstAmount = amount * gstRate / 100;
  let total = amount + gstAmount;

  document.getElementById("result").innerHTML = `
    <h3>Result</h3>
    <p>GST Amount: ₹${gstAmount.toFixed(2)}</p>
    <p>Total Amount: ₹${total.toFixed(2)}</p>
  `;
}