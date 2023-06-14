var mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore'
});

// Kết nối cơ sở dữ liệu
db.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');

  // Tạo bảng messages nếu chưa tồn tại
  let createTableQuery =
    'CREATE TABLE IF NOT EXISTS messages (id INT AUTO_INCREMENT PRIMARY KEY, content TEXT, sender VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)';
  db.query(createTableQuery, function(err, result) {
    if (err) throw err;
    console.log("Table 'messages' created or already exists");

    // Tiếp tục viết các phần khác của ứng dụng ở đây

    // Ví dụ: Thu hồi tin nhắn từ bảng messages
    let selectQuery = 'SELECT * FROM messages';
    db.query(selectQuery, function(err, results) {
      if (err) throw err;
      console.log('Retrieved messages:');
      console.log(results);
    });
  });
});
