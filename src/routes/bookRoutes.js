const express = require('express');
const router = express.Router();

// Các route cho việc quản lý sách
router.get('/', (req, res) => {
    res.send('Danh sách sách');
});

router.post('/', (req, res) => {
    // Thêm sách mới
    res.send('Thêm sách mới');
});

module.exports = router;
