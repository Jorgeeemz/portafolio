function loadScoreboard() {
    const attempts = JSON.parse(localStorage.getItem('phishing_attempts') || '[]');
    // Ordenar por puntuación descendente y luego por fecha (más reciente primero)
    attempts.sort((a,b) => b.score - a.score || b.timestamp - a.timestamp);
  
    // Mostrar ranking
    const tbody = document.getElementById('rankingBody');
    tbody.innerHTML = '';
    attempts.forEach(att => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = att.alias;
      row.insertCell(1).textContent = `${att.score}/${att.total}`;
      row.insertCell(2).textContent = new Date(att.timestamp).toLocaleString();
      row.insertCell(3).textContent = att.duration;
    });
  
    // Estadísticas
    if (attempts.length === 0) {
      document.getElementById('stats').innerHTML = '<p class="muted">Aún no hay intentos. ¡Sé el primero en realizar el quiz!</p>';
      return;
    }
  
    const totalScore = attempts.reduce((sum, att) => sum + att.score, 0);
    const avgScore = (totalScore / attempts.length).toFixed(1);
    const avgDuration = Math.round(attempts.reduce((sum, att) => sum + att.duration, 0) / attempts.length);
  
    // Escenario más fallado (usar los IDs de preguntas del banco global)
    // Necesitamos importar questions desde Preguntas.js
    const allIncorrectIds = attempts.flatMap(att => att.incorrectIds);
    const freq = {};
    allIncorrectIds.forEach(id => { freq[id] = (freq[id] || 0) + 1; });
    let mostFailedId = null;
    let maxCount = 0;
    for (const [id, count] of Object.entries(freq)) {
      if (count > maxCount) { maxCount = count; mostFailedId = id; }
    }
    let mostFailedText = 'N/A';
    if (mostFailedId && typeof questions !== 'undefined') {
      const q = questions.find(q => q.id === parseInt(mostFailedId));
      mostFailedText = q ? q.scenario.substring(0, 80) + '…' : 'ID ' + mostFailedId;
    }
  
    document.getElementById('stats').innerHTML = `
      <div class="stat-card"><i class="fas fa-users"></i><h3>${attempts.length}</h3><p>Participantes</p></div>
      <div class="stat-card"><i class="fas fa-chart-simple"></i><h3>${avgScore}</h3><p>Promedio de aciertos</p></div>
      <div class="stat-card"><i class="fas fa-clock"></i><h3>${avgDuration}s</h3><p>Tiempo promedio</p></div>
      <div class="stat-card"><i class="fas fa-bug"></i><h3>${maxCount}</h3><p>Veces fallado<br><small>${mostFailedText}</small></p></div>
    `;
  }
  
  document.getElementById('resetDataBtn')?.addEventListener('click', () => {
    if (confirm('¿Eliminar todos los resultados del scoreboard? Esta acción no se puede deshacer.')) {
      localStorage.removeItem('phishing_attempts');
      loadScoreboard();
    }
  });
  
  loadScoreboard();