function count() {
  let genCount = document.getElementById('gen-count').value,
      existCount = document.getElementById('exist-count').value;
      result = (existCount / genCount) * 100
  alert(`Percentage attendance: ${Math.round10(result, -1)}%`);
}
