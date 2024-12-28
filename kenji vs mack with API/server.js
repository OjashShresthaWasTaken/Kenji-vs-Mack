const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/audio', express.static(path.join(__dirname, 'audio')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/api/audios', (req, res) => {
    res.json({
        audios: {
            kenji: [
                { name: 'Attack1', url: '/audio/kenji/Attack1.mp3' },
                { name: 'Attack2', url: '/audio/kenji/Attack2.mp3' },
                { name: 'Death', url: '/audio/kenji/Death.mp3' },
                { name: 'Take Hit', url: '/audio/kenji/Take Hit.mp3' },
            ],
            samuraiMack: [
                { name: 'Attack1', url: '/audio/samuraiMack/Attack1.mp3' },
                { name: 'Attack2', url: '/audio/samuraiMack/Attack2.mp3' },
                { name: 'Death', url: '/audio/samuraiMack/Death.mp3' },
                { name: 'Take Hit', url: '/audio/samuraiMack/Take Hit.mp3' },
            ],
            background: { name: 'Background Music', url: '/audio/background.mp3' },
        },
    });
});

app.get('/api/images', (req, res) => {
    res.json({
        images: {
            kenji: [
                { name: 'Attack1', url: '/img/kenji/Attack1.png' },
                { name: 'Attack2', url: '/img/kenji/Attack2.png' },
                { name: 'Death', url: '/img/kenji/Death.png' },
                { name: 'Fall', url: '/img/kenji/Fall.png' },
                { name: 'Idle', url: '/img/kenji/Idle.png' },
                { name: 'Jump', url: '/img/kenji/Jump.png' },
                { name: 'Run', url: '/img/kenji/Run.png' },
                { name: 'Take Hit', url: '/img/kenji/Take hit.png' },
            ],
            samuraiMack: [
                { name: 'Attack1', url: '/img/samuraiMack/Attack1.png' },
                { name: 'Attack2', url: '/img/samuraiMack/Attack2.png' },
                { name: 'Death', url: '/img/samuraiMack/Death.png' },
                { name: 'Idle', url: '/img/samuraiMack/Idle.png' },
                { name: 'Jump', url: '/img/samuraiMack/Jump.png' },
                { name: 'Run', url: '/img/samuraiMack/Run.png' },
                { name: 'Take Hit', url: '/img/samuraiMack/Take Hit.png' },
                {
                    name: 'Take Hit (White Silhouette)',
                    url: '/img/samuraiMack/Take Hit - white silhouette.png',
                },
            ],
            global: [
                { name: 'Background', url: '/img/background.png' },
                { name: 'Shop', url: '/img/shop.png' },
            ],
        },
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Media API. Use /api/audios or /api/images to get file details.');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
