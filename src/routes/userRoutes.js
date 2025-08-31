const express = require('express');
const router = express.Router();

// Các route cho việc quản lý người dùng
router.get('/', (req, res) => {
    res.send('Danh sách người dùng');
});

router.post('/', (req, res) => {
    // Thêm người dùng mới
    res.send('Thêm người dùng mới');
});

module.exports = router;
