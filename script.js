function compound(amount, rate, years) {
  return amount * Math.pow(1 + rate / 100, years);
}

function addBin() {
  const div = document.createElement('div');
  div.className = 'bin';
  div.innerHTML = `
    <input class="bin-name" placeholder="Name">
    <input class="min-rate" type="number" placeholder="Min %">
    <input class="max-rate" type="number" placeholder="Max %">
    <button class="remove-bin">×</button>
  `;
  document.getElementById('bins').appendChild(div);
}

document.getElementById('add-bin').addEventListener('click', addBin);

document.getElementById('bins').addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-bin')) {
    e.target.parentElement.remove();
  }
});

document.getElementById('simulate').addEventListener('click', function () {
  const initial = parseFloat(document.getElementById('initial').value || 0);
  const years = parseInt(document.getElementById('years').value || 0, 10);
  const rows = Array.from(document.querySelectorAll('#bins .bin'));
  const results = document.getElementById('results');
  results.innerHTML = '<tr><th>Bin</th><th>Min Final</th><th>Max Final</th></tr>';
  rows.forEach(bin => {
    const name = bin.querySelector('.bin-name').value || 'Unnamed';
    const minRate = parseFloat(bin.querySelector('.min-rate').value || 0);
    const maxRate = parseFloat(bin.querySelector('.max-rate').value || 0);
    const minFinal = compound(initial, minRate, years).toFixed(2);
    const maxFinal = compound(initial, maxRate, years).toFixed(2);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="text-align:left">${name}</td><td>$${minFinal}</td><td>$${maxFinal}</td>`;
    results.appendChild(tr);
  });
});
