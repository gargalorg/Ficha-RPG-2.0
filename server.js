const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
    res.json({
        message: 'JLU RPG Backend',
        status: 'online',
        endpoints: {
            auth: 'POST /api/auth',
            characters: 'GET /api/characters/:username',
            character: 'GET/POST/DELETE /api/character/:username/:charId',
            share: 'POST /api/share | GET /api/share/:code'
        }
    });
});

// Arquivo para armazenar os dados
const DATA_FILE = path.join(__dirname, 'database.json');

function initDB() {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify({ users: {}, shareCodes: {} }, null, 2));
    }
}
initDB();

function readDB() {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
}

function writeDB(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// ==================== ROTAS DE USUÁRIO ====================

app.post('/api/auth', (req, res) => {
    const { username, password, action } = req.body;
    const db = readDB();
    
    if (action === 'register') {
        if (db.users[username]) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }
        db.users[username] = { password, characters: {} };
        writeDB(db);
        return res.json({ success: true, message: 'Conta criada com sucesso!' });
    }
    
    if (action === 'login') {
        if (!db.users[username] || db.users[username].password !== password) {
            return res.status(401).json({ error: 'Usuário ou senha inválidos' });
        }
        return res.json({ success: true, username });
    }
    
    res.status(400).json({ error: 'Ação inválida' });
});

app.post('/api/character/:username/:charId', (req, res) => {
    const { username, charId } = req.params;
    const characterData = req.body;
    const db = readDB();
    
    if (!db.users[username]) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    db.users[username].characters[charId] = characterData;
    writeDB(db);
    res.json({ success: true });
});

app.get('/api/characters/:username', (req, res) => {
    const { username } = req.params;
    const db = readDB();
    
    if (!db.users[username]) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.json(db.users[username].characters);
});

app.get('/api/character/:username/:charId', (req, res) => {
    const { username, charId } = req.params;
    const db = readDB();
    
    if (!db.users[username] || !db.users[username].characters[charId]) {
        return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    
    res.json(db.users[username].characters[charId]);
});

app.delete('/api/character/:username/:charId', (req, res) => {
    const { username, charId } = req.params;
    const db = readDB();
    
    if (db.users[username] && db.users[username].characters[charId]) {
        delete db.users[username].characters[charId];
        writeDB(db);
    }
    
    res.json({ success: true });
});

// ==================== COMPARTILHAMENTO ====================

app.post('/api/share', (req, res) => {
    const { characterData } = req.body;
    const shareCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    const db = readDB();
    
    if (!db.shareCodes) db.shareCodes = {};
    db.shareCodes[shareCode] = {
        data: characterData,
        createdAt: Date.now(),
        expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000)
    };
    writeDB(db);
    
    res.json({ shareCode });
});

app.get('/api/share/:code', (req, res) => {
    const { code } = req.params;
    const db = readDB();
    const shareData = db.shareCodes?.[code];
    
    if (!shareData) {
        return res.status(404).json({ error: 'Código inválido ou expirado' });
    }
    
    if (shareData.expiresAt < Date.now()) {
        delete db.shareCodes[code];
        writeDB(db);
        return res.status(404).json({ error: 'Código expirado' });
    }
    
    res.json(shareData.data);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});