const express = require('express');
const router = express.Router();

// Các route cho việc quản lý mượn/trả sách
router.get('/', (req, res) => {
    res.send('Danh sách mượn/trả sách');
});

router.post('/', (req, res) => {
    // Xử lý mượn sách
    res.send('Mượn sách thành công');
});

module.exports = router;
