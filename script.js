// ==================== CONFIGURAÇÃO ====================
const API_URL = 'https://ficha-rpg-2-0.onrender.com/api';

let currentUser = null;
let currentCharacter = null;
let currentTierVal = 'D';

const TIERS = {
    'D': { pax: 40, det: 12, def: 8, attrLimit: 6, powerLimit: 2 },
    'C': { pax: 60, det: 15, def: 10, attrLimit: 9, powerLimit: 2 },
    'B': { pax: 80, det: 18, def: 12, attrLimit: 12, powerLimit: 3 },
    'A': { pax: 100, det: 21, def: 14, attrLimit: 15, powerLimit: 4 },
    'S': { pax: 120, det: 25, def: 16, attrLimit: 18, powerLimit: 5 }
};

// ========== FUNÇÕES DA INTERFACE ==========
function setTier(btn, tier) {
    document.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTierVal = tier;
    document.getElementById('rankDisplay').innerText = tier;
    document.getElementById('paxMaxDisplay').innerText = TIERS[tier].pax;
    document.getElementById('tierValue').value = tier;
    calcPax();
}

function toggleCond(btn) { btn.classList.toggle('active'); }

function changeRoteiro(delta) {
    let val = parseInt(document.getElementById('roteiroVal').innerText) || 0;
    val += delta;
    if (val < 0) val = 0;
    document.getElementById('roteiroVal').innerText = val;
}

function toggleCrisis() { 
    document.getElementById('crisisBtn').classList.toggle('active'); 
}

// ========== ORIGEM E ARQUÉTIPO ==========
function applyOriginLogic() {
    const origin = document.getElementById('origin').value;
    document.getElementById('pot_bonus').value = 0;
    document.getElementById('res_bonus').value = 0;
    document.getElementById('agi_bonus').value = 0;
    document.getElementById('men_bonus').value = 0;
    
    if (origin === 'Kryptoniano') {
        document.getElementById('pot_bonus').value = 3;
        document.getElementById('res_bonus').value = 3;
    } else if (origin === 'Thanagariano') {
        document.getElementById('agi_bonus').value = 2;
        document.getElementById('pot_bonus').value = 1;
    } else if (origin === 'Marciano') {
        document.getElementById('men_bonus').value = 3;
    } else if (origin === 'Velocista') {
        document.getElementById('agi_bonus').value = 3;
    }
    calcPax();
}

function applyArchetypeLogic() { 
    calcPax(); 
}

// ========== ADICIONAR ITENS ==========
function addFromSelect() {
    const select = document.getElementById('powerSelect');
    const val = select.value;
    if(!val) return;
    const parts = val.split('|');
    createPowerCard(parts[0], parseInt(parts[1]), parts[2], parts[3] || 'grad', 'powers-container', '');
    select.value = "";
}

function createPowerCard(name, cost, page, type, containerId, savedDesc = '') {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'power-card';
    div.dataset.base = cost;
    
    let costInput = '';
    if (type === 'grad') {
        costInput = `Grau: <input type="number" class="p-grade" value="1" min="1" max="5" style="width:50px;" onchange="updatePowerCost(this, ${cost})"> = <span class="p-total">${cost}</span> PAX`;
    } else {
        costInput = `<input type="number" class="p-cost" value="${cost}" readonly style="width:50px;"> PAX`;
    }
    
    div.innerHTML = `
        <button class="btn-remove" onclick="removePower(this)">✕</button>
        <div class="power-header">
            <div class="power-name">${name}</div>
            <div class="power-meta">${page}</div>
            <div class="cost-ctrl">${costInput}</div>
        </div>
        <div class="editable-box p-desc" contenteditable="true" placeholder="Descrição detalhada..."></div>
        <div class="limit-text">⚠️ LIMITE DE GRAU EXCEDIDO!</div>
    `;
    container.appendChild(div);
    calcPax();
}

function updatePowerCost(input, base) {
    const grade = parseInt(input.value) || 1;
    const total = grade * base;
    input.parentElement.querySelector('.p-total').innerText = total;
    calcPax();
}

function removePower(btn) { 
    btn.parentElement.remove(); 
    calcPax(); 
}

// ========== CÁLCULO PAX ==========
function calcPax() {
    let totalSpent = 0;
    const tierData = TIERS[currentTierVal];
    
    document.querySelectorAll('.stat-box').forEach(box => {
        const base = parseInt(box.querySelector('.attr-base').value) || 0;
        const bonus = parseInt(box.querySelector('.attr-bonus').value) || 0;
        const total = base + bonus;
        box.querySelector('.stat-total').innerText = total > 0 ? '+' + total : total;
        if (total > tierData.attrLimit) {
            box.classList.add('limit-error');
        } else {
            box.classList.remove('limit-error');
        }
        if (base > 0) totalSpent += (base / 3) * 5;
    });
    
    document.querySelectorAll('.power-card').forEach(card => {
        let cost = 0;
        if (card.querySelector('.p-total')) {
            cost = parseInt(card.querySelector('.p-total').innerText) || 0;
        } else if (card.querySelector('.p-cost')) {
            cost = parseInt(card.querySelector('.p-cost').value) || 0;
        }
        totalSpent += cost;
    });
    
    document.getElementById('paxSpentDisplay').innerText = Math.ceil(totalSpent);
    const status = document.getElementById('paxStatus');
    if(totalSpent > tierData.pax) {
        status.innerText = "⚠️ EXCEDIDO!";
        status.style.color = "#ff4444";
    } else {
        status.innerText = "OK";
        status.style.color = "#00ff9d";
    }
    
    const esp = (parseInt(document.getElementById('esp_base').value)||0) + (parseInt(document.getElementById('esp_bonus').value)||0);
    const res = (parseInt(document.getElementById('res_base').value)||0) + (parseInt(document.getElementById('res_bonus').value)||0);
    const agi = (parseInt(document.getElementById('agi_base').value)||0) + (parseInt(document.getElementById('agi_bonus').value)||0);
    
    document.getElementById('det').value = tierData.det + esp;
    document.getElementById('def').value = tierData.def + res;
    document.getElementById('init').value = agi;
}

// ========== BACKEND ==========
async function checkServerConnection() {
    const statusDiv = document.getElementById('serverStatus');
    try {
        const response = await fetch(API_URL.replace('/api', '/'));
        if (response.ok) {
            statusDiv.innerHTML = '✅ Servidor conectado';
            statusDiv.style.color = '#00ff9d';
            document.getElementById('connectionStatus').className = 'status-online';
        }
    } catch {
        statusDiv.innerHTML = '⚠️ Servidor offline';
        statusDiv.style.color = '#ff4444';
        document.getElementById('connectionStatus').className = 'status-offline';
    }
}

async function doLogin() {
    const username = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value;
    if (!username || !password) {
        document.getElementById('loginError').innerText = 'Preencha os campos!';
        return;
    }
    currentUser = username;
    document.getElementById('loginOverlay').style.display = 'none';
    showCharacterSelect();
}

async function doRegister() {
    const username = document.getElementById('regUser').value.trim();
    const password = document.getElementById('regPass').value;
    const confirm = document.getElementById('regConfirm').value;
    if (!username || !password) {
        document.getElementById('regError').innerText = 'Preencha os campos!';
        return;
    }
    if (password !== confirm) {
        document.getElementById('regError').innerText = 'Senhas não conferem!';
        return;
    }
    document.getElementById('regError').style.color = '#00ff9d';
    document.getElementById('regError').innerText = '✅ Conta criada!';
    setTimeout(() => showLogin(), 1500);
}

function showRegister() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.getElementById('registerOverlay').style.display = 'flex';
}

function showLogin() {
    document.getElementById('registerOverlay').style.display = 'none';
    document.getElementById('loginOverlay').style.display = 'flex';
}

function logout() {
    currentUser = null;
    location.reload();
}

function showCharacterSelect() {
    document.getElementById('userNameDisplay').innerText = currentUser;
    document.getElementById('charSelectOverlay').style.display = 'flex';
    document.getElementById('dossierContainer').style.display = 'block';
    document.getElementById('userInfo').style.display = 'flex';
}

function createNewCharacter() {
    currentCharacter = 'char_' + Date.now();
    document.getElementById('charSelectOverlay').style.display = 'none';
    calcPax();
}

function saveCurrentToServer() { 
    alert('Personagem salvo!'); 
}

function saveSheet() { 
    saveCurrentToServer(); 
}

function showShareModal() { 
    alert('Funcionalidade de compartilhamento em breve!'); 
}

function showImportModal() { 
    const code = prompt('Digite o código de compartilhamento:');
    if (code) alert('Código: ' + code);
}

// ========== INICIALIZAÇÃO ==========
window.onload = () => {
    checkServerConnection();
    setInterval(checkServerConnection, 30000);
    calcPax();
    document.querySelectorAll('.attr-base, .attr-bonus').forEach(el => {
        el.addEventListener('input', calcPax);
    });
};