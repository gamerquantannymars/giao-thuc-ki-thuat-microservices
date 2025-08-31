const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng quản lý thư viện!');
});

// Các route dành cho quản lý sách, người dùng, mượn/trả sách sẽ được thêm ở đây.

app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});
