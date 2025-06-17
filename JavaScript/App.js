import React, { useState } from "react";

function CurrencyConverter() {
  const [dollar, setDollar] = useState("");
  const exchangeRate = 73.66;
  const rupee = dollar ? (dollar * exchangeRate).toFixed(2) : "";

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>{exchangeRate} Indian Rupee</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={dollar}
          onChange={(e) => setDollar(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
          placeholder="Enter dollar amount"
        />
        Dollar
      </div>
      <div>
        <input
          type="text"
          value={rupee}
          readOnly
          style={{ padding: "5px", marginRight: "10px" }}
        />
        Rupee
      </div>
    </div>
  );
}

export default CurrencyConverter;
